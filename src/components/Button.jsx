// Strings completas permitem que o Tailwind encontre todas as variantes.
const variants = {
  primary: 'bg-blue-600 text-white enabled:hover:bg-blue-700 focus-visible:outline-blue-600',
  secondary: 'bg-slate-200 text-slate-900 enabled:hover:bg-slate-300 focus-visible:outline-slate-600',
  danger: 'bg-red-600 text-white enabled:hover:bg-red-700 focus-visible:outline-red-600',
  success: 'bg-green-700 text-white enabled:hover:bg-green-800 focus-visible:outline-green-700',
}

const sizes = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  disabled = false,
  type = 'button',
  size = 'md',
  fullWidth = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors',
        'enabled:cursor-pointer enabled:active:brightness-90',
        'focus-visible:outline-2 focus-visible:outline-offset-4',
        'disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500',
        variants[variant] ?? variants.primary,
        sizes[size] ?? sizes.md,
        fullWidth ? 'w-full' : '',
      ].join(' ')}
    >
      {children}
    </button>
  )
}
