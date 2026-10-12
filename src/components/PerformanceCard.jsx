const bars = ['h-16', 'h-28', 'h-20', 'h-40', 'h-32', 'h-48']
export default function PerformanceCard() {
  return <section className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
    <h4 className="font-bold">Performance</h4>
    <div role="img" aria-label="Gráfico ilustrativo de seis períodos; o último tem o maior valor." className="mt-6 flex h-52 items-end gap-3 border-b border-slate-200 dark:border-slate-700">{bars.map((height, index) => <div key={index} className={`flex-1 rounded-t-lg bg-blue-600 dark:bg-blue-400 ${height}`} />)}</div>
    <p className="mt-3 text-xs text-slate-500 dark:text-slate-300">Dados ilustrativos · últimos seis períodos</p>
  </section>
}
