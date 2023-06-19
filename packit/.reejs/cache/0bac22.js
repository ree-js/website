/* esm.sh - esbuild bundle(mdast-util-to-hast@12.3.0) node production */
function w(t,e){let r={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,r),t.applyData(e,r)}function k(t,e){let r={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,r),[t.applyData(e,r),{type:"text",value:`
`}]}function D(t,e){let r=e.value?e.value+`
`:"",n=e.lang?e.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,i={};n&&(i.className=["language-"+n]);let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:r}]};return e.meta&&(o.data={meta:e.meta}),t.patch(e,o),o=t.applyData(e,o),o={type:"element",tagName:"pre",properties:{},children:[o]},t.patch(e,o),o}function C(t,e){let r={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}function L(t,e){let r={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}import{normalizeUri as Q}from"./68f002.js";function m(t,e){let r=String(e.identifier).toUpperCase(),n=Q(r.toLowerCase()),i=t.footnoteOrder.indexOf(r),o;i===-1?(t.footnoteOrder.push(r),t.footnoteCounts[r]=1,o=t.footnoteOrder.length):(t.footnoteCounts[r]++,o=i+1);let l=t.footnoteCounts[r],u={type:"element",tagName:"a",properties:{href:"#"+t.clobberPrefix+"fn-"+n,id:t.clobberPrefix+"fnref-"+n+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};t.patch(e,u);let s={type:"element",tagName:"sup",properties:{},children:[u]};return t.patch(e,s),t.applyData(e,s)}function B(t,e){let r=t.footnoteById,n=1;for(;n in r;)n++;let i=String(n);return r[i]={type:"footnoteDefinition",identifier:i,children:[{type:"paragraph",children:e.children}],position:e.position},m(t,{type:"footnoteReference",identifier:i,position:e.position})}function P(t,e){let r={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}function I(t,e){if(t.dangerous){let r={type:"raw",value:e.value};return t.patch(e,r),t.applyData(e,r)}return null}import{normalizeUri as W}from"./68f002.js";function y(t,e){let r=e.referenceType,n="]";if(r==="collapsed"?n+="[]":r==="full"&&(n+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return{type:"text",value:"!["+e.alt+n};let i=t.all(e),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});let l=i[i.length-1];return l&&l.type==="text"?l.value+=n:i.push({type:"text",value:n}),i}function R(t,e){let r=t.definition(e.identifier);if(!r)return y(t,e);let n={src:W(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(n.title=r.title);let i={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,i),t.applyData(e,i)}import{normalizeUri as X}from"./68f002.js";function S(t,e){let r={src:X(e.url)};e.alt!==null&&e.alt!==void 0&&(r.alt=e.alt),e.title!==null&&e.title!==void 0&&(r.title=e.title);let n={type:"element",tagName:"img",properties:r,children:[]};return t.patch(e,n),t.applyData(e,n)}function A(t,e){let r={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,r);let n={type:"element",tagName:"code",properties:{},children:[r]};return t.patch(e,n),t.applyData(e,n)}import{normalizeUri as Y}from"./68f002.js";function O(t,e){let r=t.definition(e.identifier);if(!r)return y(t,e);let n={href:Y(r.url||"")};r.title!==null&&r.title!==void 0&&(n.title=r.title);let i={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}import{normalizeUri as Z}from"./68f002.js";function U(t,e){let r={href:Z(e.url)};e.title!==null&&e.title!==void 0&&(r.title=e.title);let n={type:"element",tagName:"a",properties:r,children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function H(t,e,r){let n=t.all(e),i=r?_(r):T(e),o={},l=[];if(typeof e.checked=="boolean"){let a=n[0],p;a&&a.type==="element"&&a.tagName==="p"?p=a:(p={type:"element",tagName:"p",properties:{},children:[]},n.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let u=-1;for(;++u<n.length;){let a=n[u];(i||u!==0||a.type!=="element"||a.tagName!=="p")&&l.push({type:"text",value:`
`}),a.type==="element"&&a.tagName==="p"&&!i?l.push(...a.children):l.push(a)}let s=n[n.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&l.push({type:"text",value:`
`});let c={type:"element",tagName:"li",properties:o,children:l};return t.patch(e,c),t.applyData(e,c)}function _(t){let e=!1;if(t.type==="list"){e=t.spread||!1;let r=t.children,n=-1;for(;!e&&++n<r.length;)e=T(r[n])}return e}function T(t){let e=t.spread;return e??t.children.length>1}function z(t,e){let r={},n=t.all(e),i=-1;for(typeof e.start=="number"&&e.start!==1&&(r.start=e.start);++i<n.length;){let l=n[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}let o={type:"element",tagName:e.ordered?"ol":"ul",properties:r,children:t.wrap(n,!0)};return t.patch(e,o),t.applyData(e,o)}function E(t,e){let r={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}function F(t,e){let r={type:"root",children:t.wrap(t.all(e))};return t.patch(e,r),t.applyData(e,r)}function q(t,e){let r={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}import{pointStart as ee,pointEnd as te}from"./240938.js";function J(t,e){let r=t.all(e),n=r.shift(),i=[];if(n){let l={type:"element",tagName:"thead",properties:{},children:t.wrap([n],!0)};t.patch(e.children[0],l),i.push(l)}if(r.length>0){let l={type:"element",tagName:"tbody",properties:{},children:t.wrap(r,!0)},u=ee(e.children[1]),s=te(e.children[e.children.length-1]);u.line&&s.line&&(l.position={start:u,end:s}),i.push(l)}let o={type:"element",tagName:"table",properties:{},children:t.wrap(i,!0)};return t.patch(e,o),t.applyData(e,o)}function V(t,e,r){let n=r?r.children:void 0,o=(n?n.indexOf(e):1)===0?"th":"td",l=r&&r.type==="table"?r.align:void 0,u=l?l.length:e.children.length,s=-1,c=[];for(;++s<u;){let p=e.children[s],f={},v=l?l[s]:void 0;v&&(f.align=v);let h={type:"element",tagName:o,properties:f,children:[]};p&&(h.children=t.all(p),t.patch(p,h),h=t.applyData(e,h)),c.push(h)}let a={type:"element",tagName:"tr",properties:{},children:t.wrap(c,!0)};return t.patch(e,a),t.applyData(e,a)}function $(t,e){let r={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}import{trimLines as re}from"./2ae6be.js";function j(t,e){let r={type:"text",value:re(String(e.value))};return t.patch(e,r),t.applyData(e,r)}function G(t,e){let r={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,r),t.applyData(e,r)}var N={blockquote:w,break:k,code:D,delete:C,emphasis:L,footnoteReference:m,footnote:B,heading:P,html:I,imageReference:R,image:S,inlineCode:A,linkReference:O,link:U,listItem:H,list:z,paragraph:E,root:F,strong:q,table:J,tableCell:$,tableRow:V,text:j,thematicBreak:G,toml:d,yaml:d,definition:d,footnoteDefinition:d};function d(){return null}import{visit as ne}from"./1834b7.js";import{position as le,pointStart as ie,pointEnd as oe}from"./240938.js";import{generated as ae}from"./741a14.js";import{definitions as pe}from"./4e2966.js";var g={}.hasOwnProperty;function K(t,e){let r=e||{},n=r.allowDangerousHtml||!1,i={};return l.dangerous=n,l.clobberPrefix=r.clobberPrefix===void 0||r.clobberPrefix===null?"user-content-":r.clobberPrefix,l.footnoteLabel=r.footnoteLabel||"Footnotes",l.footnoteLabelTagName=r.footnoteLabelTagName||"h2",l.footnoteLabelProperties=r.footnoteLabelProperties||{className:["sr-only"]},l.footnoteBackLabel=r.footnoteBackLabel||"Back to content",l.unknownHandler=r.unknownHandler,l.passThrough=r.passThrough,l.handlers={...N,...r.handlers},l.definition=pe(t),l.footnoteById=i,l.footnoteOrder=[],l.footnoteCounts={},l.patch=ce,l.applyData=se,l.one=u,l.all=s,l.wrap=fe,l.augment=o,ne(t,"footnoteDefinition",c=>{let a=String(c.identifier).toUpperCase();g.call(i,a)||(i[a]=c)}),l;function o(c,a){if(c&&"data"in c&&c.data){let p=c.data;p.hName&&(a.type!=="element"&&(a={type:"element",tagName:"",properties:{},children:[]}),a.tagName=p.hName),a.type==="element"&&p.hProperties&&(a.properties={...a.properties,...p.hProperties}),"children"in a&&a.children&&p.hChildren&&(a.children=p.hChildren)}if(c){let p="type"in c?c:{position:c};ae(p)||(a.position={start:ie(p),end:oe(p)})}return a}function l(c,a,p,f){return Array.isArray(p)&&(f=p,p={}),o(c,{type:"element",tagName:a,properties:p||{},children:f||[]})}function u(c,a){return b(l,c,a)}function s(c){return x(l,c)}}function ce(t,e){t.position&&(e.position=le(t))}function se(t,e){let r=e;if(t&&t.data){let n=t.data.hName,i=t.data.hChildren,o=t.data.hProperties;typeof n=="string"&&(r.type==="element"?r.tagName=n:r={type:"element",tagName:n,properties:{},children:[]}),r.type==="element"&&o&&(r.properties={...r.properties,...o}),"children"in r&&r.children&&i!==null&&i!==void 0&&(r.children=i)}return r}function b(t,e,r){let n=e&&e.type;if(!n)throw new Error("Expected node, got `"+e+"`");return g.call(t.handlers,n)?t.handlers[n](t,e,r):t.passThrough&&t.passThrough.includes(n)?"children"in e?{...e,children:x(t,e)}:e:t.unknownHandler?t.unknownHandler(t,e,r):ue(t,e)}function x(t,e){let r=[];if("children"in e){let n=e.children,i=-1;for(;++i<n.length;){let o=b(t,n[i],e);if(o){if(i&&n[i-1].type==="break"&&(!Array.isArray(o)&&o.type==="text"&&(o.value=o.value.replace(/^\s+/,"")),!Array.isArray(o)&&o.type==="element")){let l=o.children[0];l&&l.type==="text"&&(l.value=l.value.replace(/^\s+/,""))}Array.isArray(o)?r.push(...o):r.push(o)}}}return r}function ue(t,e){let r=e.data||{},n="value"in e&&!(g.call(r,"hProperties")||g.call(r,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:x(t,e)};return t.patch(e,n),t.applyData(e,n)}function fe(t,e){let r=[],n=-1;for(e&&r.push({type:"text",value:`
`});++n<t.length;)n&&r.push({type:"text",value:`
`}),r.push(t[n]);return e&&t.length>0&&r.push({type:"text",value:`
`}),r}import{normalizeUri as he}from"./68f002.js";function M(t){let e=[],r=-1;for(;++r<t.footnoteOrder.length;){let n=t.footnoteById[t.footnoteOrder[r]];if(!n)continue;let i=t.all(n),o=String(n.identifier).toUpperCase(),l=he(o.toLowerCase()),u=0,s=[];for(;++u<=t.footnoteCounts[o];){let p={type:"element",tagName:"a",properties:{href:"#"+t.clobberPrefix+"fnref-"+l+(u>1?"-"+u:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:t.footnoteBackLabel},children:[{type:"text",value:"\u21A9"}]};u>1&&p.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(u)}]}),s.length>0&&s.push({type:"text",value:" "}),s.push(p)}let c=i[i.length-1];if(c&&c.type==="element"&&c.tagName==="p"){let p=c.children[c.children.length-1];p&&p.type==="text"?p.value+=" ":c.children.push({type:"text",value:" "}),c.children.push(...s)}else i.push(...s);let a={type:"element",tagName:"li",properties:{id:t.clobberPrefix+"fn-"+l},children:t.wrap(i,!0)};t.patch(n,a),e.push(a)}if(e.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:t.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(t.footnoteLabelProperties)),id:"footnote-label"},children:[{type:"text",value:t.footnoteLabel}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(e,!0)},{type:"text",value:`
`}]}}function me(t,e){let r=K(t,e),n=r.one(t,null),i=M(r);return i&&n.children.push({type:"text",value:`
`},i),Array.isArray(n)?{type:"root",children:n}:n}export{x as all,N as defaultHandlers,b as one,me as toHast};
//# sourceMappingURL=mdast-util-to-hast.mjs.map