import Badge from './Badge.jsx'
import Button from './Button.jsx'
export default function ProductCard({ name, category, description, price, badge = 'New', image }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden bg-blue-600">
        {image ? <img src={image} alt={name} className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="grid aspect-[16/9] place-items-center text-4xl font-black text-white transition duration-500 group-hover:scale-105">RUN</div>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">{category}</span><Badge variant="success">{badge}</Badge></div>
        <h3 className="mt-3 text-xl font-bold">{name}</h3><p className="mt-2 flex-1 leading-6 text-slate-500">{description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3"><strong className="text-2xl font-black">{price}</strong><Button>Buy now</Button></div>
      </div>
    </article>
  )
}
