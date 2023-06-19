import React from "../cache/e2d12d.js";
/*@jsxRuntime automatic @jsxImportSource react*/
import Alert from "./1a8724.js";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    ul: "ul",
    li: "li",
    a: "a",
    hr: "hr",
    h3: "h3",
    pre: "pre",
    code: "code"
  }, props.components);
  return React.createElement(React.Fragment, null, React.createElement(_components.h1, null, "Installation"), "\n", React.createElement(_components.h2, null, "System Requirements"), "\n", React.createElement(_components.p, null, "Since Ree.js can run on multiple runtimes and packit on the most restricted edge runtimes along with normal legacy runtimes, you can run it on unrestricted, legacy runtimes too!"), "\n", React.createElement(_components.p, null, "Tldr; just use a recent/latest Bun/Deno/Nodejs runtime and you're good to go!"), "\n", React.createElement(_components.p, null, "You can use any one runtime from the following three and continue from there:"), "\n", React.createElement(_components.ul, null, "\n", React.createElement(_components.li, null, React.createElement(_components.a, { href: "https://bun.dev",}, "Bun"), " v0.6.x or later"), "\n", React.createElement(_components.li, null, React.createElement(_components.a, { href: "https://deno.land",}, "Deno"), " v1.34.x or later"), "\n", React.createElement(_components.li, null, React.createElement(_components.a, { href: "https://nodejs.org",}, "Nodejs"), " v18.16.x or later"), "\n"), "\n", React.createElement(_components.hr, null ), "\n", React.createElement(_components.h2, null, "Setup Reejs"), "\n", React.createElement(_components.h3, null, "Bun"), "\n", React.createElement(_components.pre, null, React.createElement(_components.code, { className: "hljs language-sh" ,}, "bun install reejs@latest\n")), "\n", React.createElement(_components.h3, null, "Deno"), "\n", React.createElement(Alert, { text: "Deno currently doesn't support node:repl module so reejs is temporarily disabled here. Currently we are looking for polyfills that we can use."                     ,} ), "\n", React.createElement(_components.pre, null, React.createElement(_components.code, { className: "hljs language-sh" ,}, "deno install -A -f -n reejs npm:reejs\n")), "\n", React.createElement(_components.h3, null, "Nodejs"), "\n", React.createElement(_components.pre, null, React.createElement(_components.code, { className: "hljs language-sh" ,}, "npm install -g reejs\n")));
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? React.createElement(MDXLayout, { ...props,}, React.createElement(_createMdxContent, { ...props,} )) : _createMdxContent(props);
}
export default MDXContent;

//# sourceURL=src/md/gettingStarted/installation.mdx