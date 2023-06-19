import React from "../cache/e2d12d.js";
export default function Alert({ text }) {
  return (
    React.createElement('div', { div: true, className: "bg-yellow-300/30 dark:bg-yellow-500/30 border-1 border-yellow-700/70 dark:border-yellow-500/70 text-yellow-600 dark:text-yellow-500 rounded-lg mb-6"        ,}
      , React.createElement('span', { className: "py-2 px-4 flex"  ,}
        , React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24"   , strokeWidth: 1.5, stroke: "currentColor", className: "w-16 h-16" ,}
          , React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"             ,} )
        )
        , React.createElement('span', { className: "ml-2 font-semibold" ,}
          , text
        )
      )
     )

  )
}
//# sourceURL=src/components/docs/helpers/Alert.jsx