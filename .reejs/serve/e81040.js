import React from "../cache/e2d12d.js";
/*@jsxRuntime automatic @jsxImportSource react*/
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    code: "code",
    p: "p",
    h2: "h2",
    pre: "pre",
    a: "a"
  }, props.components);
  return React.createElement(React.Fragment, null, React.createElement(_components.h1, null, React.createElement(_components.code, null, "reejs packit")), "\n", React.createElement(_components.p, null, React.createElement(_components.code, null, "reejs packit"), " packs your project into a single file."), "\n", React.createElement(_components.h2, null, "Usage"), "\n", React.createElement(_components.pre, null, React.createElement(_components.code, { className: "hljs language-bash" ,}, "reejs packit <service> [options]\n")), "\n", React.createElement(_components.p, null, "Please refer to the ", React.createElement(_components.a, { href: "/docs/basics/packit",}, "documentation"), " for more information."));
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? React.createElement(MDXLayout, { ...props,}, React.createElement(_createMdxContent, { ...props,} )) : _createMdxContent(props);
}
export default MDXContent;

//# sourceURL=src/md/commands/packit.mdx