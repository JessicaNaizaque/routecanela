import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { PageTransition } from './PageTransition';

const FOOTER_PATH =
  /^\/($|routes(\/[^/]+)?|events(\/[^/]+)?|news(\/[^/]+)?)$/;

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const showFooter = FOOTER_PATH.test(pathname);

  return (
    <>
      <Navbar />
      <main className={`bg-[#fafaf9] text-stone-700 ${isHome ? 'pt-0' : 'pt-0'}`}>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      {showFooter ? <Footer /> : null}
    </>
  );
}
