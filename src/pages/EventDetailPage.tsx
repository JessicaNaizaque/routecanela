import { CalendarClock, Clock, MapPin, Users } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getEvent, getEvents } from '../data/events';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import { EventCard } from '../components/EventCard';
import { FadeIn } from '../components/FadeIn';

export function EventDetailPage() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const copy = t[lang];

  useEffect(() => {
    document.title = 'RouteCanela';
  }, []);

  const event = id ? getEvent(id, lang) : undefined;

  if (!event) {
    return (
      <div className="min-h-screen px-6 pb-24 pt-32 md:px-12 lg:px-16">
        <p className="text-stone-700">{copy.event_not_found}</p>
        <Link
          to="/events"
          className="mt-6 inline-flex text-sm text-stone-500 transition-colors hover:text-stone-900"
        >
          {copy.back_to_events}
        </Link>
      </div>
    );
  }

  const related = getEvents(lang)
    .filter((e) => e.slug !== event.slug)
    .slice(0, 3);

  const facts = [
    { icon: CalendarClock, text: event.date, label: copy.detail_date },
    { icon: MapPin, text: event.location, label: copy.detail_location },
    { icon: Clock, text: event.duration, label: copy.detail_duration },
    { icon: Users, text: event.recommendAudience, label: copy.detail_recommend_audience },
  ];

  function renderRich(text: string) {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={i} className="font-semibold text-stone-900">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      )
    );
  }

  return (
    <>
      <div className="relative pt-0">
        <img
          src={event.image}
          alt=""
          className="h-[55vh] w-full object-cover"
          loading="eager"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent" />
        <span className="absolute left-6 top-24 rounded-full border-2 border-[#D4A853] bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-900 shadow-md md:left-12 lg:left-16">
          {event.category}
        </span>
      </div>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <FadeIn delay={100}>
          <h1
            className="mb-6 text-4xl font-normal text-stone-900 md:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            {event.title}
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mb-10 flex flex-wrap items-center gap-3 text-sm text-stone-600">
            {facts.map((f, i) => (
              <span key={f.label} className="inline-flex items-center gap-2">
                {i > 0 ? (
                  <span className="text-stone-300" aria-hidden>
                    |
                  </span>
                ) : null}
                <f.icon className="h-4 w-4 shrink-0 text-stone-400" aria-hidden />
                <span className="sr-only">{f.label}</span>
                <span>{f.text}</span>
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mb-12 space-y-4 text-base leading-relaxed text-stone-700">
            {event.description
              .split('\n')
              .map((paragraph) => paragraph.trim())
              .filter(Boolean)
              .map((paragraph, i) => (
                <p key={i}>{renderRich(paragraph)}</p>
              ))}
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-600">
            {copy.highlights}
          </p>
          <div className="flex flex-wrap gap-2">
            {event.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-700"
              >
                {h}
              </span>
            ))}
          </div>
        </FadeIn>

        <Link
          to="/events"
          className="mt-16 inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-sm"
        >
          {copy.back_to_events}
        </Link>
      </article>

      <section className="bg-stone-50 py-16 px-6 md:px-12 lg:px-16">
        <p className="mb-6 text-sm uppercase tracking-widest text-stone-500">{copy.more_events}</p>
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {related.map((ev) => (
            <div key={ev.id} className="min-w-[min(100%,280px)] shrink-0 md:min-w-0">
              <EventCard
                title={ev.title}
                image={ev.image}
                category={ev.category}
                slug={ev.slug}
                imageClassName="h-52"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
