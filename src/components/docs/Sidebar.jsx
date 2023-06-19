import Child from "./Child";
import Parent from "./Parent";
import AllDocs from "./AllDocs";
export default function Sidebar({ current, pfocus, cfocus }) {
  return (
    <>
      <input type="checkbox" name="sidebar" id="navigation" className="hidden peer" title="sidebar" />
      <div className="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
        { /* Background overlay for mobile menu, show/hide based on mobile menu state. */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[50vw] backdrop-blur-2xl"></div>

        <nav className="sticky pb-3 top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-64">
          <ul role="list" className="container-snap -ml-0.5 md:mt-16 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8 md:border-r md:border-r-slate-400 dark:md:border-r-slate-900">
            <li>
              {/* automatically generate data from AllDocs */}
              {
                Object.keys(AllDocs).map((parent) => {
                  return (
                    <Parent name={parent} current={pfocus == parent}>
                      {
                        Object.keys(AllDocs[parent]).map((child) => {
                          if(child=="") return null;
                          return (
                            <Child name={child} parent={parent} current={(child == current)} />
                          )
                        })
                      }
                    </Parent>
                  )
                })
              }
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}