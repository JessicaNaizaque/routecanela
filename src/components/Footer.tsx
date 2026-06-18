import { Facebook, Instagram, MapPin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

const logoUrl = 'https://www.routecanela.de/assets/img/logo.png';

export function Footer() {
  const { lang } = useLanguage();
  const copy = t[lang];

  return (
    <footer className="border-t border-amber-900/20 bg-stone-900 px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logoUrl} alt="" className="mb-4 h-9 w-auto brightness-110" loading="lazy" />
          <p className="text-sm text-stone-400">{copy.footer_tagline}</p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/route_canela?igsh=N2Qyemtia25peGgy"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-stone-600 p-2 text-stone-400 transition-all duration-200 hover:border-amber-400/60 hover:bg-stone-800 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/routecanela?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-stone-600 p-2 text-stone-400 transition-all duration-200 hover:border-amber-400/60 hover:bg-stone-800 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@Routecanela"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-stone-600 p-2 text-stone-400 transition-all duration-200 hover:border-amber-400/60 hover:bg-stone-800 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40"
              aria-label="Youtube"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400/95">
            {copy.footer_subscribe}
          </h3>
          <p className="mt-3 text-sm text-stone-400">{copy.subscribe_desc}</p>
          <form
            className="mt-4 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={copy.footer_subscribe_placeholder}
              className="w-full rounded-lg border border-stone-600 bg-stone-800/80 px-4 py-2 text-sm text-stone-100 outline-none placeholder:text-stone-500 focus-visible:border-amber-400/50 focus-visible:ring-2 focus-visible:ring-amber-400/30"
            />
            <button
              type="submit"
              className="btn-gold shrink-0 px-4 py-2 text-sm ring-offset-stone-900"
            >
              {copy.footer_subscribe}
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400/95">
            {copy.footer_links}
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-stone-400">
            <li>
              <Link
                to="/"
                className="transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 rounded-sm"
              >
                {copy.nav_home}
              </Link>
            </li>
            <li>
              <Link
                to="/routes"
                className="transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 rounded-sm"
              >
                {copy.nav_routes}
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 rounded-sm"
              >
                {copy.nav_events}
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 rounded-sm"
              >
                {copy.nav_news}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400/95">
            {copy.footer_contact}
          </h3>
          <p className="mt-4 text-sm text-stone-300">
            <a
              href={`mailto:${copy.contact_email}`}
              className="transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 rounded-sm"
            >
              {copy.contact_email}
            </a>
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-stone-400">
            <MapPin className="h-4 w-4 shrink-0 text-amber-400/70" aria-hidden />
            {copy.contact_location}
          </p>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl pt-8 text-center text-xs text-stone-600">
        {copy.copyright}
      </p>
    </footer>
  );
}
