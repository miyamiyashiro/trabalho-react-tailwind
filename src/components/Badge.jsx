const variants = {
  info: 'bg-blue-50 text-blue-700', success: 'bg-green-50 text-green-700',
  warning: 'bg-amber-50 text-amber-800', neutral: 'bg-slate-100 text-slate-600',
}
export default function Badge({ children, variant = 'info' }) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${variants[variant] ?? variants.info}`}>{children}</span>
}
