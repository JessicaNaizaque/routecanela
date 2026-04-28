import { useEffect, useMemo, useState } from 'react';
import { events as eventList } from '../data/events';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { EventCard } from '../components/EventCard';
import { InViewFade } from '../components/InViewFade';

export function EventsPage() {
  useEffect(() => {
    document.title = 'RouteCanela';
  }, []);

  const { lang } = useLanguage();
  const copy = t[lang];
  const [category, setCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set(eventList.map((e) => e.category));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(
    () =>
      category === 'All'
        ? eventList
        : eventList.filter((e) => e.category === category),
    [category],
  );

  return (
    <>
      <div className="px-6 pb-12 pt-32 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <AnimatedHeading
            text={copy.events_title}
            className="text-4xl font-normal tracking-[-0.03em] text-stone-800 md:text-5xl"
          />
          <p className="mt-4 text-stone-600">{copy.events_subtitle}</p>

          <div className="mb-10 mt-8 flex gap-3 overflow-x-auto pb-2">
            {categories.map((c) => {
              const active = category === c;
              const label = c === 'All' ? copy.filter_all : c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`shrink-0 rounded-full border-2 px-5 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf9] ${
                    active
                      ? 'border-[#D4A853] bg-[#D4A853] font-medium text-white shadow-md'
                      : 'border-amber-200 bg-white text-stone-600 hover:border-amber-300 hover:bg-amber-50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 md:px-12 lg:px-16">
        {filtered.map((ev, index) => (
          <InViewFade key={ev.id} index={index}>
            <EventCard
              title={ev.title}
              image={ev.image}
              category={ev.category}
              slug={ev.slug}
              imageClassName="h-72"
            />
          </InViewFade>
        ))}
      </div>
    </>
  );
}
