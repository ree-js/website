import slugify from 'https://esm.sh/slugify@1.6.6';

export default function Parent({ name, children, current }) {
  return (
    <>
      <a href={`/docs/${slugify(name).toLowerCase()}`} className={`flex my-2 font-semibold tracking-tight text-xl md:text-2xl capitalize hover:underline ${current ? "text-pink-600" : "text-slate-800 dark:text-slate-400"}`}>
        {name}
      </a>
      <ul role="list" className="pl-3 mt-3 space-y-2">
        {children}
      </ul>
    </>
  )
}