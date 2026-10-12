import Alert from './components/Alert.jsx'
import PricingCard from './components/PricingCard.jsx'
import KpiCard from './components/KpiCard.jsx'
import LoginForm from './components/LoginForm.jsx'
import InputField from './components/InputField.jsx'
import ProductCard from './components/ProductCard.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import Avatar from './components/Avatar.jsx'
import Badge from './components/Badge.jsx'
import Button from './components/Button.jsx'

const exercises = [
  'Button System', 'Badge + Avatar', 'Profile Card', 'Product Card',
  'Login Form', 'KPI Card', 'Pricing Card', 'Alert / Notification',
  'Responsive Navbar', 'Mini Dashboard',
]

export default function App() {
  return (
    <main id="top" className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Luana · Laboratório de componentes</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">React + Tailwind</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Ambiente pronto. Vamos construir os componentes, um exercício por vez.</p>
        <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5" aria-label="Status do projeto">
          <p className="font-bold text-emerald-900">Etapa atualizada</p>
          <p className="mt-1 text-sm text-emerald-800">Confira os exemplos abaixo, leia as explicações e registre cada etapa no Git.</p>
        </section>
        <section aria-labelledby="button-title" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase text-blue-700">Exercise 01</span>
          <h2 id="button-title" className="mt-4 text-2xl font-bold">Button System</h2>
          <p className="mt-2 text-sm text-slate-500">Variants + hover/focus/disabled states</p>
          <hr className="mt-4 border-slate-100" />
          <div className="mt-8 max-w-[464px] rounded-3xl bg-slate-100 p-6">
            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-3">
              <Button variant="primary" fullWidth>Primary</Button>
              <Button variant="secondary" fullWidth>Secondary</Button>
              <Button variant="danger" fullWidth>Danger</Button>
              <Button disabled fullWidth>Disabled</Button>
            </div>
            <p className="mt-4 text-xs text-slate-500">44px height · 12px radius · px 20 · semibold</p>
          </div>
          <h3 className="mt-8 mb-3 text-sm font-semibold text-slate-600">Desafio adicional · Success</h3>
          <Button variant="success">Success</Button>
          <h3 className="mt-8 text-sm font-semibold text-slate-600">Tamanhos</h3>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <Button size="sm">Pequeno</Button>
            <Button>Normal</Button>
            <Button size="lg">Grande</Button>
          </div>
          <h3 className="mt-8 mb-3 text-sm font-semibold text-slate-600">Largura total</h3>
          <Button fullWidth>Continuar</Button>
          <p className="mt-5 text-sm leading-6 text-slate-500">Os botões demonstram aparência e estados nativos. Nenhuma ação de cadastro ou exclusão é executada.</p>
        </section>
        <section id="exercicio-02" aria-labelledby="titulo-02" className="mt-8 scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Exercise 02</p>
          <h2 id="titulo-02" className="mt-2 mb-6 text-2xl font-bold">Badge + Avatar</h2>
          <div className="space-y-6 rounded-3xl bg-slate-100 p-6">
  <div className="flex flex-wrap items-center gap-4"><Avatar initials="EI" /><Avatar initials="UX" variant="violet" /><Avatar initials="JS" variant="green" /></div>
  <div className="flex flex-wrap gap-3"><Badge>Front-end</Badge><Badge variant="success">New</Badge><Badge variant="warning">Warning</Badge></div>
  <p className="text-sm text-slate-500">Tamanhos sm, md (56px) e lg:</p>
  <div className="flex items-center gap-4"><Avatar initials="LM" size="sm" /><Avatar initials="LM" /><Avatar initials="LM" size="lg" /></div>
</div>
        </section>
        <section id="exercicio-03" aria-labelledby="titulo-03" className="mt-8 scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Exercise 03</p>
          <h2 id="titulo-03" className="mt-2 mb-6 text-2xl font-bold">Profile Card</h2>
          <div className="grid gap-6 lg:grid-cols-2">
  <ProfileCard name="Eduardo Inocencio" role="Professor · React · SPA" initials="EI" category="Front-end" description="Construindo interfaces reutilizáveis com React e Tailwind CSS." />
  <ProfileCard name="Luana Miyashiro" role="Estudante · FullStack Developer" initials="LM" category="Developer" description="Aprendendo a transformar interfaces em componentes reutilizáveis." layout="vertical" />
</div>
        </section>
        <section id="exercicio-04" aria-labelledby="titulo-04" className="mt-8 scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Exercise 04</p>
          <h2 id="titulo-04" className="mt-2 mb-6 text-2xl font-bold">Product Card</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <ProductCard name="Velocity Runner" category="Running" description="Conforto e leveza para sua corrida diária." price="$129" badge="New" />
  <ProductCard name="Urban Runner" category="Lifestyle" description="Um tênis versátil para acompanhar sua rotina." price="$99" badge="Popular" />
  <ProductCard name="Trail Runner" category="Outdoor" description="Estabilidade para explorar novos caminhos." price="$149" badge="New" />
</div>
        </section>
        <section id="exercicio-05" aria-labelledby="titulo-05" className="mt-8 scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Exercise 05</p>
          <h2 id="titulo-05" className="mt-2 mb-6 text-2xl font-bold">Login Form</h2>
          <div className="grid items-start gap-6 lg:grid-cols-2"><LoginForm /><div className="rounded-2xl bg-slate-50 p-6"><h3 className="mb-4 font-bold">Desafio · erro por prop</h3><InputField id="demo-error-email" label="Email" type="email" placeholder="you@example.com" error="Email inválido" /><p className="mt-4 text-sm text-slate-500">A mensagem é fixa, recebida por prop. Não há validação JavaScript.</p></div></div>
        </section>
        <section id="exercicio-06" aria-labelledby="titulo-06" className="mt-8 scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Exercise 06</p>
          <h2 id="titulo-06" className="mt-2 mb-6 text-2xl font-bold">KPI Card</h2>
          <div className="grid gap-6 md:grid-cols-3">
  <KpiCard label="Revenue" value="R$ 128.4k" change="+12.8%" comparison="vs previous period" trend="positive" />
  <KpiCard label="Orders" value="1,842" change="-2.1%" comparison="vs previous period" trend="negative" icon="#" />
  <KpiCard label="Conversion" value="4.7%" change="0.0%" comparison="vs previous period" trend="neutral" icon="%" />
</div>
        </section>
        <section id="exercicio-07" aria-labelledby="titulo-07" className="mt-8 scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Exercise 07</p>
          <h2 id="titulo-07" className="mt-2 mb-6 text-2xl font-bold">Pricing Card</h2>
          <div className="grid gap-6 lg:grid-cols-3">
  <PricingCard name="Free" price="$0" features={['1 project', 'Basic analytics', 'Community support']} />
  <PricingCard name="Pro" price="$29" features={['Unlimited projects', 'Advanced analytics', 'Priority support']} highlighted />
  <PricingCard name="Enterprise" price="$99" features={['Unlimited projects', 'Team access', 'Dedicated support']} />
</div>
        </section>
        <section id="exercicio-08" aria-labelledby="titulo-08" className="mt-8 scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Exercise 08</p>
          <h2 id="titulo-08" className="mt-2 mb-6 text-2xl font-bold">Alert / Notification</h2>
          <div className="max-w-2xl space-y-4"><Alert variant="success" title="Success">Your changes were saved.</Alert><Alert variant="warning" title="Warning">Please review your information.</Alert><Alert variant="error" title="Error" actionLabel="Retry">Something went wrong. Try again later.</Alert><Alert variant="info" title="Information">A new update is available.</Alert></div>
        </section>
        <h2 className="mt-10 text-xl font-bold">Roteiro dos exercícios</h2>
        <ol className="mt-4 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {exercises.map((exercise, index) => (
            <li key={exercise} className="flex flex-wrap items-center justify-between gap-3 p-4">
              <span className="font-semibold"><span className="mr-3 text-slate-400">{String(index + 1).padStart(2, '0')}</span>{exercise}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{index < 8 ? 'Implementado' : 'A fazer'}</span>
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
