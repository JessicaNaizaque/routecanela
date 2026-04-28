import { Link } from 'react-router-dom';

export type NewsCardProps = {
  title: string;
  image: string;
  excerpt?: string;
  slug: string;
  loading?: 'lazy' | 'eager';
};

export function NewsCard({
  title,
  image,
  excerpt,
  slug,
  loading = 'lazy',
}: NewsCardProps) {
  return (
    <Link
      to={`/news/${slug}`}
      className="group block cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt=""
          loading={loading}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="rounded-b-2xl border-t border-stone-200 bg-stone-50 p-4">
        <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
        {excerpt ? (
          <p className="mt-2 line-clamp-3 text-sm text-stone-600">{excerpt}</p>
        ) : null}
      </div>
    </Link>
  );
}
