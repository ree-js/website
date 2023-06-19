import React from "../cache/e2d12d.js";
import { useEffect } from "../cache/e2d12d.js";

export default function TermText() {
  useEffect(() => {
    if (!globalThis.document) return;
    document.querySelectorAll("pre.opacity-0").forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove("opacity-0");
        el.classList.add("opacity-100");
      }, (i>8?i-1:i) * 1000);
    });

  }, []);
  return (
    React.createElement('div', { className: "inline-block text-left text-gray-500 dark:text-gray-200"   ,}
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300"  ,}, " " , React.createElement('span', { className: "text-teal-600",}, "$"), " npx "  , React.createElement('span', { className: "text-emerald-500",}, "reejs"), " init "  , React.createElement('span', { className: "text-sky-500",}, "reejs-app"), " " , React.createElement('span', { className: "hidden md:inline text-indigo-500"  ,}, "--features react,tailwind,api,static" ))
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300"  ,}, " " , React.createElement('span', { className: "text-teal-600",}, "$"), " cd "  , React.createElement('span', { className: "text-sky-500",}, "reejs-app"), " " )
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300"  ,}, " " , React.createElement('span', { className: "text-teal-600",}, "$"), " npx "  , React.createElement('span', { className: "text-emerald-500",}, "reejs"), " install "  )
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300"  ,}, " " , React.createElement('span', { className: "text-purple-500",}, "[DOWNLOAD]"), " " , React.createElement('span', { className: "text-yellow-600 dark:text-yellow-500" ,}, "Installing all packages mentioned in import_map.json ..."      ))
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300"  ,}, " " , React.createElement('span', { className: "text-teal-600",}, "[DOWNLOAD]"), " " , React.createElement('span', { className: "text-blue-600",}, "Installed all packages in 1.03s"    ))
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300"  ,}, " " , React.createElement('span', { className: "text-teal-600",}, "$"), " npx "  , React.createElement('span', { className: "text-emerald-500",}, "reejs"), " sync "  )
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300"  ,}, " " , React.createElement('span', { className: "text-purple-500",}, "[SYNC]"), " " , React.createElement('span', { className: "text-emerald-500",}, "Synced dependencies with package.json"   ))
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300"  ,}, " " , React.createElement('span', { className: "text-teal-600",}, "$"), " npx "  , React.createElement('span', { className: "text-emerald-500",}, "reejs"), " packit node "   , React.createElement('span', { className: "inline text-indigo-500" ,}, "-d"))
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300"  ,}, " " , React.createElement('span', { className: "text-pink-600",}, React.createElement('span', { className: "font-black",}, "  PACKIT"  ), " v0.9.x" ))
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300 text-gray-500"   ,}, " " , React.createElement('span', { className: "text-pink-600",}, "  ➜"  ), "  📦 in "    , React.createElement('span', { className: "text-blue-600",}, "0.019s"), " " )
    , React.createElement('pre', { className: "opacity-0 transition transition-duration-300 text-gray-500"   ,}, " " , React.createElement('span', { className: "text-pink-600",}, "  ➜"  ), "  🚆 : "    , React.createElement('span', { className: "text-blue-600",}, "http://localhost:3000"), " " )
      ))
}
//# sourceURL=src/components/TermText.jsx