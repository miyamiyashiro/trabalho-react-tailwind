const exercises = [
  'Button System', 'Badge + Avatar', 'Profile Card', 'Product Card',
  'Login Form', 'KPI Card', 'Pricing Card', 'Alert / Notification',
  'Responsive Navbar', 'Mini Dashboard',
]

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Luana · Laboratório de componentes</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">React + Tailwind</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Ambiente pronto. Vamos construir os componentes, um exercício por vez.</p>
        <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5" aria-label="Status do projeto">
          <p className="font-bold text-emerald-900">Configuração inicial concluída</p>
          <p className="mt-1 text-sm text-emerald-800">React, Vite e Tailwind estão funcionando. Os exercícios abaixo ainda serão implementados.</p>
        </section>
        <h2 className="mt-10 text-xl font-bold">Roteiro dos exercícios</h2>
        <ol className="mt-4 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {exercises.map((exercise, index) => (
            <li key={exercise} className="flex flex-wrap items-center justify-between gap-3 p-4">
              <span className="font-semibold"><span className="mr-3 text-slate-400">{String(index + 1).padStart(2, '0')}</span>{exercise}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">A fazer</span>
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
