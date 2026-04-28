import { Bike } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';

export function NotFoundPage() {
  const { lang } = useLanguage();
  const copy = t[lang];

  useEffect(() => {
    document.title = 'RouteCanela';
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#fafaf9] px-6">
      <div className="max-w-md text-center">
        <Bike
          className="animate-bike-wiggle mx-auto mb-8 h-16 w-16 text-[#D4A853]"
          aria-hidden
        />
        <h1
          className="mb-4 text-4xl font-normal text-stone-800"
          style={{ letterSpacing: '-0.03em' }}
        >
          {copy.not_found_title}
        </h1>
        <p className="mb-10 text-base leading-relaxed text-stone-600">{copy.not_found_sub}</p>
        <Link to="/" className="btn-gold inline-block px-8 py-3 text-base ring-offset-[#fafaf9]">
          {copy.not_found_cta}
        </Link>
      </div>
    </div>
  );
}
