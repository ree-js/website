import React from "../cache/e2d12d.js";
/*@jsxRuntime automatic @jsxImportSource react*/
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    code: "code",
    p: "p",
    pre: "pre",
    ul: "ul",
    li: "li",
    span: "span"
  }, props.components);
  return React.createElement(React.Fragment, null, React.createElement(_components.h1, null, React.createElement(_components.code, null, "reejs add")), "\n", React.createElement(_components.p, null, "Installs dependencies from/to ", React.createElement(_components.code, null, "import_map.json"), "."), "\n", React.createElement(_components.pre, null, React.createElement(_components.code, { className: "hljs language-bash" ,}, "reejs add <name> <url> [options]\n")), "\n", React.createElement(_components.p, null, "Aliases:"), "\n", React.createElement(_components.ul, null, "\n", React.createElement(_components.li, null, React.createElement(_components.code, null, "reejs install")), "\n", React.createElement(_components.li, null, React.createElement(_components.code, null, "reejs i")), "\n"), "\n", React.createElement(_components.p, null, "Options:"), "\n", React.createElement(_components.ul, null, "\n", React.createElement(_components.li, null, React.createElement(_components.code, null, "-f, --force"), " - Install the URLs without adding them to ", React.createElement(_components.code, null, "import_map.json"), ". You don't need ", React.createElement(_components.code, null, "name"), " parameter if you use this option."), "\n", React.createElement(_components.li, null, React.createElement(_components.code, null, "-b, --browser"), " - Install the URLs as browser dependencies. This dependency will be added to ", React.createElement(_components.code, null, "import_map.json"), " and will be available in the browser."), "\n", React.createElement(_components.li, null, React.createElement(_components.code, null, "-u, --user-agent"), " - Set the user agent for the request. Default: ", React.createElement(_components.code, null, "<Runtime>/<Runtime version> (reejs/<reejs version>)")), "\n"), "\n", React.createElement(_components.p, null, "Examples:"), "\n", React.createElement(_components.pre, null, React.createElement(_components.code, { className: "hljs language-bash" ,}, "reejs add react https://cdn.skypack.dev/react\nreejs install ", React.createElement(_components.span, { className: "hljs-comment",}, "# Install all dependencies from import_map.json"), "\nreejs add react https://cdn.skypack.dev/react -b ", React.createElement(_components.span, { className: "hljs-comment",}, "# Install react as browser dependency"), "\n")));
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? React.createElement(MDXLayout, { ...props,}, React.createElement(_createMdxContent, { ...props,} )) : _createMdxContent(props);
}
export default MDXContent;

//# sourceURL=src/md/commands/add.mdx