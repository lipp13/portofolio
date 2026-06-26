const statusStyles = {
  Completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'In Progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

const typeStyles = {
  Certificate: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Competition: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Course: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Award: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

export default function Badge({ children, variant = 'default', className = '' }) {
  const styles = {
    default: 'bg-white/5 text-muted-light border-border-light',
    accent: 'bg-accent/10 text-accent-light border-accent/20',
    ...statusStyles,
    ...typeStyles,
  }

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        border ${styles[variant] || styles.default} ${className}
      `.trim()}
    >
      {children}
    </span>
  )
}
