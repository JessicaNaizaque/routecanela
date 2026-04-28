type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`flex max-w-7xl flex-col ${isCenter ? 'mx-auto items-center text-center' : ''}`}
    >
      <h2
        className="text-3xl font-normal text-stone-800 md:text-4xl"
        style={{ letterSpacing: '-0.03em' }}
      >
        {title}
      </h2>
      <span
        className={`mt-3 mb-2 block h-0.5 w-12 bg-amber-400 ${isCenter ? 'mx-auto' : ''}`}
        aria-hidden
      />
      {subtitle ? (
        <p className="text-base text-stone-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
