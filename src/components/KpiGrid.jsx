import KpiCard from './KpiCard.jsx'
const metrics = [
  { label: 'Revenue', value: '128k', change: '+12.8%', icon: '$', trend: 'positive' },
  { label: 'Orders', value: '1,842', change: '+8.2%', icon: '#', trend: 'positive' },
  { label: 'Conversion', value: '4.7%', change: '-0.3%', icon: '%', trend: 'negative' },
]
export default function KpiGrid() {
  return <div className="grid gap-4 md:grid-cols-3">{metrics.map(metric => <KpiCard key={metric.label} {...metric} comparison="vs previous period" />)}</div>
}
