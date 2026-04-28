import { Calendar, Clock, MapPin, Trees, UtensilsCrossed } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { routes as routeList } from '../data/routes';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

export function RouteDetailPage() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const copy = t[lang];

  useEffect(() => {
    document.title = 'RouteCanela';
  }, []);

  const route = routeList.find((r) => r.id === id);

  if (!route) {
    return (
      <div className="min-h-screen px-6 pb-24 pt-32 md:px-12 lg:px-16">
        <p className="text-stone-700">{copy.route_not_found}</p>
        <Link
          to="/routes"
          className="mt-6 inline-flex text-sm text-stone-500 transition-colors hover:text-stone-900"
        >
          {copy.back_all_routes}
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="relative">
        <img
          src={route.image}
          alt=""
          className="h-80 w-full rounded-b-3xl object-cover"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 rounded-b-3xl bg-gradient-to-t from-black/60 to-transparent" />
        <h1
          className="absolute bottom-6 left-6 text-4xl font-normal text-white md:left-12 lg:left-16"
          style={{ letterSpacing: '-0.03em' }}
        >
          {route.name}
        </h1>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-10 flex flex-wrap gap-8 rounded-2xl border border-amber-200/70 bg-white px-6 py-4 shadow-sm">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-600/70" aria-hidden />
                <div>
                  <p className="text-sm text-stone-600">{copy.stat_duration}</p>
                  <p className="font-semibold text-stone-800">{route.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600/70" aria-hidden />
                <div>
                  <p className="text-sm text-stone-600">{copy.stat_distance}</p>
                  <p className="font-semibold text-stone-800">{route.distance}</p>
                </div>
              </div>
            </div>

            <section className="mb-10">
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
                <Calendar className="h-4 w-4" aria-hidden />
                {copy.events_title}
              </p>
              <ul className="divide-y divide-amber-100 overflow-hidden rounded-xl border border-amber-200/80 bg-[#fdfcfa]">
                {route.events.map((item) => (
                  <li key={item} className="px-4 py-2 text-sm text-stone-700">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
                <Trees className="h-4 w-4" aria-hidden />
                {copy.parks_heading}
              </p>
              <ul className="divide-y divide-amber-100 overflow-hidden rounded-xl border border-amber-200/80 bg-[#fdfcfa]">
                {route.parks.map((item) => (
                  <li key={item} className="px-4 py-2 text-sm text-stone-700">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
                <UtensilsCrossed className="h-4 w-4" aria-hidden />
                {copy.restaurants_heading}
              </p>
              <ul className="divide-y divide-amber-100 overflow-hidden rounded-xl border border-amber-200/80 bg-[#fdfcfa]">
                {route.restaurants.map((item) => (
                  <li key={item} className="px-4 py-2 text-sm text-stone-700">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            <div className="sticky top-32 rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-stone-800">{copy.start_route}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {copy.route_cta_description}
              </p>
              <button type="button" className="btn-gold mt-6 w-full py-3 font-semibold ring-offset-[#fafaf9]">
                {copy.start_route}
              </button>
              <Link
                to="/routes"
                className="mt-6 block text-center text-sm text-stone-500 transition-colors hover:text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 rounded-sm"
              >
                {copy.back_all_routes}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
