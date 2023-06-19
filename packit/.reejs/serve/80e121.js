import React from "../cache/e2d12d.js";
export default function Link({ to, href, children, className }) {
  return (
    React.createElement(React.Fragment, null
      , React.createElement('a', { className: className, href: to || href || "#", onClick: (e) => {
        e.preventDefault();
        window.location.pathname = to || href;
      },}, children)
    )
  );
}
//# sourceURL=src/components/Link.jsx