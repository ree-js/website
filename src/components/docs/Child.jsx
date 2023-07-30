import slugify from 'slugify';
import Link from '../Link';

export default function ({ name, parent, current }) {
  return (
    <li>
      <Link href={`/docs/${slugify(parent).toLowerCase()}/${slugify(name).toLowerCase()}`} className={`text-lg md:text-xl capitalize hover:underline ${current ? "text-pink-600" : "text-slate-800 dark:text-slate-400"}`}>
        {name}
      </Link>
    </li>
  )
}