export default function InputField({ id, label, type = 'text', placeholder, error, autoComplete }) {
  const border = error ? 'border-red-500 focus:border-red-600 focus:ring-red-100' : 'border-slate-300 focus:border-blue-600 focus:ring-blue-100'
  return <div>
    <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700">{label}</label>
    <input id={id} type={type} placeholder={placeholder} autoComplete={autoComplete} aria-invalid={error ? true : undefined} aria-describedby={error ? `${id}-error` : undefined} className={`h-[50px] w-full rounded-xl border bg-white px-4 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-4 ${border}`} />
    {error && <p id={`${id}-error`} className="mt-2 text-sm text-red-700">{error}</p>}
  </div>
}
