import Navbar from "../components/Navbar";

export default function NotFound({c}){
  c.status(404);
  return (
    <>
    <Navbar />
    <div className="mt-32 text-center">
      <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-400">404</h1>
      <h2 className="text-2xl font-semibold text-slate-600 dark:text-slate-500">Page Not Found</h2>
      </div>
    </>
  )
}