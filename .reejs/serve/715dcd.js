import React from "../cache/e2d12d.js";
import App from "./187ac4.js";
export default function(props) {
  //seperate children from props
  return React.createElement(App, { className: "bg-gray-300 dark:bg-black text-gray-900 dark:text-white transition-all duration-500 min-h-screen container-snap"       ,
  ...props,}

    , React.createElement('link', { rel: "icon", href: "/favicon.ico",} )
    , React.createElement('link', { rel: "stylesheet", href: "/needed.css",} )
    , props.children
   );
}
//# sourceURL=src/pages/_app.jsx