import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { routes as routeList } from '../data/routes';
import { useLanguage } from '../context/LanguageContext';
import {
  type DurationFilter,
  matchesDurationFilter,
} from '../lib/duration';
import { t } from '../translations';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { InViewFade } from '../components/InViewFade';
import { RouteCard } from '../components/RouteCard';
import { TestimonialsSection } from '../components/TestimonialsSection';

export function RoutesPage() {
  useEffect(() => {
    document.title = 'RouteCanela';
  }, []);

  const { lang } = useLanguage();
  const copy = t[lang];
  const [filter, setFilter] = useState<DurationFilter>('all');

  const filtered = useMemo(
    () =>
      routeList.filter((r) => matchesDurationFilter(r.duration, filter)),
    [filter],
  );

  const pills: { key: DurationFilter; label: string }[] = [
    { key: 'all', label: copy.filter_all },
    { key: 'short', label: copy.filter_short },
    { key: 'medium', label: copy.filter_medium },
    { key: 'long', label: copy.filter_long },
  ];

  return (
    <>
      <div className="px-6 pb-12 pt-32 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <AnimatedHeading
            text={copy.routes_title}
            className="text-4xl font-normal tracking-[-0.03em] text-stone-800 md:text-5xl"
          />
          <p className="mt-4 text-stone-600">{copy.routes_subtitle}</p>

          <div className="mb-10 mt-8 flex gap-3 overflow-x-auto pb-2">
            {pills.map((p) => {
              const active = filter === p.key;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setFilter(p.key)}
                  className={`shrink-0 rounded-full border-2 px-5 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf9] ${
                    active
                      ? 'border-[#D4A853] bg-[#D4A853] font-medium text-white shadow-md'
                      : 'border-amber-200 bg-white text-stone-600 hover:border-amber-300 hover:bg-amber-50'
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 md:px-12 lg:px-16">
        {filtered.map((route, index) => (
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

      <TestimonialsSection />
    </>
  );
}
