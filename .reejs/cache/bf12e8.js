/* esm.sh - esbuild bundle(mdast-util-gfm-autolink-literal@1.0.3) node production */
import{ccount as f}from"./19d031.js";import{findAndReplace as h}from"./2f5159.js";import{unicodePunctuation as p,unicodeWhitespace as d}from"./967460.js";var a="phrasing",u=["autolink","link","image","label"],g={transforms:[E],enter:{literalAutolink:x,literalAutolinkEmail:s,literalAutolinkHttp:s,literalAutolinkWww:s},exit:{literalAutolink:y,literalAutolinkEmail:L,literalAutolinkHttp:A,literalAutolinkWww:m}},w={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:a,notInConstruct:u},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:a,notInConstruct:u},{character:":",before:"[ps]",after:"\\/",inConstruct:a,notInConstruct:u}]};function x(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function s(t){this.config.enter.autolinkProtocol.call(this,t)}function A(t){this.config.exit.autolinkProtocol.call(this,t)}function m(t){this.config.exit.data.call(this,t);let e=this.stack[this.stack.length-1];e.url="http://"+this.sliceSerialize(t)}function L(t){this.config.exit.autolinkEmail.call(this,t)}function y(t){this.exit(t)}function E(t){h(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,P],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,W]],{ignore:["link","linkReference"]})}function P(t,e,i,n,o){let l="";if(!k(o)||(/^w/i.test(e)&&(i=e+i,e="",l="http://"),!_(i)))return!1;let r=v(i+n);if(!r[0])return!1;let c={type:"link",title:null,url:l+e+r[0],children:[{type:"text",value:e+r[0]}]};return r[1]?[c,{type:"text",value:r[1]}]:c}function W(t,e,i,n){return!k(n,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+i,children:[{type:"text",value:e+"@"+i}]}}function _(t){let e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function v(t){let e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let i=e[0],n=i.indexOf(")"),o=f(t,"("),l=f(t,")");for(;n!==-1&&o>l;)t+=i.slice(0,n+1),i=i.slice(n+1),n=i.indexOf(")"),l++;return[t,i]}function k(t,e){let i=t.input.charCodeAt(t.index-1);return(t.index===0||d(i)||p(i))&&(!e||i!==47)}export{g as gfmAutolinkLiteralFromMarkdown,w as gfmAutolinkLiteralToMarkdown};
//# sourceMappingURL=mdast-util-gfm-autolink-literal.mjs.map