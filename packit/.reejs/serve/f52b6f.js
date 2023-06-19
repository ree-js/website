import React from "../cache/e2d12d.js";
import Body from './393af5.js';

export default function DocsRoot({c}) {
  return (
    React.createElement(Body, { parent: c.req.param("parent"), child: c.req.param("id"),} )
  )
}

//# sourceURL=src/pages/docs/:parent/:id.jsx