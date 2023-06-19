import Navbar from "../../components/Navbar";

export default function DoNotHydrate({c}){
  c.status(404);
  return (
    <>
    <Navbar />
    <div className="mt-32 text-center">
      <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-400">404</h1>
      <h2 className="text-2xl font-semibold text-slate-600 dark:text-slate-500">Reequired Docs Not Found</h2>
      <a href="/" className="mt-4 text-blue-500 hover:underline">Go back home</a>
      </div>
    </>
  )
}
