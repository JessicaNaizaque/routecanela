import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { news as newsList } from '../data/news';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../translations';
import { FadeIn } from '../components/FadeIn';
import { NewsCard } from '../components/NewsCard';

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? '';
  const b = parts[1]?.[0] ?? '';
  return (a + b).toUpperCase() || '?';
}

export function NewsDetailPage() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const copy = t[lang];

  useEffect(() => {
    document.title = 'RouteCanela';
  }, []);

  const article = newsList.find((n) => n.slug === id);

  if (!article) {
    return (
      <div className="min-h-screen px-6 pb-24 pt-32 md:px-12 lg:px-16">
        <p className="text-stone-700">{copy.news_not_found}</p>
        <Link
          to="/news"
          className="mt-6 inline-flex text-sm text-stone-500 transition-colors hover:text-stone-900"
        >
          {copy.back_to_news}
        </Link>
      </div>
    );
  }

  const related = newsList.filter((n) => n.slug !== article.slug).slice(0, 3);

  const paragraphs = article.body.split('\n\n').filter(Boolean);

  return (
    <>
      <div className="relative pt-0">
        <img
          src={article.image}
          alt=""
          className="h-[60vh] w-full object-cover"
          loading="eager"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <header className="mx-auto max-w-2xl px-6 pb-6 pt-12">
        <FadeIn delay={100}>
          <div className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 text-xs font-medium text-stone-700">
              {initials(article.author)}
            </span>
            <span className="text-stone-600">{article.author}</span>
            <span aria-hidden>·</span>
            <span>{article.date}</span>
            <span aria-hidden>·</span>
            <span>{article.readTime}</span>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <h1
            className="mt-4 mb-2 text-4xl font-normal text-stone-900 md:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            {article.title}
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mb-10 border-l-2 border-amber-400/60 pl-4 text-lg font-light leading-relaxed text-stone-600">
            {article.excerpt}
          </p>
        </FadeIn>
      </header>

      <div className="mx-auto max-w-2xl px-6 pb-16">
        <FadeIn delay={300}>
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-6 text-base leading-relaxed text-stone-700">
              {p}
            </p>
          ))}
        </FadeIn>

        <FadeIn delay={400}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-600">
            {copy.tags_label}
          </p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <Link
          to="/news"
          className="mt-16 inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-sm"
        >
          {copy.back_to_news}
        </Link>
      </div>

      <section className="bg-stone-50 py-16 px-6 md:px-12 lg:px-16">
        <p className="mb-6 text-sm uppercase tracking-widest text-stone-500">{copy.more_stories}</p>
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {related.map((n) => (
            <div key={n.id} className="min-w-[min(100%,280px)] shrink-0 md:min-w-0">
              <NewsCard
                title={n.title}
                image={n.image}
                excerpt={n.excerpt}
                slug={n.slug}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
