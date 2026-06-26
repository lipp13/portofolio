const skillColors = {
  html: { bg: 'bg-orange-500/10', text: 'text-orange-400', abbr: 'HTML' },
  css: { bg: 'bg-blue-500/10', text: 'text-blue-400', abbr: 'CSS' },
  javascript: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', abbr: 'JS' },
  react: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', abbr: 'React' },
  nextjs: { bg: 'bg-white/10', text: 'text-white', abbr: 'Next' },
  nodejs: { bg: 'bg-green-500/10', text: 'text-green-400', abbr: 'Node' },
  express: { bg: 'bg-gray-500/10', text: 'text-gray-300', abbr: 'Express' },
  laravel: { bg: 'bg-red-500/10', text: 'text-red-400', abbr: 'Laravel' },
  php: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', abbr: 'PHP' },
  mysql: { bg: 'bg-blue-500/10', text: 'text-blue-300', abbr: 'MySQL' },
  postgresql: { bg: 'bg-sky-500/10', text: 'text-sky-400', abbr: 'PG' },
  git: { bg: 'bg-orange-500/10', text: 'text-orange-300', abbr: 'Git' },
  docker: { bg: 'bg-blue-500/10', text: 'text-blue-400', abbr: 'Docker' },
  linux: { bg: 'bg-yellow-500/10', text: 'text-yellow-300', abbr: 'Linux' },
  figma: { bg: 'bg-purple-500/10', text: 'text-purple-400', abbr: 'Figma' },
}

export default function SkillIcon({ icon, name }) {
  const config = skillColors[icon] || { bg: 'bg-accent/10', text: 'text-accent-light', abbr: name?.slice(0, 2) }

  return (
    <div
      className={`w-10 h-10 rounded-lg ${config.bg} ${config.text} flex items-center justify-center text-xs font-bold`}
    >
      {config.abbr}
    </div>
  )
}
