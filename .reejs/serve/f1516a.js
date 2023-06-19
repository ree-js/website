import React from "../cache/e2d12d.js";
/*@jsxRuntime automatic @jsxImportSource react*/
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return React.createElement(React.Fragment, null, React.createElement(_components.h1, null, "Basics"), "\n", React.createElement(_components.p, null, "This Section of the documentation is intended to teach you the basics of the framework. It will cover the topics ranging from\nhydration of your pages to the creation of your own components and using them, as well as the basics of the routing system."));
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? React.createElement(MDXLayout, { ...props,}, React.createElement(_createMdxContent, { ...props,} )) : _createMdxContent(props);
}
export default MDXContent;

//# sourceURL=src/md/basics/index.mdx