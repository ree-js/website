import React from "../cache/e2d12d.js";
/*@jsxRuntime automatic @jsxImportSource react*/
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a"
  }, props.components);
  return React.createElement(React.Fragment, null, React.createElement(_components.h1, null, "Welcome to Reejs Docs!"), "\n", React.createElement(_components.p, null, "We are glad to have you here! This is the official documentation for Reejs. Here you will find everything you need to know about Reejs."), "\n", React.createElement(_components.p, null, "We expect you to know the basics of JavaScript and Node.js (or the runtime you choose!). If you don't know them, you can learn them ", React.createElement(_components.a, { href: "https://www.w3schools.com/js/default.asp",}, "here"), " and ", React.createElement(_components.a, { href: "https://www.w3schools.com/nodejs/default.asp",}, "here"), "."), "\n", React.createElement(_components.p, null, "Wish you a happy learning!"));
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? React.createElement(MDXLayout, { ...props,}, React.createElement(_createMdxContent, { ...props,} )) : _createMdxContent(props);
}
export default MDXContent;

//# sourceURL=src/md/gettingStarted/root.mdx