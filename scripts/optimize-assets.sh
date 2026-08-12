#!/usr/bin/env bash
#
# optimize-assets.sh
# ------------------
# Produces web-optimized versions of the heavy media used by RouteCanela.
# The originals on the server are far too large:
#   - hero video: ~74 MB, moov atom at END of file (NOT faststart) -> stalls playback
#   - two event images: ~6.8 MB PNG photos -> should be ~150 KB WebP
#
# This script does NOT touch your server. It reads the raw originals from
# ./assets-src and writes optimized files into ./assets-dist. You then upload
# the contents of assets-dist/ into your https://www.routecanela.de/assets folder.
#
# Requirements (install once):
#   macOS:  brew install ffmpeg webp
#   Debian: sudo apt-get install ffmpeg webp
#
# Expected input layout (mirror of the server /assets folder):
#   assets-src/videos/routecanela-video-web.mp4        (the original ~74 MB file)
#   assets-src/images/events/Carnavalkultere_routecanela.png
#   assets-src/images/events/Berlin_routecanela.png
#
# Usage:
#   bash scripts/optimize-assets.sh
set -euo pipefail

SRC="${SRC:-assets-src}"
OUT="${OUT:-assets-dist}"

need() { command -v "$1" >/dev/null 2>&1 || { echo "ERROR: '$1' not found. Install it first (see header)."; exit 1; }; }
need ffmpeg
need ffprobe
need cwebp

mkdir -p "$OUT/videos" "$OUT/images/events"

VIDEO_IN="$SRC/videos/routecanela-video-web.mp4"

if [[ -f "$VIDEO_IN" ]]; then
  echo "==> Encoding web-optimized MP4 (H.264, 1080p max, +faststart)"
  # -movflags +faststart moves the moov atom to the front so the browser can
  #   start playing almost immediately instead of downloading the whole file.
  # scale caps height at 1080 while preserving aspect ratio (even dimensions).
  # CRF 24 + slow preset = strong quality/size trade-off for a muted bg loop.
  ffmpeg -y -i "$VIDEO_IN" \
    -vf "scale=-2:'min(1080,ih)'" \
    -an \
    -c:v libx264 -profile:v high -pix_fmt yuv420p \
    -preset slow -crf 24 \
    -movflags +faststart \
    "$OUT/videos/routecanela-video-web.mp4"

  echo "==> Encoding WebM (VP9) alternative (usually smaller)"
  ffmpeg -y -i "$VIDEO_IN" \
    -vf "scale=-2:'min(1080,ih)'" \
    -an \
    -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 \
    "$OUT/videos/routecanela-video-web.webm"

  echo "==> Extracting poster frame (1s in) as JPEG"
  ffmpeg -y -ss 00:00:01 -i "$VIDEO_IN" -frames:v 1 \
    -vf "scale=-2:'min(1080,ih)'" -q:v 4 \
    "$OUT/videos/routecanela-poster.jpg"
else
  echo "WARN: $VIDEO_IN not found - skipping video. Put the original there and re-run."
fi

echo "==> Converting oversized PNG photos to WebP"
for name in Carnavalkultere_routecanela Berlin_routecanela; do
  IN="$SRC/images/events/$name.png"
  if [[ -f "$IN" ]]; then
    cwebp -q 80 -mt "$IN" -o "$OUT/images/events/$name.webp"
  else
    echo "WARN: $IN not found - skipping."
  fi
done

echo
echo "Done. Optimized files are in: $OUT"
echo "Sizes:"
find "$OUT" -type f -exec du -h {} \; 2>/dev/null || true
echo
echo "Next: upload the contents of '$OUT' into your /assets folder on the server,"
echo "keeping the same subfolder structure (videos/, images/events/)."
