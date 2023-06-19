import TermText from "./TermText";
import Link from "./Link";
export default function () {
  return (
    <div className="md:flex md:flex-row py-24 overflow-x-hidden border-b-1 border-b-slate-900 bg-indigo-100 dark:bg-transparent" style={{
      "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%236c6c6c' fill-opacity='0.32'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <div className="mx-2 md:mx-16 mt-6 md:mt-20 md:w-1/2 my-auto">
        <h1 className="font-black mx-4 md:mx-12 md:leading-[4rem] text-4xl md:text-6xl border-l-8 border-transparent hover:border-pink-600 transition-[border] duration-300 pl-4">Say Goodbye to {" "}
          <span className="text-red-500">slow build times</span> & Hello to {" "}
          <span className="text-indigo-600">Better DX & UX</span> {" "}
          with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Ree.js</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-8 mx-6 md:mx-16 font-semibold text-xl md:text-2xl">A full stack meta framework that defines a new way to make websites that lets you focus on what you love the most - developing new ideas into reality. With Ree.js, we make sure that you develop faster, without compromising developer experience.</p>
        <div className="border-1 border-pink-600/10 hover:border-pink-600/50
        bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 rounded-md duration-200
          backdrop-blur-sm font-bold text-xl md:text-2xl mt-6 mx-6 md:mx-16 w-48">
          <Link href="/docs/getting-started/introduction" className="text-center my-auto w-full h-full block px-4 py-2
          bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600
          ">Get Started</Link>
        </div>
      </div>
      <div className="z-[50] md:w-1/2 rounded-lg md:rounded-r-none md:rounded-l-2xl bg-gradient-to-r from-purple-600 to-pink-600 h-96 mt-8 md:mt-24 mx-2 md:mx-0">
        <div class="z-[100] md:m-8 shadow-2xl shadow-pink-600/20 group relative flex h-96 md:h-full w-full cursor-default flex-col overflow-hidden rounded-lg bg-white/70 dark:bg-black border-2 border-pink-600/50 hover:border-pink-600 transition-[border] duration-300">
          <div class="relative flex w-full items-center border-b-2 border-slate-400 dark:border-slate-900 py-4">
            <div class="ml-4 flex">
              <div class="h-3 w-3 rounded-full bg-red-400"></div>
              <div class="ml-2 h-3 w-3 rounded-full bg-yellow-400"></div>
              <div class="ml-2 h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <div class="absolute top-0 left-0 flex h-full w-full items-center justify-center font-bold text-slate-600 dark:text-slate-300"> Terminal </div>
          </div>
          <div class="flex flex-1 p-4 font-mono">
            <span class="mr-2 inline-block select-none font-bold">
              <TermText />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}