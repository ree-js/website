import Link from "./Link";
export default function Navbar(){
  return (
    <div className="w-auto backdrop-blur-lg fixed top-0 left-0 right-0 border-b-1 dark:border-slate-900 hover:border-pink-600 transition-[border] duration-300 z-[100]">
      <div className="mx-4 md:mx-24 py-2 md:py-4 flex">
      <Link to="/" className="cursor-pointer w-min text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mr-auto hover:animate-pulse">Ree.js</Link>
      <div className="ml-auto my-auto">
        <Link to="/docs" className="px-4 py-2 md:mx-2 font-semibold hover:text-purple-500 transition-colors duration-300">Docs</Link>
        </div>
        <Link to="//github.com/rovelstars/reejs" className="px-4 py-2 md:mx-2 font-semibold hover:text-green-500 transition-colors duration-300">
          Github
          </Link>
      </div>
    </div>
  );
}
