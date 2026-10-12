export default function FeatureList({ features }) {
  return <ul className="my-6 flex-1 space-y-3 text-sm text-slate-600">{features.map(feature => <li key={feature} className="flex gap-2"><span aria-hidden="true" className="font-bold text-green-600">✓</span><span>{feature}</span></li>)}</ul>
}
