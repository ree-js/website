/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.5.0/lib/util/pattern-in-scope) node production */
function o(e,n){return t(e,n.inConstruct,!0)&&!t(e,n.notInConstruct,!1)}function t(e,n,u){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return u;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}export{o as patternInScope};
//# sourceMappingURL=pattern-in-scope.js.map