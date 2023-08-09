import Navbar from "../../components/Navbar";

export default function NotFound(){
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

export function generateMetadata(c){
  return({
  title: `Reejs Docs | 404`,
  description: "Welcome to the Reejs Documentation. Here you can find all the information you need to get started with Reejs.",
  icon: "/favicon.ico",
  openGraph: {
    themeColor: "#805ad5",
    type: "website",
  }
  });
};