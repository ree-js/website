import React from "../cache/e2d12d.js";
import Child from "./dcb52e.js";
import Parent from "./a9e412.js";
import AllDocs from "./cf2b69.js";
export default function Sidebar({ current, pfocus, cfocus }) {
  return (
    React.createElement(React.Fragment, null
      , React.createElement('input', { type: "checkbox", name: "sidebar", id: "navigation", className: "hidden peer" , title: "sidebar",} )
      , React.createElement('div', { className: "fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none"              ,}
         /* Background overlay for mobile menu, show/hide based on mobile menu state. */
        , React.createElement('div', { className: "absolute inset-y-0 right-0 w-full lg:w-[50vw] backdrop-blur-2xl"     ,})

        , React.createElement('nav', { className: "sticky pb-3 top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-64"       ,}
          , React.createElement('ul', { role: "list", className: "container-snap -ml-0.5 md:mt-16 h-[calc(100vh-4.5rem)] overflow-y-auto py-7 pl-0.5 space-y-8 md:border-r md:border-r-slate-400 dark:md:border-r-slate-900"          ,}
            , React.createElement('li', null
              /* automatically generate data from AllDocs */
              , 
                Object.keys(AllDocs).map((parent) => {
                  return (
                    React.createElement(Parent, { name: parent, current: pfocus == parent,}
                      , 
                        Object.keys(AllDocs[parent]).map((child) => {
                          if(child=="") return null;
                          return (
                            React.createElement(Child, { name: child, parent: parent, current: (child == current),} )
                          )
                        })
                      
                    )
                  )
                })
              
            )
          )
        )
      )
    )
  )
}
//# sourceURL=src/components/docs/Sidebar.jsx