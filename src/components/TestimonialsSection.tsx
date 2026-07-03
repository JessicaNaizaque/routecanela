import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { testimonials as testimonialData } from '../data/testimonials';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import { SectionHeader } from './SectionHeader';

function usePerPage() {
  const [perPage, setPerPage] = useState(1);

  const update = useCallback(() => {
    const w = window.innerWidth;
    if (w >= 1024) setPerPage(3);
    else if (w >= 768) setPerPage(2);
    else setPerPage(1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  return perPage;
}

const arrowBtn =
  'rounded-full border-2 border-[#D4A853] bg-white p-2 text-stone-700 shadow-sm transition-all duration-200 hover:bg-[#D4A853] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 disabled:pointer-events-none disabled:opacity-30';

export function TestimonialsSection() {
  const { lang } = useLanguage();
  const copy = t[lang];
  const perPage = usePerPage();
  const total = testimonialData.length;
  const maxPage = Math.max(0, Math.ceil(total / perPage) - 1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage((p) => Math.min(p, maxPage));
  }, [maxPage, perPage]);

  const sliceStart = page * perPage;
  const visible = testimonialData.slice(sliceStart, sliceStart + perPage);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(maxPage, p + 1));

  return (
    <section className="bg-amber-50/35 py-24 px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={copy.testimonials_title} align="center" />

        <div className="relative mt-12">
          <div className="overflow-hidden px-0 md:px-14">
            <div
              className="grid gap-6 transition-all duration-300 ease-out"
              style={{
                gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
              }}
            >
              {visible.map((item) => (
                <div
                  key={`${page}-${item.name}`}
                  className="min-h-[140px] rounded-2xl border border-amber-200/70 bg-white p-6 shadow-sm transition-all duration-200 hover:border-amber-300 hover:shadow-md"
                >
                  <img
                    src={item.avatar}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 rounded-full border border-amber-100 object-cover shadow-sm"
                  />
                  <p className="mt-4 text-sm font-semibold text-stone-800">{item.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {maxPage > 0 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                disabled={page === 0}
                className={`absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 md:flex ${arrowBtn}`}
                aria-label={copy.testimonial_prev}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={page >= maxPage}
                className={`absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 md:flex ${arrowBtn}`}
                aria-label={copy.testimonial_next}
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="mt-8 flex justify-center gap-2 md:hidden">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={page === 0}
                  className={arrowBtn}
                  aria-label={copy.testimonial_prev}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={page >= maxPage}
                  className={arrowBtn}
                  aria-label={copy.testimonial_next}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex justify-center gap-1.5">
                {Array.from({ length: maxPage + 1 }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i)}
                    className={`h-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 ${
                      i === page ? 'w-6 bg-[#D4A853]' : 'w-2 bg-amber-200 hover:bg-amber-300'
                    }`}
                    aria-label={`${copy.testimonials_title} ${i + 1}`}
                    aria-current={i === page}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
