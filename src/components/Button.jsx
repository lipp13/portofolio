const variants = {
  primary:
    'bg-accent hover:bg-accent-light text-white shadow-lg shadow-accent/20 hover:shadow-accent/30',
  secondary:
    'glass hover:bg-white/5 text-white border border-border-light hover:border-accent/30',
  ghost: 'text-muted-light hover:text-white hover:bg-white/5',
  outline:
    'border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent/60',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const classes = `
    inline-flex items-center justify-center gap-2 font-medium rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50
    disabled:opacity-50 disabled:pointer-events-none
    ${variants[variant]} ${sizes[size]} ${className}
  `.trim()

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} stroke={1.5} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} stroke={1.5} />}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={classes}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
