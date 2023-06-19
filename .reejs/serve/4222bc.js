import React from "../cache/e2d12d.js";
/*@jsxRuntime automatic @jsxImportSource react*/
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return React.createElement(React.Fragment, null, React.createElement(_components.h1, null, "Reejs cli commands"), "\n", React.createElement(_components.p, null, "This section describes the commands available in the Reejs CLI and how to use them.\nPlease click on the command name on the sidebar to see the details."));
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? React.createElement(MDXLayout, { ...props,}, React.createElement(_createMdxContent, { ...props,} )) : _createMdxContent(props);
}
export default MDXContent;

//# sourceURL=src/md/commands/index.mdx