/* esm.sh - esbuild bundle(unist-util-visit-parents@5.1.3) node production */
import{convert as b}from"./d78843.js";function g(n){return"\x1B[33m"+n+"\x1B[39m"}var h=!0,p=!1,x="skip",P=function(n,f,c,l){typeof f=="function"&&typeof c!="function"&&(l=c,c=f,f=null);let I=b(f),m=l?-1:1;s(n,void 0,[])();function s(t,N,u){let o=t&&typeof t=="object"?t:{};if(typeof o.type=="string"){let r=typeof o.tagName=="string"?o.tagName:typeof o.name=="string"?o.name:void 0;Object.defineProperty(y,"name",{value:"node ("+g(t.type+(r?"<"+r+">":""))+")"})}return y;function y(){let r=[],i,e,a;if((!f||I(t,N,u[u.length-1]||null))&&(r=E(c(t,u)),r[0]===p))return r;if(t.children&&r[0]!==x)for(e=(l?t.children.length:-1)+m,a=u.concat(t);e>-1&&e<t.children.length;){if(i=s(t.children[e],e,a)(),i[0]===p)return i;e=typeof i[1]=="number"?i[1]:e+m}return r}}};function E(n){return Array.isArray(n)?n:typeof n=="number"?[h,n]:[n]}export{h as CONTINUE,p as EXIT,x as SKIP,P as visitParents};
//# sourceMappingURL=unist-util-visit-parents.mjs.map