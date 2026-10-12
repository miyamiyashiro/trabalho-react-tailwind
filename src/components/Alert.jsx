import Button from './Button.jsx'
const variants = {
  success: { box: 'border-green-200 bg-green-50 text-green-800', icon: 'bg-green-600', symbol: '✓' },
  warning: { box: 'border-amber-200 bg-amber-50 text-amber-900', icon: 'bg-amber-600', symbol: '!' },
  error: { box: 'border-red-200 bg-red-50 text-red-800', icon: 'bg-red-600', symbol: '×' },
  info: { box: 'border-blue-200 bg-blue-50 text-blue-800', icon: 'bg-blue-600', symbol: 'i' },
}
export default function Alert({ variant = 'info', title, children, actionLabel }) {
  const style = variants[variant] ?? variants.info
  return <div className={`flex items-start gap-3.5 rounded-2xl border p-4 ${style.box}`}>
    <span aria-hidden="true" className={`grid size-10 shrink-0 place-items-center rounded-xl text-xl font-bold text-white ${style.icon}`}>{style.symbol}</span>
    <div className="min-w-0 flex-1"><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6">{children}</p>{actionLabel && <div className="mt-3"><Button size="sm" variant="secondary">{actionLabel}</Button></div>}</div>
  </div>
}
