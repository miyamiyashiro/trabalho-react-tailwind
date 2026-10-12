const activities = ['New order', 'Payment approved', 'User created']
export default function ActivityCard() {
  return <aside className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"><h4 className="font-bold">Activity</h4><ul className="mt-4 divide-y divide-slate-100 dark:divide-slate-700">{activities.map(activity => <li key={activity} className="flex items-center gap-3 py-4 text-sm text-slate-600 dark:text-slate-300"><span aria-hidden="true" className="size-2 rounded-full bg-green-500" />{activity}</li>)}</ul></aside>
}
