/* esm.sh - esbuild bundle(hast-util-to-text@3.1.2) node production */
import{convertElement as p}from"./6f2a2f.js";import{findAfter as h}from"./3b41b1.js";var f=/\n/g,d=/[\t ]+/g,u=p("br"),A=p("p"),g=p(["th","td"]),m=p("tr"),y=p(["datalist","head","noembed","noframes","noscript","rp","script","style","template","title",E,S]),x=p(["address","article","aside","blockquote","body","caption","center","dd","dialog","dir","dl","dt","div","figure","figcaption","footer","form,","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","legend","listing","main","menu","nav","ol","p","plaintext","pre","section","ul","xmp"]);function T(e,c={}){let r="children"in e?e.children:[],s=x(e),i=k(e,{whitespace:c.whitespace||"normal",breakBefore:!1,breakAfter:!1}),n=[];(e.type==="text"||e.type==="comment")&&n.push(...w(e,{whitespace:i,breakBefore:!0,breakAfter:!0}));let t=-1;for(;++t<r.length;)n.push(...b(r[t],e,{whitespace:i,breakBefore:t?void 0:s,breakAfter:t<r.length-1?u(r[t+1]):s}));let a=[],l;for(t=-1;++t<n.length;){let o=n[t];typeof o=="number"?l!==void 0&&o>l&&(l=o):o&&(l!==void 0&&l>-1&&a.push(`
`.repeat(l)||" "),l=-1,a.push(o))}return a.join("")}function b(e,c,r){return e.type==="element"?B(e,c,r):e.type==="text"?r.whitespace==="normal"?w(e,r):C(e):[]}function B(e,c,r){let s=k(e,r),i=e.children||[],n=-1,t=[];if(y(e))return t;let a,l;for(u(e)||m(e)&&h(c,e,m)?l=`
`:A(e)?(a=2,l=2):x(e)&&(a=1,l=1);++n<i.length;)t=t.concat(b(i[n],e,{whitespace:s,breakBefore:n?void 0:a,breakAfter:n<i.length-1?u(i[n+1]):l}));return g(e)&&h(c,e,g)&&t.push("	"),a&&t.unshift(a),l&&t.push(l),t}function w(e,c){let r=String(e.value),s=[],i=[],n=0;for(;n<=r.length;){f.lastIndex=n;let l=f.exec(r),o=l&&"index"in l?l.index:r.length;s.push(v(r.slice(n,o).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,""),n===0?c.breakBefore:!0,o===r.length?c.breakAfter:!0)),n=o+1}let t=-1,a;for(;++t<s.length;)s[t].charCodeAt(s[t].length-1)===8203||t<s.length-1&&s[t+1].charCodeAt(0)===8203?(i.push(s[t]),a=void 0):s[t]?(typeof a=="number"&&i.push(a),i.push(s[t]),a=0):(t===0||t===s.length-1)&&i.push(0);return i}function C(e){return[String(e.value)]}function v(e,c,r){let s=[],i=0,n;for(;i<e.length;){d.lastIndex=i;let t=d.exec(e);n=t?t.index:e.length,!i&&!n&&t&&!c&&s.push(""),i!==n&&s.push(e.slice(i,n)),i=t?n+t[0].length:n}return i!==n&&!r&&s.push(""),s.join(" ")}function k(e,c){if(e.type==="element"){let r=e.properties||{};switch(e.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return r.wrap?"pre-wrap":"pre";case"td":case"th":return r.noWrap?"nowrap":c.whitespace;case"textarea":return"pre-wrap";default:}}return c.whitespace}function E(e){return!!(e.properties||{}).hidden}function S(e){return e.tagName==="dialog"&&!(e.properties||{}).open}export{T as toText};
//# sourceMappingURL=hast-util-to-text.mjs.map