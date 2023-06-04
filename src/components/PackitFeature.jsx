export default function RuntimesList() {
  return (
    <div className="md:max-w-xl drop-shadow-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-900 rounded-lg px-12 py-8">
      <h3 className="font-bold md:max-w-xl mx-auto px-1 py-1 rounded-full text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-violet-500 to-blue-500 text-center text-4xl md:text-5xl">
        Packit</h3>
        <p className="my-6 mx-4 font-medium text-xl md:text-2xl dark:text-slate-300">
        Boot up your live development environment or a production build
        within <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">seconds</span> with a single command.
        Sucrase did it, right?
      </p>
    </div>
  )
}