import React from "../cache/e2d12d.js";
import slugify from '../cache/52e966.js';

export default function Parent({ name, children, current }) {
  return (
    React.createElement(React.Fragment, null
      , React.createElement('a', { href: `/docs/${slugify(name).toLowerCase()}`, className: `flex my-2 font-semibold tracking-tight text-xl md:text-2xl capitalize hover:underline ${current ? "text-pink-600" : "text-slate-800 dark:text-slate-400"}`,}
        , name
      )
      , React.createElement('ul', { role: "list", className: "pl-3 mt-3 space-y-2"  ,}
        , children
      )
    )
  )
}
//# sourceURL=src/components/docs/Parent.jsx