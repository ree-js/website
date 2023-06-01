import PackitFeature from "./PackitFeature";

const deployLogos = [
  { icon: "http://esm.sh/gh/withastro/astro.build/src/pages/_assets/nodejs.png", alt: "Node.js Logo" },
  { icon: "http://esm.sh/gh/withastro/astro.build/src/pages/_assets/deno.png", alt: "Deno Logo" },
  { icon: "http://esm.sh/gh/withastro/astro.build/src/pages/_assets/vercel.png", alt: "Vercel Logo" },
  { icon: "http://esm.sh/gh/withastro/astro.build/src/pages/_assets/netlify.png", alt: "Netlify Logo" },
];

export default function RuntimesList() {
  return (
    <div className="mb-4 md:mb-0">
    <div className="md:max-w-xl md:h-64 drop-shadow-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-900 hover:border-pink-600 transition-[border] rounded-lg px-12 py-4 mb-4">
      <h3 className="font-bold md:max-w-xl mx-auto px-1 py-1 text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-violet-500 to-blue-500 text-center text-4xl md:text-5xl">
        Most Runtimes Supported</h3>
      {/* create 4x4 grid showing nodejs, deno, netify & cf edge logo */}
      <div className="my-4 grid grid-cols-4 gap-4 md:max-w-sm mx-auto">
      {deployLogos.map(({ icon, alt }) => (
        <div key={alt} className="bg-white dark:bg-white/10 drop-shadow-lg flex justify-center p-2 rounded-md">
          <img src={icon} alt={alt} loading="lazy" className="h-8 w-8 md:h-10 md:w-10" />
        </div>
      ))}
      </div>
    </div>
    <PackitFeature />
    </div>
  )
}