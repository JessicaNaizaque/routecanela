import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { news as newsList } from '../data/news';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { InViewFade } from '../components/InViewFade';
import { NewsCard } from '../components/NewsCard';

export function NewsPage() {
  useEffect(() => {
    document.title = 'RouteCanela';
  }, []);

  const { lang } = useLanguage();
  const copy = t[lang];
  const [featured, ...rest] = newsList;

  return (
    <>
      <div className="px-6 pb-12 pt-32 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <AnimatedHeading
            text={copy.news_title}
            className="text-4xl font-normal tracking-[-0.03em] text-stone-900 md:text-5xl"
          />
          <p className="mt-4 text-stone-600">{copy.news_subtitle}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-16">
        <Link
          to={`/news/${featured.slug}`}
          className="group relative mb-12 block min-h-[16rem] cursor-pointer overflow-hidden rounded-2xl lg:col-span-3"
        >
          <img
            src={featured.image}
            alt=""
            className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              {copy.featured_story}
            </p>
            <h2
              className="text-3xl font-normal text-white md:text-4xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              {featured.title}
            </h2>
          </div>
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {rest.map((article, index) => (
            <InViewFade key={article.id} index={index}>
              <NewsCard
                title={article.title}
                image={article.image}
                excerpt={article.excerpt}
                slug={article.slug}
                loading="lazy"
              />
            </InViewFade>
          ))}
        </div>
      </div>
    </>
  );
}
