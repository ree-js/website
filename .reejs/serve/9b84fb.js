import React from "../cache/e2d12d.js";
/*@jsxRuntime automatic @jsxImportSource react*/
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    blockquote: "blockquote",
    p: "p",
    strong: "strong",
    a: "a",
    em: "em",
    img: "img"
  }, props.components);
  return React.createElement(React.Fragment, null, React.createElement(_components.h1, null, "Reejs Server"), "\n", React.createElement(_components.blockquote, null, "\n", React.createElement(_components.p, null, "Is it 🔥🔥🔥? It's gotta be Hono then!"), "\n"), "\n", React.createElement(_components.p, null, "Reejs Server is primarily powe", React.createElement(_components.strong, null, "ree"), "dby ", React.createElement(_components.a, { href: "httpss://hono.dev",}, "Hono"), " and boasts its \"", React.createElement(_components.em, null, "blazingly"), "\" (Hi Jeff from Fireship.io!!!) fast performance on\ntop of portability to other restricted runtimes as we are ", React.createElement(_components.strong, null, "ree"), "ally ", React.createElement(_components.a, { href: "https://youtu.be/8;Ugdf-zkQM",}, "living on the Edge!"), " 🤣"), "\n", React.createElement(_components.p, null, "Jokes aside, consider Hono - ", React.createElement(_components.em, null, "(炎 in Japanese)"), " a contender to the likes of ", React.createElement(_components.a, { href: "https://expressjs.com",}, "Express"), " and ", React.createElement(_components.a, { href: "https://fastify.io",}, "Fastify"), " and is **ree*ady for the next\ngeneration of web server performance while still being lightweight and easy to use.\nFast, but not only fast. It's ", React.createElement(_components.em, null, "blazingly fast"), "."), "\n", React.createElement(_components.p, null, React.createElement(_components.img, { src: "https://hono.dev/images/bench01.png", alt: "Benchmarks",} )));
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? React.createElement(MDXLayout, { ...props,}, React.createElement(_createMdxContent, { ...props,} )) : _createMdxContent(props);
}
export default MDXContent;

//# sourceURL=src/md/basics/server.mdx