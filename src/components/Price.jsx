export default function Price({ value, period = '/ month' }) {
  return <p className="mt-4"><strong className="text-4xl font-extrabold">{value}</strong><span className="ml-2 text-sm text-slate-500">{period}</span></p>
}
