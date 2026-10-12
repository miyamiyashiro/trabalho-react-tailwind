const trends = {
  positive: { colors: 'bg-green-50 text-green-700', symbol: '↑', label: 'Alta' },
  negative: { colors: 'bg-red-50 text-red-700', symbol: '↓', label: 'Queda' },
  neutral: { colors: 'bg-slate-100 text-slate-600', symbol: '→', label: 'Estável' },
}
export default function KpiCard({ label, value, change, comparison, icon = '$', trend = 'positive' }) {
  const indicator = trends[trend] ?? trends.neutral
  return (
    <article className="flex min-h-60 w-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-center justify-between gap-3"><p className="text-sm font-medium text-slate-500 dark:text-slate-300">{label}</p><span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-50 font-bold text-blue-700">{icon}</span></div>
      <strong className="mt-4 block break-words text-4xl font-extrabold text-slate-900 dark:text-white">{value}</strong>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5"><span className={`rounded-full px-2 py-1 text-xs font-bold ${indicator.colors}`}><span className="sr-only">{indicator.label}: </span>{indicator.symbol} {change}</span><span className="text-xs text-slate-500 dark:text-slate-300">{comparison}</span></div>
    </article>
  )
}
