import React from "../cache/e2d12d.js";
import Link from "./80e121.js";
export default function Navbar(){
  return (
    React.createElement('div', { className: "w-auto backdrop-blur-lg fixed top-0 left-0 right-0 border-b-1 dark:border-slate-900 hover:border-pink-600 transition-[border] duration-300 z-[100]"           ,}
      , React.createElement('div', { className: "mx-4 md:mx-24 py-2 md:py-4 flex"    ,}
      , React.createElement('h1', { className: "cursor-default w-min text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mr-auto hover:animate-pulse"          ,}, "Ree.js")
      , React.createElement('div', { className: "ml-auto my-auto" ,}
        , React.createElement(Link, { to: "/docs", className: "px-4 py-2 md:mx-2 font-semibold hover:text-purple-500 transition-colors duration-300"      ,}, "Docs")
        )
        , React.createElement(Link, { to: "//github.com/rovelstars/reejs", className: "px-4 py-2 md:mx-2 font-semibold hover:text-green-500 transition-colors duration-300"      ,}, "Github"

          )
      )
    )
  );
}

//# sourceURL=src/components/Navbar.jsx