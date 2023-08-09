import Navbar from "../components/Navbar";

export default function NotFound(){
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

export function generateMetadata(c){
  return({
  title: `Reejs | 404`,
  description: "Sussy Baka",
  icon: "/favicon.ico",
  openGraph: {
    themeColor: "#805ad5",
    type: "website",
  }
  });
};