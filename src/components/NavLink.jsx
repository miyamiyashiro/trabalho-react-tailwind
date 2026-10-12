export default function NavLink({ href, children, active = false }) {
  return <a href={href} aria-current={active ? 'page' : undefined} className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${active ? 'text-blue-700' : 'text-slate-600'}`}>{children}</a>
}
