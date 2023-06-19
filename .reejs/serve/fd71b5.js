import React from "../cache/e2d12d.js";
import PackitFeature from "./7bbf53.js";

const deployLogos = [
  /* haha astro thanks */
  { icon: "/nodejs.png", alt: "Node.js Logo" },
  { icon: "/deno.png", alt: "Deno Logo" },
  { icon: "/vercel.png", alt: "Vercel Logo" },
  { icon: "/netlify.png", alt: "Netlify Logo" },
];

export default function RuntimesList() {
  return (
    React.createElement('div', { className: "mb-4 md:mb-0" ,}
    , React.createElement('div', { className: "md:max-w-xl md:h-72 drop-shadow-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-900 rounded-lg px-12 py-4 mb-4"          ,}
      , React.createElement('h3', { className: "font-bold md:max-w-xl mx-auto px-1 py-1 text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-violet-500 to-blue-500 text-center text-4xl md:text-5xl"             ,}, "Most Runtimes Supported"
          )
        , React.createElement('p', { className: "tmy-6 mx-4 font-medium text-xl md:text-2xl dark:text-slate-300"     ,}, "Rest assured, your code is packed for your desired runtime."         )
      /* create 4x4 grid showing nodejs, deno, netify & cf edge logo */
      , React.createElement('div', { className: "my-4 grid grid-cols-4 gap-4 md:max-w-sm mx-auto"     ,}
      , deployLogos.map(({ icon, alt }) => (
        React.createElement('div', { key: alt, className: "bg-white dark:bg-white/10 drop-shadow-lg flex justify-center p-2 rounded-md"      ,}
          , React.createElement('img', { src: icon, alt: alt, loading: "lazy", className: "h-8 w-8 md:h-10 md:w-10"   ,} )
        )
      ))
      )
    )
    , React.createElement(PackitFeature, null )
    )
  )
}
//# sourceURL=src/components/RuntimesList.jsx