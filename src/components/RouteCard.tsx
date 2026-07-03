import { Clock, MapPin } from 'lucide-react';

export type RouteCardProps = {
  name: string;
  image: string;
  duration: string;
  distance: string;
  difficulty?: string;
  tags?: string[];
  loading?: 'lazy' | 'eager';
};

export function RouteCard({
  name,
  image,
  duration,
  distance,
  tags = [],
  loading = 'lazy',
}: RouteCardProps) {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-2xl border border-amber-200/40 bg-white shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-md">
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt=""
          loading={loading}
          decoding="async"
          fetchPriority={loading === 'eager' ? 'high' : 'auto'}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-amber-100 bg-gradient-to-b from-amber-50/90 to-white p-4">
        <h3 className="text-lg font-semibold text-stone-800">{name}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-stone-500">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 shrink-0 text-amber-600/70" aria-hidden />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0 text-amber-600/70" aria-hidden />
            {distance}
          </span>
        </div>
        {tags.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber-100/80 px-2 py-0.5 text-xs font-medium text-amber-900/70"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
