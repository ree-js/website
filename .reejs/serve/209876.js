import React from "../cache/e2d12d.js";

export default function Body({children,className,style}) {
	return (
		React.createElement('body', { className: className, style: style,}
, React.createElement('div', { id: "root",}
, children
)
)
	)
}

//# sourceURL=node_modules/@reejs/react/body.jsx