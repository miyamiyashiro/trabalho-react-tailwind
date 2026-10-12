import DashboardHeader from './DashboardHeader.jsx'
import KpiGrid from './KpiGrid.jsx'
import PerformanceCard from './PerformanceCard.jsx'
import ActivityCard from './ActivityCard.jsx'
export default function DashboardOverview({ dark = false }) {
  return <div className={dark ? 'dark' : ''}><section aria-label={dark ? 'Dashboard escuro' : 'Dashboard claro'} className="space-y-6 rounded-3xl bg-slate-100 p-4 text-slate-900 sm:p-6 dark:bg-slate-950 dark:text-white"><DashboardHeader /><KpiGrid /><div className="grid gap-6 lg:grid-cols-[2fr_1fr]"><PerformanceCard /><ActivityCard /></div></section></div>
}
