/* esm.sh - esbuild bundle(unist-util-find-after@4.0.1) node production */
import{convert as f}from"./d78843.js";var i=function(e,r,o){let t=f(o);if(!e||!e.type||!e.children)throw new Error("Expected parent node");if(typeof r=="number"){if(r<0||r===Number.POSITIVE_INFINITY)throw new Error("Expected positive finite number as index")}else if(r=e.children.indexOf(r),r<0)throw new Error("Expected child node or index");for(;++r<e.children.length;)if(t(e.children[r],r,e))return e.children[r];return null};export{i as findAfter};
//# sourceMappingURL=unist-util-find-after.mjs.map