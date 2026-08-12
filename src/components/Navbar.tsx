import { ArrowLeft, Menu, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { getEvents } from '../data/events';
import { routes as routeData } from '../data/routes';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SearchOverlay } from './SearchOverlay';
import { HOME_HERO_ID } from '../pages/HomePage';

const LOGO_WHITE = 'https://www.routecanela.de/assets/img/logoblanco.png';
const LOGO_YELLOW = 'https://www.routecanela.de/assets/img/logoamarillo.png';

function stripLeadingArrow(label: string) {
  return label.replace(/^←\s*/, '').trim();
}

/**
 * Tracks whether the navbar is currently overlapping the home page's
 * video header, so the logo can swap to the yellow variant while it's
 * on top of the video and back to white everywhere else.
 */
function useIsOverVideoHeader() {
  const { pathname } = useLocation();
  const [isOverVideo, setIsOverVideo] = useState(pathname === '/');

  useEffect(() => {
    if (pathname !== '/') {
      setIsOverVideo(false);
      return;
    }

    const hero = document.getElementById(HOME_HERO_ID);
    if (!hero) {
      setIsOverVideo(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsOverVideo(entry.isIntersecting),
      { rootMargin: '-72px 0px 0px 0px', threshold: 0 }
    );
    observer.observe(hero);

    return () => observer.disconnect();
  }, [pathname]);

  return isOverVideo;
}

function NavItem({
  to,
  label,
  end,
}: {
  to: string;
  label: string;
  end?: boolean;
}) {
  return (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <span
          className={`group relative inline-block pb-0.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm ${
            isActive ? 'text-amber-400' : 'text-white/80 hover:text-white'
          }`}
        >
          <span className="relative inline-block">
            {label}
            <span
              className={`absolute -bottom-1 left-0 h-px bg-amber-400 transition-all duration-300 ease-out ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
              aria-hidden
            />
          </span>
        </span>
      )}
    </NavLink>
  );
}

export function Navbar() {
  const { lang } = useLanguage();
  const copy = t[lang];
  const eventData = useMemo(() => getEvents(lang), [lang]);
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isOverVideoHeader = useIsOverVideoHeader();
  const logoUrl = isOverVideoHeader ? LOGO_YELLOW : LOGO_WHITE;

  const routeDetail = useMatch('/routes/:id');

  const detailBackLabel = routeDetail
    ? stripLeadingArrow(copy.back_to_routes)
    : null;

  const handleBack = () => navigate(-1);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 pt-6 md:px-12 lg:px-16">
        <div className="liquid-glass relative flex items-center rounded-xl border border-white/10 px-4 py-2 shadow-lg shadow-black/20">
          <div className="relative flex w-full items-center">
            <div className="flex min-w-0 flex-1 items-center md:gap-6">
              {detailBackLabel ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="mr-4 hidden items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white md:flex"
                >
                  <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span>{detailBackLabel}</span>
                </button>
              ) : null}
              <nav className="hidden gap-6 md:flex">
                <NavItem to="/" label={copy.nav_home} end />
                <NavItem to="/routes" label={copy.nav_routes} />
                <NavItem to="/events" label={copy.nav_events} />
                <NavItem to="/news" label={copy.nav_news} />
              </nav>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <NavLink
                to="/"
                className="pointer-events-auto block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <img src={logoUrl} alt="RouteCanela" className="h-8 w-auto" />
              </NavLink>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="rounded-lg p-2 text-white/90 transition-all duration-200 hover:bg-white/10 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label={copy.search_placeholder}
              >
                <Search className="h-4 w-4" aria-hidden />
              </button>
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
              <button
                type="button"
                className="btn-gold hidden px-5 py-1.5 text-sm ring-offset-white md:inline-flex"
              >
                {copy.login}
              </button>
              <button
                type="button"
                className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
                aria-label="Menu"
                onClick={() => setDrawerOpen(true)}
              >
                <Menu className="h-6 w-6" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </header>

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        routes={routeData}
        events={eventData}
      />

      {drawerOpen ? (
        <div className="fixed inset-0 z-[90] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-stone-900/35 backdrop-blur-[2px] transition-opacity"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col gap-6 overflow-y-auto border-r border-amber-200/80 bg-[#fdfcfa] p-6 pt-24 shadow-2xl">
            <button
              type="button"
              className="absolute right-4 top-6 rounded-lg p-2 text-stone-500 transition-colors hover:bg-amber-50 hover:text-stone-800"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            {detailBackLabel ? (
              <button
                type="button"
                onClick={() => {
                  handleBack();
                  setDrawerOpen(false);
                }}
                className="flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-stone-900"
              >
                <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden />
                <span>{detailBackLabel}</span>
              </button>
            ) : null}
            <nav className="flex flex-col gap-4">
              <NavLink
                to="/"
                onClick={() => setDrawerOpen(false)}
                className="text-sm text-stone-700 transition-colors hover:text-amber-900"
              >
                {copy.nav_home}
              </NavLink>
              <NavLink
                to="/routes"
                onClick={() => setDrawerOpen(false)}
                className="text-sm text-stone-700 transition-colors hover:text-amber-900"
              >
                {copy.nav_routes}
              </NavLink>
              <NavLink
                to="/events"
                onClick={() => setDrawerOpen(false)}
                className="text-sm text-stone-700 transition-colors hover:text-amber-900"
              >
                {copy.nav_events}
              </NavLink>
              <NavLink
                to="/news"
                onClick={() => setDrawerOpen(false)}
                className="text-sm text-stone-700 transition-colors hover:text-amber-900"
              >
                {copy.nav_news}
              </NavLink>
            </nav>
            <LanguageSwitcher lightSurface />
            <button type="button" className="btn-gold mt-auto px-5 py-2 text-sm ring-offset-[#fdfcfa]">
              {copy.login}
            </button>
          </aside>
        </div>
      ) : null}
    </>
  );
}
