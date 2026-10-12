import { useId } from 'react'
import InputField from './InputField.jsx'
import Button from './Button.jsx'
export default function LoginForm() {
  const id = useId()
  return (
    <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-2xl font-bold">Welcome back</h3><p className="mt-2 text-sm text-slate-500">Sign in to your account to continue.</p>
      <form className="mt-6 space-y-4" aria-label="Login demonstrativo">
        <InputField id={`${id}-email`} label="Email" type="email" placeholder="you@example.com" autoComplete="email" />
        <InputField id={`${id}-password`} label="Password" type="password" placeholder="••••••••" autoComplete="current-password" />
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="size-4 accent-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" />Remember me</label>
          <a href={`#${id}-help`} className="rounded font-semibold text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-blue-600">Forgot password?</a>
        </div>
        <Button type="button" fullWidth>Sign In</Button>
      </form>
      <p id={`${id}-help`} className="mt-4 text-xs leading-5 text-slate-500">Exemplo estático: login e recuperação não enviam dados.</p>
    </section>
  )
}
