import Avatar from './Avatar.jsx'
import Badge from './Badge.jsx'
import Button from './Button.jsx'
const layouts = { horizontal: 'flex-row text-left', vertical: 'flex-col text-center' }
export default function ProfileCard({ name, role, initials, category, description, layout = 'horizontal' }) {
  return (
    <article className="w-full max-w-[420px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className={`flex items-center gap-4 ${layouts[layout] ?? layouts.horizontal}`}>
        <Avatar initials={initials} size="lg" />
        <div className="min-w-0"><Badge>{category}</Badge><h3 className="mt-2 text-xl font-bold break-words">{name}</h3><p className="mt-1 text-sm text-slate-500">{role}</p></div>
      </header>
      <p className="mt-5 leading-7 text-slate-600">{description}</p>
      <div className="mt-6 flex gap-3"><div className="flex-1"><Button fullWidth>Follow</Button></div><Button variant="secondary">Profile</Button></div>
    </article>
  )
}
