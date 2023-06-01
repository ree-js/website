export default function URLImportsFeature() {
  return (
    <div className="md:max-w-3xl drop-shadow-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-900 hover:border-purple-600 transition-[border] rounded-lg px-1 md:px-12 md:py-8">
      <h3 className="font-bold md:max-w-xl mx-auto px-1 pt-4 md:py-1 rounded-full text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-violet-500 to-blue-500 text-center text-4xl md:text-5xl">
        URL Imports</h3>
      <p className="my-6 mx-4 font-medium text-xl md:text-2xl dark:text-slate-300">
        A module resolution algorithm that's fast, lightweight, and secure. Give yourself a headstart when scaffolding your next project.
      </p>
      <div className="bg-slate-400/10 dark:bg-white/5 border border-slate-400 dark:border-white/30 px-2 md:px-6 py-4 rounded-md">
        <div className="flex my-2">
          <p className="text-lg md:text-xl font-semibold mr-auto my-auto">URL Imports</p>
          <div className="w-1/6 md:w-[12%] bg-gradient-to-r from-violet-600 to-pink-600 py-1 rounded-full ml-auto">
            <p className="text-white text-right pr-4">4.3s</p>
          </div>
        </div>
        <div className="flex my-2">
          <p className="text-lg md:text-xl font-semibold mr-auto my-auto">npm</p>
          <div className="w-2/3 bg-gray-700 dark:bg-gray-500 py-1 rounded-full ml-auto">
            <p className="text-white text-right pr-4">19.5s</p>
          </div>
        </div>
        <div className="flex my-2">
          <p className="text-lg md:text-xl font-semibold mr-auto my-auto">deno</p>
          <div className="w-1/4 bg-gray-700 bg-gradient-to-r from-blue-500 to-indigo-600 py-1 rounded-full ml-auto">
            <p className="text-white text-right pr-4">6.5s</p>
          </div>
        </div>
        <div className="flex my-2">
          <p className="text-lg md:text-xl font-semibold mr-auto my-auto">bun i</p>
          <div className="w-1/6 bg-gray-700 bg-gradient-to-r from-green-500 to-green-600 py-1 rounded-full ml-auto">
            <p className="text-white text-right pr-4">4.5s</p>
          </div>
        </div>
      </div>
      <p className="italic text-slate-400 dark:text-slate-700 text-right py-2">*Above Graph not to scale.</p>
    </div>
  )
}