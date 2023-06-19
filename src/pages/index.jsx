import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import RuntimesList from "../components/RuntimesList";
import URLImportsFeature from "../components/URLImportsFeature";
import Link from "../components/Link";

export async function Head(){
  return({
    title: "Reejs",
    description: "Reejs is a React framework for building websites and web apps with ESM and import maps.",
    
  })
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mx-auto my-24 md:max-w-[84rem]">
        <div className="bg-slate-900/10 rounded-md border border-slate-900 hover:border-pink-600 transition-[border] duration-300 px-8 py-4 md:py-8 md:px-16 md:max-w-5xl mx-auto" style={{
      "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%236c6c6c' fill-opacity='0.32'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
          <h2 className="font-black text-center text-4xl md:text-6xl md:leading-[4rem]">
            While you were <span className="text-red-500">waiting</span> for your site to build, <span className="text-indigo-500">Transpilers</span> got <span className="text-emerald-600">better</span>.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-violet-600 to-pink-500">Enter Sucrase</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-8 font-medium text-xl md:text-2xl md:max-w-md text-center mx-auto">
            <a href="https://sucrase.io/" className="text-blue-500 hover:underline"
              rel="noreferrer" target="_blank"
            >Sucrase</a> is what makes Ree.js able to build your code at <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-900 dark:to-yellow-200">lightning speed</span> by targetting builds to newer versions of runtimes and browsers.
            Focus on what you love the best, not on <span className="text-red-500">waiting</span> for your code to build.
          </p>
        </div>
      </div>
      <div className="mx-auto my-24 md:max-w-2xl">
        <h2 className="font-bold text-center text-4xl md:text-6xl md:leading-[4rem]">
          Making a Website has never been <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">Faster</span>
        </h2>
        <p className="mx-auto font-light text-center text-xl md:text-4xl md:max-w-xl mt-4">
          Get a <span className="font-normal text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 dark:from-yellow-500 to-red-500  dark:to-red-500">Headstart</span> with the wide variety of
          libraries, services, hosters and features supported.
        </p>
      </div>
      <div className="mx-2 md:mx-36 my-12 md:flex gap-4">
      <RuntimesList/>
      <URLImportsFeature />
      </div>
      <p className="text-2xl md:text-3xl font-bold text-center text-purple-500">
        And a lot more features!
      </p>
      <p className="text-xl md:text-2xl font-medium text-center text-indigo-400">
        So what are you waiting for? Get started with Ree.js today!
      </p>
        <Link href="https://github.com/rovel" className="text-slate-500 block text-center mt-4">Want to make this page look cooler/better? Edit and make a pull request!</Link>
      <Footer />
    </>
  );
}
