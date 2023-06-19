import React from "../cache/e2d12d.js";
//The App component for Reejs. This is the main component for any Reejs website.
//It is responsible for rendering the header, footer, and the main content of the website.
//This file should pull packages from the project's import maps during packit build so thats why its not using packages in package.json

import Header from './17624b.js';
import Body from './209876.js';
export default function App({children,className,style}) {
	return (
		React.createElement('html', null
, React.createElement(Header, null )
, React.createElement(Body, { children: children, className: className, style: style,} )
, React.createElement('script', { id: "__reejs",} )
)
	)
}

//# sourceURL=node_modules/@reejs/react/app.jsx