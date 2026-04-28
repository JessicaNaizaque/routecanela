import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { EventItem } from '../data/events';
import type { RouteItem } from '../data/routes';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
  routes: RouteItem[];
  events: EventItem[];
};

export function SearchOverlay({
  open,
  onClose,
  routes: routeList,
  events: eventList,
}: SearchOverlayProps) {
  const { lang } = useLanguage();
  const copy = t[lang];
  const [query, setQuery] = useState('');
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!open) {
      setShown(false);
      setQuery('');
      return;
    }
    const id = window.requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const q = query.trim().toLowerCase();

  const matchedRoutes = useMemo(() => {
    if (!q) return [];
    return routeList.filter((r) => r.name.toLowerCase().includes(q)).slice(0, 8);
  }, [routeList, q]);

  const matchedEvents = useMemo(() => {
    if (!q) return [];
    return eventList.filter((e) => e.title.toLowerCase().includes(q)).slice(0, 8);
  }, [eventList, q]);

  if (!open) return null;

  const rowClass =
    'flex cursor-pointer items-center gap-4 rounded-xl border border-amber-100 bg-white p-3 shadow-sm transition-all duration-200 hover:border-[#D4A853] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40';

  return (
    <div
      className="fixed inset-0 z-[100] bg-stone-600/45 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={copy.search_placeholder}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close"
        onClick={onClose}
      />

      <div className="relative mx-auto mt-16 max-w-xl px-6 md:px-8">
        <div
          className={`relative rounded-2xl border-2 border-amber-100 bg-[#fdfcfa] p-6 shadow-2xl ring-1 ring-amber-900/5 transition-all duration-200 ease-out ${
            shown ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-2 text-2xl leading-none text-stone-500 transition-all hover:bg-amber-50 hover:text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40"
            aria-label="Close search"
          >
            ×
          </button>

          <input
            autoFocus
            type="search"
            placeholder={copy.search_placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-amber-200 bg-white px-4 py-3 text-lg text-stone-800 outline-none placeholder:text-stone-400 focus-visible:border-[#D4A853] focus-visible:ring-2 focus-visible:ring-amber-400/30 md:text-2xl"
          />

          {(matchedRoutes.length > 0 || matchedEvents.length > 0) && q ? (
            <div className="mt-6 max-h-[55vh] space-y-3 overflow-y-auto pb-2">
              {matchedRoutes.map((r) => (
                <Link
                  key={r.id}
                  to={`/routes/${r.id}`}
                  onClick={onClose}
                  className={rowClass}
                >
                  <img
                    src={r.image}
                    alt=""
                    className="h-14 w-24 shrink-0 rounded-lg object-cover ring-1 ring-amber-100"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-medium text-stone-800">{r.name}</p>
                    <p className="text-sm text-stone-500">
                      {r.duration} · {r.distance}
                    </p>
                  </div>
                </Link>
              ))}
              {matchedEvents.map((ev) => (
                <Link
                  key={ev.id}
                  to={`/events/${ev.slug}`}
                  onClick={onClose}
                  className={rowClass}
                >
                  <img
                    src={ev.image}
                    alt=""
                    className="h-14 w-24 shrink-0 rounded-lg object-cover ring-1 ring-amber-100"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-medium text-stone-800">{ev.title}</p>
                    <p className="text-sm text-stone-500">{ev.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
