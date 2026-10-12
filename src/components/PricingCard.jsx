import Badge from './Badge.jsx'
import Button from './Button.jsx'
import Price from './Price.jsx'
import FeatureList from './FeatureList.jsx'
export default function PricingCard({ name, price, period = '/ month', features = [], highlighted = false, badge = 'Most popular' }) {
  return <article className={`flex w-full max-w-[400px] flex-col rounded-3xl border bg-white p-6 ${highlighted ? 'border-violet-500 shadow-lg ring-2 ring-violet-100' : 'border-slate-200 shadow-sm'}`}>
    <div className="min-h-7">{highlighted && <Badge>{badge}</Badge>}</div>
    <h3 className="mt-4 text-xl font-bold">{name}</h3><Price value={price} period={period} /><FeatureList features={features} />
    <Button variant={highlighted ? 'primary' : 'secondary'} fullWidth>Choose {name}</Button>
  </article>
}
