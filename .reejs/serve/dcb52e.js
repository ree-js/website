import React from "../cache/e2d12d.js";
import slugify from '../cache/52e966.js';

export default function ({ name, parent, current }) {
  return (
    React.createElement('li', null
      , React.createElement('a', { href: `/docs/${slugify(parent).toLowerCase()}/${slugify(name).toLowerCase()}`, className: `text-lg md:text-xl capitalize hover:underline ${current ? "text-pink-600" : "text-slate-800 dark:text-slate-400"}`,}
        , name
      )
    )
  )
}
//# sourceURL=src/components/docs/Child.jsx