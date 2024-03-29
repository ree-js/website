import slugify from 'slugify';
import Link from '../Link';

export default function Parent({ name, children, current }) {
  return (
    <>
      <Link href={`/docs/${slugify(name).toLowerCase()}`} className={`flex my-2 font-semibold tracking-tight text-xl md:text-2xl capitalize hover:underline ${current ? "text-pink-600" : "text-slate-800 dark:text-slate-400"}`}>
        {name}
      </Link>
      <ul role="list" className="pl-3 mt-3 space-y-2">
        {children}
      </ul>
    </>
  )
}