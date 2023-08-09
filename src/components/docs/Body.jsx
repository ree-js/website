import Navbar from "../Navbar";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import AllDocs from "./AllDocs";
import NotFound from "../../pages/docs/404";
export default function DocsRoot({parent, child,c}) {
  child = child.replaceAll("-", " ").toLowerCase();
  parent = parent.replaceAll("-"," ").toLowerCase();
  let MarkDOC = AllDocs[parent];
  if(!MarkDOC){
    return (
      <NotFound c={c} />
    )
  }
  MarkDOC = MarkDOC[child];
  let data = Object.keys(AllDocs[parent]);
  let next = data[data.indexOf(child)+1];
  let prev = data[data.indexOf(child)-1];
  let current = child;

  return (
    <>
      <Navbar></Navbar>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/tokyo-night-dark.min.css" />
      <main className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
        <label for="navigation" className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-12 h-12 mb-4 ml-4 bg-slate-200 dark:bg-slate-900 dark:text-slate-500 border dark:border-slate-800 rounded-full shadow-lg cursor-pointer text-black border-slate-300 lg:hidden transition duration-200 ease-in-out active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
          </svg>
        </label>

        <Sidebar current={current} pfocus={parent} cfocus={child} />
        
        <div className="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article className="mt-16 prose dark:prose-invert md:prose-xl prose-p:leading-8 prose-a:text-blue-500
          prose-code:text-pink-200 prose-h1:text-violet-600 prose-h2:text-violet-500 dark:prose-h2:text-violet-400
          prose-pre:rounded-md prose-pre:p-0 prose-code:before:content-[''] prose-code:after:content-[''] 
          prose-code:text-pink-800 prose-code:bg-pink-200 dark:prose-code:bg-gray-900 prose-code:px-2
          prose-strong:text-gray-700 dark:prose-strong:text-slate-100
          prose-code:rounded-md prose-code:border-b-1  prose-code:border-b-pink-300 dark:prose-code:border-b-slate-800">
            <header></header>
            <MarkDOC></MarkDOC>
          </article>

          <BottomNav next={next} prev={prev} parent={parent} />
        </div>
      </main>
    </>
  )
}