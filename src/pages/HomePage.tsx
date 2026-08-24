import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../data/events';
import { getNews } from '../data/news';
import { routes as routeList } from '../data/routes';
import { useLanguage } from '../context/LanguageContext';
import { t, type Lang } from '../translations';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { EventCard } from '../components/EventCard';
import { FadeIn } from '../components/FadeIn';
import { InViewFade } from '../components/InViewFade';
import { NewsCard } from '../components/NewsCard';
import { RouteCard } from '../components/RouteCard';
import { SectionHeader } from '../components/SectionHeader';
import { TestimonialsSection } from '../components/TestimonialsSection';

export const HOME_HERO_ID = 'home-hero';

const VIDEO_MP4 = '/assets/videos/routecanela-video-web.mp4';
const VIDEO_WEBM = '/assets/videos/routecanela-video-web.mp4'; //TODO: change to webm
const VIDEO_POSTER = '/assets/images/Mapa-Berlin-web-routecanela.jpg';

const MAP_PDF_BY_LANG: Record<Lang, string> = {
  DE: '/assets/pdfs/Mapa-routecanela-web-GeR.pdf',
  EN: '/assets/pdfs/Mapa-routecanela-web-EnG.pdf',
  ES: '/assets/pdfs/Mapa-routecanela-web-EsP.pdf',
};

/**
 * Decide whether the decorative background video is worth loading.
 * On slow/metered connections or when the user prefers reduced motion we
 * keep the lightweight poster image only, so the hero never blocks or stalls.
 */
function useAllowBackgroundVideo() {
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const saveData = connection?.saveData === true;
    const slowNetwork = /(^|-)2g$/.test(connection?.effectiveType ?? '');

    if (reduceMotion || saveData || slowNetwork) return;
    setAllow(true);
  }, []);

  return allow;
}

export function HomePage() {
  useEffect(() => {
    document.title = 'RouteCanela';
  }, []);

  const { lang } = useLanguage();
  const copy = t[lang];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const allowVideo = useAllowBackgroundVideo();

  useEffect(() => {
    if (!allowVideo) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, [allowVideo]);

  const previewRoutes = routeList.slice(0, 6);
  const previewEvents = useMemo(() => getEvents(lang).slice(0, 6), [lang]);
  const previewNews = useMemo(() => getNews(lang).slice(0, 3), [lang]);

  return (
    <>
      <section id={HOME_HERO_ID} className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        <img
          src={VIDEO_POSTER}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {allowVideo ? (
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={VIDEO_POSTER}
            onCanPlay={() => setVideoReady(true)}
          >
            <source src={VIDEO_WEBM} type="video/webm" />
            <source src={VIDEO_MP4} type="video/mp4" />
          </video>
        ) : null}

        <div className="absolute inset-0 px-6 lg:px-12 xl:px-16">
          <AnimatedHeading
            text={copy.hero_heading}
            className="absolute top-1/2 -translate-y-1/2 left-[50%] text-left font-helvetica font-normal text-gray-300 tracking-[-0.04em]"
            lineClassNames={[
              'text-6xl leading-[1.0] md:text-7xl md:leading-[1.0] lg:text-8xl lg:leading-[1.0] xl:text-9xl xl:leading-[1.0]',
              'text-5xl leading-[1.0] md:text-6xl md:leading-[1.0] lg:text-7xl lg:leading-[1.0] xl:text-8xl xl:leading-[1.0]',
              'text-4xl leading-[1.0] md:text-5xl md:leading-[1.0] lg:text-6xl lg:leading-[1.0] xl:text-7xl xl:leading-[1.0]',
            ]}
          />
        </div>

        <div className="absolute inset-0 flex flex-col">
          <div className="flex flex-1 flex-col justify-end px-6 pb-12 lg:grid lg:grid-cols-2 lg:items-end lg:pb-16 lg:px-12 xl:px-16">
            <div>
              <FadeIn delay={800} duration={1000}>
                <p className="mb-5 text-base text-gray-300 md:text-xl lg:text-2xl xl:text-3xl">52.52°N 13.40°E</p>
              </FadeIn>
              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/routes"
                    className="btn-gold px-8 py-3 text-base ring-offset-black"
                  >
                    {copy.hero_cta_primary}
                  </Link>
                  <Link
                    to="/routes"
                    className="btn-gold px-8 py-3 text-base ring-offset-black"
                  >
                    {copy.hero_cta_secondary}
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={1400} duration={1000}>
              <div className="mt-10 flex h-full items-end justify-start lg:mt-0 lg:justify-end">
                <a
                  href={MAP_PDF_BY_LANG[lang]}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border-2 border-[#D4A853]/90 bg-white/85 px-6 py-3 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-[#D4A853] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <p className="text-lg font-light text-stone-800 transition-colors group-hover:text-white md:text-xl lg:text-2xl">
                    {copy.hero_download}
                  </p>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-amber-50/40 py-24 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title={copy.intro_title}
            subtitle={copy.intro_subtitle}
            align="left"
          />
        </div>
      </section>

      <section
        id="routes-preview"
        className="py-24 px-6 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title={copy.routes_title}
            subtitle={copy.routes_subtitle}
            align="left"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewRoutes.map((route, index) => (
              <InViewFade key={route.id} index={index}>
                <Link to={`/routes/${route.id}`} className="block cursor-pointer">
                  <RouteCard
                    name={route.name}
                    image={route.image}
                    duration={route.duration}
                    distance={route.distance}
                    tags={[route.name]}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </Link>
              </InViewFade>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/routes" className="btn-gold px-8 py-3 text-base ring-offset-[#fafaf9]">
              {copy.see_all_routes}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-amber-50/40 py-24 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title={copy.events_title}
            subtitle={copy.events_subtitle}
            align="left"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {previewEvents.map((ev, index) => (
              <InViewFade key={ev.id} index={index}>
                <EventCard
                  title={ev.title}
                  image={ev.image}
                  category={ev.category}
                  slug={ev.slug}
                />
              </InViewFade>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/events" className="btn-gold px-8 py-3 text-base ring-offset-[#fafaf9]">
              {copy.see_all_events}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title={copy.news_title}
            subtitle={copy.news_subtitle}
            align="left"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {previewNews.map((article, index) => (
              <InViewFade key={article.id} index={index}>
                <NewsCard
                  title={article.title}
                  image={article.image}
                  excerpt={article.excerpt}
                  slug={article.slug}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </InViewFade>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/news" className="btn-gold px-8 py-3 text-base ring-offset-[#fafaf9]">
              {copy.see_all_news}
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}
