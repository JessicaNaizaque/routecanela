import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t, type Lang } from '../translations';

const YEAR = String(new Date().getFullYear());

const INSTAGRAM_URL =
  'https://www.instagram.com/route_canela?igsh=N2Qyemtia25peGgy';

const LANGS: Lang[] = ['ES', 'EN', 'DE'];

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

const navLinkClass = `text-[1.05rem] font-medium tracking-[-0.01em] text-white transition-opacity duration-150 hover:opacity-55 motion-reduce:transition-none ${focusRing}`;

const appLinkClass = `border-b border-[#4a4a4a] pb-0.5 text-[0.95rem] font-medium text-white no-underline transition-colors duration-150 hover:border-white motion-reduce:transition-none ${focusRing}`;

function NavGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-5 text-[0.72rem] font-medium text-[#9a9a9a]">{title}</h4>
      {children}
    </div>
  );
}

function FooterAnchor({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      className={className}
      onClick={href === '#' ? (e) => e.preventDefault() : undefined}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export function Footer() {
  const { lang, setLanguage } = useLanguage();
  const copy = t[lang];

  return (
    <footer className="bg-[#333333] font-helvetica text-white">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="border-b border-[#4a4a4a] pb-14 pt-[110px] max-[480px]:pb-[60px] max-[480px]:pt-20">
          <p className="mb-12 max-w-[16ch] text-[clamp(2.6rem,7vw,6.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            {copy.footer_statement}
          </p>

          <div className="max-w-[340px]">
            <h4 className="mb-5 text-[0.72rem] font-medium text-[#9a9a9a]">
              {copy.footer_subscribe}
            </h4>
            <form
              className="flex w-[280px] items-end gap-5 border-b-[1.5px] border-white pb-3 max-[860px]:w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={copy.footer_subscribe_placeholder}
                aria-label={copy.footer_email_aria}
                className="min-w-0 flex-1 bg-transparent py-1 font-helvetica text-[1.05rem] text-white placeholder:text-[#9a9a9a] focus:outline-none"
              />
              <button
                type="submit"
                aria-label={copy.footer_subscribe_aria}
                className={`cursor-pointer border-0 bg-transparent p-0 text-[1.4rem] leading-none text-white ${focusRing}`}
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-12 border-b border-[#4a4a4a] py-16 max-[860px]:flex-col max-[860px]:gap-10">
          <NavGroup title={copy.footer_about_title}>
            <ul className="m-0 list-none p-0">
              <li className="mb-3.5">
                <Link to="/" className={navLinkClass}>
                  {copy.footer_about_us}
                </Link>
              </li>
              <li className="mb-3.5">
                <FooterAnchor href="#" className={navLinkClass}>
                  {copy.footer_team}
                </FooterAnchor>
              </li>
              <li className="mb-3.5">
                <Link to="/impressum" className={navLinkClass}>
                  {copy.footer_impressum}
                </Link>
              </li>
            </ul>
          </NavGroup>

          <NavGroup title={copy.footer_explore_title}>
            <ul className="m-0 list-none p-0">
              <li className="mb-3.5">
                <Link to="/routes" className={navLinkClass}>
                  {copy.nav_routes}
                </Link>
              </li>
              <li className="mb-3.5">
                <Link to="/news" className={navLinkClass}>
                  {copy.footer_stories}
                </Link>
              </li>
              <li className="mb-3.5">
                <FooterAnchor href="#" className={navLinkClass}>
                  {copy.footer_ar}
                </FooterAnchor>
              </li>
            </ul>
          </NavGroup>

          <NavGroup title={copy.footer_business_title}>
            <ul className="m-0 list-none p-0">
              <li className="mb-3.5">
                <FooterAnchor href="#" className={navLinkClass}>
                  {copy.footer_partner}
                </FooterAnchor>
              </li>
              <li className="mb-3.5">
                <FooterAnchor href="#" className={navLinkClass}>
                  {copy.footer_guides}
                </FooterAnchor>
              </li>
              <li className="mb-3.5">
                <a href={`mailto:${copy.contact_email}`} className={navLinkClass}>
                  {copy.footer_business_contact}
                </a>
              </li>
            </ul>
          </NavGroup>

          <NavGroup title={copy.footer_follow}>
            <ul className="m-0 list-none p-0">
              <li className="mb-3.5">
                <FooterAnchor href={INSTAGRAM_URL} className={navLinkClass}>
                  Instagram
                </FooterAnchor>
              </li>
              <li className="mb-3.5">
                <FooterAnchor href="#" className={navLinkClass}>
                  TikTok
                </FooterAnchor>
              </li>
              <li className="mb-3.5">
                <FooterAnchor href="#" className={navLinkClass}>
                  LinkedIn
                </FooterAnchor>
              </li>
              <li className="mb-3.5">
                <FooterAnchor href="#" className={navLinkClass}>
                  Xing
                </FooterAnchor>
              </li>
            </ul>
          </NavGroup>

          <NavGroup title={copy.footer_app_title}>
            <div className="mt-7 flex gap-6">
              <FooterAnchor href="#" className={appLinkClass}>
                Google Play
              </FooterAnchor>
              <FooterAnchor href="#" className={appLinkClass}>
                App Store
              </FooterAnchor>
            </div>
          </NavGroup>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-[26px] pb-8 text-[0.82rem] text-[#9a9a9a] max-[480px]:flex-col max-[480px]:items-start">
          <div className="flex flex-wrap gap-6">
            <Link
              to="/impressum"
              className={`text-[#9a9a9a] no-underline hover:text-white ${focusRing}`}
            >
              {copy.footer_legal_notice}
            </Link>
            <FooterAnchor
              href="#"
              className={`text-[#9a9a9a] no-underline hover:text-white ${focusRing}`}
            >
              {copy.footer_privacy}
            </FooterAnchor>
            <span>{copy.copyright.replace('{year}', YEAR)}</span>
          </div>
          <div
            className="flex gap-[18px]"
            role="group"
            aria-label={copy.footer_lang_label}
          >
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-pressed={lang === code}
                className={`cursor-pointer border-0 bg-transparent p-0 font-helvetica text-[0.82rem] font-medium ${focusRing} ${
                  lang === code ? 'text-white' : 'text-[#9a9a9a]'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
