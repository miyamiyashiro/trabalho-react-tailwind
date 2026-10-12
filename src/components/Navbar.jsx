import Button from './Button.jsx'
import NavLink from './NavLink.jsx'
const defaultLinks = [{ label: 'Home', href: '#exercicio-09', active: true }, { label: 'Features', href: '#exercicio-04' }, { label: 'Pricing', href: '#exercicio-07' }]
export default function Navbar({ links = defaultLinks }) {
  return <header className="rounded-[18px] border border-slate-200 bg-white p-5">
    <div className="flex min-h-[48px] items-center justify-between gap-4">
      <a href="#top" className="rounded text-xl font-black text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600">FOLIO</a>
      <nav aria-label="Navegação desktop" className="hidden items-center gap-1 md:flex">{links.map(link => <NavLink key={link.label} href={link.href} active={link.active}>{link.label}</NavLink>)}</nav>
      <div className="hidden md:flex"><Button>Get started</Button></div>
      <div className="flex md:hidden"><Button variant="secondary">Menu</Button></div>
    </div>
    <nav aria-label="Navegação mobile estática" className="mt-4 flex flex-wrap gap-1 border-t border-slate-100 pt-3 md:hidden">{links.map(link => <NavLink key={link.label} href={link.href} active={link.active}>{link.label}</NavLink>)}</nav>
  </header>
}
