const variants = { blue: 'bg-blue-600', violet: 'bg-violet-600', green: 'bg-green-600' }
const sizes = { sm: 'size-10 text-sm', md: 'size-14 text-lg', lg: 'size-16 text-xl' }
export default function Avatar({ initials, variant = 'blue', size = 'md' }) {
  return <span className={`grid shrink-0 place-items-center rounded-full font-bold text-white ${variants[variant] ?? variants.blue} ${sizes[size] ?? sizes.md}`}>{initials}</span>
}
