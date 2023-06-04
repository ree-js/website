import { useEffect } from "react";

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
    <div className="inline-block text-left text-gray-500 dark:text-gray-200">
    <pre className="opacity-0 transition transition-duration-300"> <span className="text-teal-600">$</span> npx <span className="text-emerald-500">reejs</span> init <span className="text-sky-500">reejs-app</span> <span className="hidden md:inline text-indigo-500">--features react,tailwind,api,static</span></pre>
    <pre className="opacity-0 transition transition-duration-300"> <span className="text-teal-600">$</span> cd <span className="text-sky-500">reejs-app</span> </pre>
    <pre className="opacity-0 transition transition-duration-300"> <span className="text-teal-600">$</span> npx <span className="text-emerald-500">reejs</span> install </pre>
    <pre className="opacity-0 transition transition-duration-300"> <span className="text-purple-500">[DOWNLOAD]</span> <span className="text-yellow-600 dark:text-yellow-500">Installing all packages mentioned in import_map.json ...</span></pre>
    <pre className="opacity-0 transition transition-duration-300"> <span className="text-teal-600">[DOWNLOAD]</span> <span className="text-blue-600">Installed all packages in 1.03s</span></pre>
    <pre className="opacity-0 transition transition-duration-300"> <span className="text-teal-600">$</span> npx <span className="text-emerald-500">reejs</span> sync </pre>
    <pre className="opacity-0 transition transition-duration-300"> <span className="text-purple-500">[SYNC]</span> <span className="text-emerald-500">Synced dependencies with package.json</span></pre>
    <pre className="opacity-0 transition transition-duration-300"> <span className="text-teal-600">$</span> npx <span className="text-emerald-500">reejs</span> packit node <span className="inline text-indigo-500">-d</span></pre>
    <pre className="opacity-0 transition transition-duration-300"> <span className="text-pink-600"><span className="font-black">  PACKIT</span> v0.9.x</span></pre>
    <pre className="opacity-0 transition transition-duration-300 text-gray-500"> <span className="text-pink-600">  ➜</span>  📦 in <span className="text-blue-600">0.019s</span> </pre>
    <pre className="opacity-0 transition transition-duration-300 text-gray-500"> <span className="text-pink-600">  ➜</span>  🚆 : <span className="text-blue-600">http://localhost:3000</span> </pre>
      </div>)
}