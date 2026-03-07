type HeroBannerProps = {
  title: string;
  subtitle?: string;
  description?: string;
  accentText?: string;
  overlayClass?: string;
};

export default function HeroBanner({
  title,
  subtitle,
  description,
  accentText,
  overlayClass = "bg-black/50",
}: HeroBannerProps) {
  return (
    <section>
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:py-0 lg:aspect-[16/7] flex items-center">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gray-300" />
        <div className={`pointer-events-none absolute inset-0 z-0 ${overlayClass}`} />
        <div className="mx-auto max-w-xl text-left relative z-10 w-full">
          {subtitle && (
            <p className="text-sm font-semibold text-azul-300 uppercase tracking-wide mb-3">
              {subtitle}
            </p>
          )}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base font-medium text-pretty text-white/90">
              {description}
            </p>
          )}
          {accentText && (
            <p className="mt-2 text-base font-medium text-azul-300">
              {accentText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
