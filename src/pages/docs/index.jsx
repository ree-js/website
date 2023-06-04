import Navbar from '../../components/Navbar.jsx';

export default function () {
  return (
    <>
      <Navbar></Navbar>
      <main className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
        <label for="navigation" className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-12 h-12 mb-4 ml-4 bg-white border rounded-full shadow-lg cursor-pointer text-black border-slate-300 lg:hidden transition duration-200 ease-in-out active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
          </svg>
        </label>

        <input type="checkbox" name="navigation" id="navigation" className="hidden peer" />
        <div className="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
          { /* Background overlay for mobile menu, show/hide based on mobile menu state. */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[50vw] backdrop-blur-2xl"></div>

          <nav className="sticky pb-3 top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-64">
            <ul role="list" className="-ml-0.5 mt-16 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8 border-r border-r-slate-900">
              { /* sidebar content */}
              <li>
                <h3 className="font-semibold tracking-tight text-slate-400">
                  Getting started
                </h3>

                <ul role="list" className="pl-3 mt-3 space-y-2">
                  <li>
                    <a href="#" className="text-slate-400 hover:text-slate-800">
                      Quick start guide
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white hover:text-slate-800">
                      How does Spinal work?
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <h3 className="font-semibold tracking-tight text-slate-400">
                  Content Types
                </h3>

                <ul role="list" className="pl-3 mt-3 space-y-2">
                  <li>
                    <a href="#" className="text-white hover:text-slate-800">
                      What are content types?
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white hover:text-slate-800">
                      Create and edit content types
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <h3 className="font-semibold tracking-tight text-slate-400">
                  Content
                </h3>

                <ul role="list" className="pl-3 mt-3 space-y-2">
                  <li>
                    <a href="#" className="text-white hover:text-slate-800">
                      What kind of content can I create and edit?
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white hover:text-slate-800">
                      Previewing content
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="font-semibold tracking-tight text-slate-400">
                  Content
                </h3>

                <ul role="list" className="pl-3 mt-3 space-y-2">
                  <li>
                    <a href="#" className="text-white hover:text-slate-800">
                      What kind of content can I create and edit?
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white hover:text-slate-800">
                      Previewing content
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="font-semibold tracking-tight text-slate-400">
                  Content
                </h3>

                <ul role="list" className="pl-3 mt-3 space-y-2">
                  <li>
                    <a href="#" className="text-white hover:text-slate-800">
                      What kind of content can I create and edit?
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white hover:text-slate-800">
                      Previewing content
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>
        </div>

        <div className="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article className="mt-16">
            <header></header>
          </article>

          <dl className="flex pt-6 mt-6 border-t border-slate-200">

            <div className="ml-auto text-right">
              <dt className="text-sm font-normal tracking-tight text-white">
                Next
              </dt>

              <dd className="mt-1">
                <a href="#" className="text-base font-semibold text-slate-400 hover:underline">
                  How does Spinal work?
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </main>
    </>
  )
}