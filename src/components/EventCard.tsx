import { Link } from 'react-router-dom';

export type EventCardProps = {
  title: string;
  image: string;
  category?: string;
  slug: string;
  /** Default shorter image; events listing uses tall */
  imageClassName?: string;
};

export function EventCard({
  title,
  image,
  category,
  slug,
  imageClassName = 'h-52',
}: EventCardProps) {
  return (
    <Link
      to={`/events/${slug}`}
      className="group relative block cursor-pointer rounded-2xl"
    >
      <div className={`relative w-full overflow-hidden rounded-2xl ${imageClassName}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="pointer-events-none absolute bottom-3 left-3 right-14 pr-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
      {category ? (
        <span className="pointer-events-none absolute right-3 top-3 z-20 rounded-full border-2 border-[#D4A853] bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900 shadow-md transition-all duration-300 group-hover:bg-[#D4A853] group-hover:text-white">
          {category}
        </span>
      ) : null}
    </Link>
  );
}
