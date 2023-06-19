import slugify from 'https://esm.sh/slugify@1.6.6';

export default function ({ name, parent, current }) {
  return (
    <li>
      <a href={`/docs/${slugify(parent).toLowerCase()}/${slugify(name).toLowerCase()}`} className={`text-lg md:text-xl capitalize hover:underline ${current ? "text-pink-600" : "text-slate-800 dark:text-slate-400"}`}>
        {name}
      </a>
    </li>
  )
}