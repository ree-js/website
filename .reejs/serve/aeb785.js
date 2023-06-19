import React from "../cache/e2d12d.js";
import slugify from '../cache/52e966.js';

export default function BottomNav({next, prev,parent}){
  return(
    React.createElement('dl', { className: "flex pt-6 mt-6 mb-12 border-t border-slate-400 dark:border-slate-900"      ,}
            , React.createElement('div', { className: "mr-auto text-left" ,}
              , React.createElement('dt', { className: "text-sm font-normal tracking-tight text-slate-900 dark:text-slate-500"    ,}
                , prev?"Previous":""
              )

              , React.createElement('dd', { className: "mt-1",}
                , React.createElement('a', { href: prev?(`/docs/${slugify(parent).toLowerCase()}/${slugify(prev).toLowerCase()}`):"#", className: "text-base font-semibold capitalize text-slate-800 dark:text-slate-400 hover:underline"     ,}
                  , prev
                )
              )
            )

            , React.createElement('div', { className: "ml-auto text-right" ,}
              , React.createElement('dt', { className: "text-sm font-normal tracking-tight text-slate-900 dark:text-slate-500"    ,}
                , next?"Next":""
              )

              , React.createElement('dd', { className: "mt-1",}
                , React.createElement('a', { href: next?(`/docs/${slugify(parent).toLowerCase()}/${slugify(next).toLowerCase()}`):"#", className: "text-base font-semibold capitalize text-slate-800 dark:text-slate-400 hover:underline"     ,}
                  , next
                )
              )
            )
          )
  )
}

//# sourceURL=src/components/docs/BottomNav.jsx