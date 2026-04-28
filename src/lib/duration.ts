/** Parse route duration string to minutes; TBD → null (show only in "All"). */
export function routeDurationMinutes(duration: string): number | null {
  const d = duration.trim();
  if (!d || d === 'TBD') return null;
  let mins = 0;
  const h = d.match(/(\d+)\s*hrs?/i);
  const m = d.match(/(\d+)\s*min/i);
  if (h) mins += parseInt(h[1], 10) * 60;
  if (m) mins += parseInt(m[1], 10);
  return mins;
}

export type DurationFilter = 'all' | 'short' | 'medium' | 'long';

export function matchesDurationFilter(
  duration: string,
  filter: DurationFilter,
): boolean {
  if (filter === 'all') return true;
  const mins = routeDurationMinutes(duration);
  if (mins === null) return false;
  if (filter === 'short') return mins <= 60;
  if (filter === 'medium') return mins > 60 && mins <= 120;
  return mins > 120;
}
