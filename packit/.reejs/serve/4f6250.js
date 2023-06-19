import React from "../cache/e2d12d.js";
/*@jsxRuntime automatic @jsxImportSource react*/
import Alert from "./1a8724.js";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    code: "code",
    p: "p",
    pre: "pre",
    ul: "ul",
    li: "li"
  }, props.components);
  return React.createElement(React.Fragment, null, React.createElement(_components.h1, null, React.createElement(_components.code, null, "reejs init")), "\n", React.createElement(_components.p, null, "This command will create a new project in the specified directory."), "\n", React.createElement(_components.p, null, "Usage:"), "\n", React.createElement(_components.pre, null, React.createElement(_components.code, { className: "hljs language-sh" ,}, "reejs init <project-name> [options]\n")), "\n", React.createElement(Alert, { text: "After creating the project, you must run `reejs i && reejs sync && npm i` only for the first time. This installs some necessary reejs dependencies. This process will be removed soon in the future."                                  ,} ), "\n", React.createElement(_components.h1, null, "Choosing Features"), "\n", React.createElement(_components.p, null, "We define features as something that you can add-on to your project. For example, you can add a feature to your project that allows you to use a database. You could also add a feature that allows you to use a specific template engine.\nTo add a feature to your project, run the following command:"), "\n", React.createElement(_components.pre, null, React.createElement(_components.code, { className: "hljs language-sh" ,}, "reejs init <project-name> --features <feature-names>\n")), "\n", React.createElement(Alert, { text: "You can select multiple features by separating them with a comma. You must not add spaces between the feature names."                   ,} ), "\n", React.createElement(_components.h1, null, "Available Features"), "\n", React.createElement(_components.p, null, "You can find a list of all available features below."), "\n", React.createElement(_components.ul, null, "\n", React.createElement(_components.li, null, "react"), "\n", React.createElement(_components.li, null, "tailwind"), "\n", React.createElement(_components.li, null, "api"), "\n", React.createElement(_components.li, null, "static"), "\n"), "\n", React.createElement(_components.p, null, "Therefore, to create a new Reejs project called ", React.createElement(_components.code, null, "my-app"), " with React, using TailwindCSS, having a REST API and serving static files, you would run the following command:"), "\n", React.createElement(_components.pre, null, React.createElement(_components.code, { className: "hljs language-sh" ,}, "reejs init my-app --features react,tailwind,api,static\n")));
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? React.createElement(MDXLayout, { ...props,}, React.createElement(_createMdxContent, { ...props,} )) : _createMdxContent(props);
}
export default MDXContent;

//# sourceURL=src/md/commands/init.mdx