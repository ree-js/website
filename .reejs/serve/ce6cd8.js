import React from "../cache/e2d12d.js";
import Navbar from "./0b9e11.js";

export default function DoNotHydrate({c}){
  c.status(404);
  return (
    React.createElement(React.Fragment, null
    , React.createElement(Navbar, null )
    , React.createElement('div', { className: "mt-32 text-center" ,}
      , React.createElement('h1', { className: "text-6xl font-bold text-slate-800 dark:text-slate-400"   ,}, "404")
      , React.createElement('h2', { className: "text-2xl font-semibold text-slate-600 dark:text-slate-500"   ,}, "Reequired Docs Not Found"   )
      , React.createElement('a', { href: "/", className: "mt-4 text-blue-500 hover:underline"  ,}, "Go back home"  )
      )
    )
  )
}

//# sourceURL=src/pages/docs/*.jsx