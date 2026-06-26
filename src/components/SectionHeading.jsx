export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-12 md:mb-16 text-center">
      {label && (
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
