/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.17.1.
 * Original file: /npm/@twind/core@1.1.3/core.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
let e;function t(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function n(e,n=","){return e.map(t).join(n)}let r="undefined"!=typeof CSS&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function i(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function o(e,t="@media "){return t+l(e).map((e=>("string"==typeof e&&(e={min:e}),e.raw||Object.keys(e).map((t=>`(${t}-width:${e[t]})`)).join(" and ")))).join(",")}function l(e=[]){return Array.isArray(e)?e:null==e?[]:[e]}function s(e){return e}function u(){}let a={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function c(e){return e.match(/[-=:;]/g)?.length||0}function f(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(c(e),15)<<18}let p=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function d({n:e,i:n,v:r=[]},i,s,u){e&&(e=t({n:e,i:n,v:r})),u=[...l(u)];for(let e of r){let t=i.theme("screens",e);for(let n of l(t&&o(t)||i.v(e))){u.push(n),s|=t?67108864|f(n):"dark"==e?1073741824:"@"==n[0]?f(n):1<<~(/:([a-z-]+)/.test(n)&&~p.indexOf(RegExp.$1.slice(2,7))||-18)}}return{n:e,p:s,r:u,i:n}}let h=new Map;function g(e){if(e.d){let t=[],n=y(e.r.reduce(((e,n)=>"@"==n[0]?(t.push(n),e):n?y(e,(e=>y(n,(t=>{let n=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(t);if(n){let r=e.indexOf(n[1]);return~r?e.slice(0,r)+n[0]+e.slice(r+n[1].length):m(e,t)}return m(t,e)})))):e),"&"),(t=>m(t,e.n?"."+r(e.n):"")));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight(((e,t)=>t+"{"+e+"}"),e.d)}}function y(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,((e,n,r)=>t(n)+r))}function m(e,t){return e.replace(/&/g,t)}let b=new Intl.Collator("en",{numeric:!0});function $(e,t){for(var n=0,r=e.length;n<r;){let i=r+n>>1;0>=v(e[i],t)?n=i+1:r=i}return r}function v(e,t){let n=e.p&a.o;return n!=(t.p&a.o)||n!=a.b&&n!=a.o?e.p-t.p||e.o-t.o||b.compare(w(e.n),w(t.n))||b.compare(x(e.n),x(t.n)):0}function w(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function x(e){return(e||"").replace(/\W/g,(e=>String.fromCharCode(127+e.charCodeAt(0))))+"\0"}function k(e,t){return Math.round(parseInt(e,16)*t)}function A(e,t={}){if("function"==typeof e)return e(t);let{opacityValue:n="1",opacityVariable:r}=t,i=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",i);if("#"==e[0]&&(4==e.length||7==e.length)){let t=(e.length-1)/3,n=[17,1,.062272][t-1];return`rgba(${[k(e.substr(1,t),n),k(e.substr(1+t,t),n),k(e.substr(1+2*t,t),n),i]})`}return"1"==i?e:"0"==i?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${i})`)}function j(e,t,{theme:n}){return n(e,t=t.replace(/\d+$/,(e=>100*(9-~~(parseInt(e,10)/100)||.5))))}function O(e,t,n,r,s=[]){return function e(t,{n:n,p:r,r:s=[],i:u},p){let d=[],h="",y=0,m=0;for(let v in t||{}){var b,$;let w=t[v];if("@"==v[0]){if(!w)continue;if("a"==v[1]){d.push(...E(n,r,_(""+w),p,r,s,u,!0));continue}if("l"==v[1]){for(let t of l(w))d.push(...e(t,{n:n,p:(b=a[v[7]],r&~a.o|b),r:"d"==v[7]?[]:s,i:u},p));continue}if("i"==v[1]){d.push(...l(w).map((e=>({p:-1,o:0,r:[],d:v+" "+e}))));continue}if("k"==v[1]){d.push({p:a.d,o:0,r:[v],d:e(w,{p:a.d},p).map(g).join("")});continue}if("f"==v[1]){d.push(...l(w).map((t=>({p:a.d,o:0,r:[v],d:e(t,{p:a.d},p).map(g).join("")}))));continue}}if("object"!=typeof w||Array.isArray(w))"label"==v&&w?n=w+i(JSON.stringify([r,u,t])):(w||0===w)&&(v=v.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),m+=1,y=Math.max(y,"-"==($=v)[0]?0:c($)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test($)?+!!RegExp.$1||-!!RegExp.$2:0)+1),h+=(h?";":"")+l(w).map((e=>p.s(v,M(""+e,p.theme)+(u?" !important":"")))).join(";"));else if("@"==v[0]||v.includes("&")){let t=r;"@"==v[0]&&(v=v.replace(/\bscreen\(([^)]+)\)/g,((e,n)=>{let r=p.theme("screens",n);return r?(t|=67108864,o(r,"")):e})),t|=f(v)),d.push(...e(w,{n:n,p:t,r:[...s,v],i:u},p))}else d.push(...e(w,{p:r,r:[...s,v]},p))}return d.unshift({n:n,p:r,o:Math.max(0,15-m)+1.5*Math.min(y||15,15),r:s,d:h}),d.sort(v)}(e,d(t,n,r,s),n)}function M(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,((e,n,r,i,o="")=>{let s=t(r,o);return"function"==typeof s&&/color|fill|stroke/i.test(r)?A(s):""+l(s).filter((e=>Object(e)!==e))}))}function S(e,t){let n,r=[];for(let i of e)i.d&&i.n?n?.p==i.p&&""+n.r==""+i.r?(n.c=[n.c,i.c].filter(Boolean).join(" "),n.d=n.d+";"+i.d):r.push(n={...i,n:i.n&&t}):r.push({...i,n:i.n&&t});return r}function C(e,n,r=a.u,i,o){let s=[];for(let u of e)for(let e of function(e,n,r,i,o){let s=function(e,t){let n=h.get(e.n);return n?n(e,t):t.r(e.n,"dark"==e.v[0])}(e={...e,i:e.i||o},n);return s?"string"==typeof s?(({r:i,p:r}=d(e,n,r,i)),S(C(_(s),n,r,i,e.i),e.n)):Array.isArray(s)?s.map((e=>{var t,n;return{o:0,...e,r:[...l(i),...l(e.r)],p:(t=r,n=e.p??r,t&~a.o|n)}})):O(s,e,n,r,i):[{c:t(e),p:0,o:0,r:[]}]}(u,n,r,i,o))s.splice($(s,e),0,e);return s}function E(e,t,n,r,i,o,l,s){return S((s?n.flatMap((e=>C([e],r,i,o,l))):C(n,r,i,o,l)).map((e=>e.p&a.o&&(e.n||t==a.b)?{...e,p:e.p&~a.o|t,o:0}:e)),e)}function R(e,t,n,r){var i;return i=(e,i)=>{let{n:o,p:l,r:s,i:u}=d(e,i,t);return n&&E(o,t,n,i,l,s,u,r)},h.set(e,i),e}function z(e,t,n){if("("!=e[e.length-1]){let n=[],r=!1,i=!1,o="";for(let t of e)if("("!=t&&!/[~@]$/.test(t)){if("!"==t[0]&&(t=t.slice(1),r=!r),t.endsWith(":")){n["dark:"==t?"unshift":"push"](t.slice(0,-1));continue}"-"==t[0]&&(t=t.slice(1),i=!i),t.endsWith("-")&&(t=t.slice(0,-1)),t&&"&"!=t&&(o+=(o&&"-")+t)}o&&(i&&(o="-"+o),t[0].push({n:o,v:n.filter(N),i:r}))}}function N(e,t,n){return n.indexOf(e)==t}let V=new Map;function _(e){let t=V.get(e);if(!t){let r=[],o=[[]],l=0,s=0,u=null,c=0,f=(t,n=0)=>{l!=c&&(r.push(e.slice(l,c+n)),t&&z(r,o)),l=c+1};for(;c<e.length;c++){let t=e[c];if(s)"\\"!=e[c-1]&&(s+=+("["==t)||-("]"==t));else if("["==t)s+=1;else if(u)"\\"!=e[c-1]&&u.test(e.slice(c))&&(u=null,l=c+RegExp.lastMatch.length);else if("/"!=t||"\\"==e[c-1]||"*"!=e[c+1]&&"/"!=e[c+1])if("("==t)f(),r.push(t);else if(":"==t)":"!=e[c+1]&&f(!1,1);else if(/[\s,)]/.test(t)){f(!0);let e=r.lastIndexOf("(");if(")"==t){let t=r[e-1];if(/[~@]$/.test(t)){let l=o.shift();r.length=e,z([...r,"#"],o);let{v:s}=o[0].pop();for(let e of l)e.v.splice(+("dark"==e.v[0])-+("dark"==s[0]),s.length);z([...r,R(t.length>1?t.slice(0,-1)+i(JSON.stringify([t,l])):t+"("+n(l)+")",a.a,l,/@$/.test(t))],o)}e=r.lastIndexOf("(",e-1)}r.length=e+1}else/[~@]/.test(t)&&"("==e[c+1]&&o.unshift([]);else u="*"==e[c+1]?/^\*\//:/^[\r\n]/}f(!0),V.set(e,t=o[0])}return t}function P(e,t,n){return t.reduce(((t,r,i)=>t+n(r)+e[i+1]),e[0])}function F(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?P(e,t,(e=>I(e).trim())):t.filter(Boolean).reduce(((e,t)=>e+I(t)),e?I(e):"")}function I(e){let t,n="";if(e&&"object"==typeof e)if(Array.isArray(e))(t=F(e[0],e.slice(1)))&&(n+=" "+t);else for(let t in e)e[t]&&(n+=" "+t);else null!=e&&"boolean"!=typeof e&&(n+=" "+e);return n}let L=q("@"),T=q("~");function q(e){return new Proxy((function(e,...n){return t("",e,n)}),{get:(e,n)=>n in e?e[n]:function(e,...r){return t(n,e,r)}});function t(t,r,i){return n(_(t+e+"("+F(r,i)+")"))}}function D(e,t){return Array.isArray(e)?B(P(e,t,(e=>null!=e&&"boolean"!=typeof e?e:""))):"string"==typeof e?B(e):[e]}let J=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function B(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],i=[];for(;t=J.exec(e);)t[4]&&(n.shift(),i.shift()),t[3]?(i.unshift(t[3]),n.unshift({}),r.push(i.reduce(((e,t)=>({[t]:e})),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(i.reduce(((e,t)=>({[t]:e})),n[0]))),n[0][t[1]]=t[2]);return r}function U(e,...t){var n;let r=D(e,t),o=(r.find((e=>e.label))?.label||"css")+i(JSON.stringify(r));return n=(e,t)=>S(r.flatMap((n=>O(n,e,t,a.o))),o),h.set(o,n),o}let W=new Proxy((function(e,t){return Y("animation",e,t)}),{get:(e,t)=>t in e?e[t]:function(e,n){return Y(t,e,n)}});function Y(e,t,n){return{toString:()=>U({label:e,"@layer components":{..."object"==typeof t?t:{animation:t},animationName:""+n}})}}function Z(e,t,n){return[e,G(t,n)]}function G(e,t){return"function"==typeof e?e:"string"==typeof e&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):H(n,1)}):t=>e||{[t[1]]:H(t,2)}}function H(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return"-"==e.input[0]?`calc(${n} * -1)`:n}function K(e,t,n,r){return[e,Q(t,n,r)]}function Q(e,t,n){let r="string"==typeof t?(e,r)=>({[t]:n?n(e,r):e._}):t||(({1:e,_:t},n,r)=>({[e||r]:t}));return(t,n)=>{let i=ie(e||t[1]),o=n.theme(i,t.$$)??re(t.$$,i,n);if(null!=o)return t._=H(t,0,o),r(t,n,i)}}function X(e,t={},n){return[e,ee(t,n)]}function ee(e={},t){return(n,r)=>{let{section:i=ie(n[0]).replace("-","")+"Color"}=e,[o,l]=te(n.$$);if(!o)return;let s=r.theme(i,o)||re(o,i,r);if(!s||"object"==typeof s)return;let{opacityVariable:u=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:a=i.replace("Color","Opacity"),property:c=i,selector:f}=e,p=r.theme(a,l||"DEFAULT")||l&&re(l,a,r),d=t||(({_:e})=>{let t=ne(c,e);return f?{[f]:t}:t});n._={value:A(s,{opacityVariable:u||void 0,opacityValue:p||void 0}),color:e=>A(s,e),opacityVariable:u||void 0,opacityValue:p||void 0};let h=d(n,r);if(!n.dark){let e=r.d(i,o,s);e&&e!==s&&(n._={value:A(e,{opacityVariable:u||void 0,opacityValue:p||"1"}),color:t=>A(e,t),opacityVariable:u||void 0,opacityValue:p||void 0},h={"&":h,[r.v("dark")]:d(n,r)})}return h}}function te(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function ne(e,t){let n={};return"string"==typeof t?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function re(e,t,n){if("["==e[0]&&"]"==e.slice(-1)){if(e=oe(M(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!/^color:/.test(e)&&!/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e)||/image/i.test(t)&&!/^image:/.test(e)&&!/^[a-z-]+\(/.test(e)||/weight/i.test(t)&&!/^(number|any):/.test(e)&&!/^\d+$/.test(e)||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function ie(e){return e.replace(/-./g,(e=>e[1].toUpperCase()))}function oe(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,((e,t="",n,r="")=>oe(t)+n+oe(r))):e.replace(/(^|[^\\])_+/g,((e,t)=>t+" ".repeat(e.length-t.length))).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,(e=>e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 ")))}let le=Symbol();function se(e,t){return e}function ue(e){return e[le]}function ae(e,...t){return n(_(F(e,t))," ")}function ce({presets:e=[],...t}){let n={darkMode:void 0,darkColor:void 0,preflight:!1!==t.preflight&&[],theme:{},variants:l(t.variants),rules:l(t.rules),ignorelist:l(t.ignorelist),hash:void 0,stringify:(e,t)=>e+":"+t,finalize:[]};for(let r of l([...e,{darkMode:t.darkMode,darkColor:t.darkColor,preflight:!1!==t.preflight&&l(t.preflight),theme:t.theme,hash:t.hash,stringify:t.stringify,finalize:t.finalize}])){let{preflight:e,darkMode:t=n.darkMode,darkColor:i=n.darkColor,theme:o,variants:s,rules:u,ignorelist:a,hash:c=n.hash,stringify:f=n.stringify,finalize:p}="function"==typeof r?r(n):r;n={preflight:!1!==n.preflight&&!1!==e&&[...n.preflight,...l(e)],darkMode:t,darkColor:i,theme:{...n.theme,...o,extend:{...n.theme.extend,...o?.extend}},variants:[...n.variants,...l(s)],rules:[...n.rules,...l(u)],ignorelist:[...n.ignorelist,...l(a)],hash:c,stringify:f,finalize:[...n.finalize,...l(p)]}}return n}function fe(e,t,n,r,i,o){for(let l of t){let t=n.get(l);t||n.set(l,t=r(l));let s=t(e,i,o);if(s)return s}}function pe(e){var t;return he(e[0],"function"==typeof(t=e[1])?t:()=>t)}function de(e){return Array.isArray(e)?he(e[0],G(e[1],e[2])):he(e,G(undefined,undefined))}function he(e,t){return ge(e,((e,n,r,i)=>{let o=n.exec(e);if(o)return o.$$=e.slice(o[0].length),o.dark=i,t(o,r)}))}function ge(e,t){let n=l(e).map(ye);return(e,r,i)=>{for(let o of n){let n=t(e,o,r,i);if(n)return n}}}function ye(e){return"string"==typeof e?RegExp("^"+e+(e.includes("$")||"-"==e.slice(-1)?"":"$")):e}function me(e,t){let n=ce(e),o=function({theme:e,darkMode:t,darkColor:n=u,variants:o,rules:a,hash:c,stringify:f,ignorelist:p,finalize:d}){let h=new Map,g=new Map,y=new Map,m=new Map,b=ge(p,((e,t)=>t.test(e)));o.push(["dark",Array.isArray(t)||"class"==t?`${l(t)[1]||".dark"} &`:"string"==typeof t&&"media"!=t?t:"@media (prefers-color-scheme:dark)"]);let $="function"==typeof c?e=>c(e,i):c?i:s;$!==s&&d.push((e=>({...e,n:e.n&&$(e.n),d:e.d?.replace(/--(tw(?:-[\w-]+)?)\b/g,((e,t)=>"--"+$(t).replace("#","")))})));let v={theme:function({extend:e={},...t}){let n={},r={get colors(){return i("colors")},theme:i,negative:()=>({}),breakpoints(e){let t={};for(let n in e)"string"==typeof e[n]&&(t["screen-"+n]=e[n]);return t}};return i;function i(r,l,s,u){if(r){if(({1:r,2:u}=/^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(r)||[,r]),/[.[]/.test(r)){let e=[];r.replace(/\[([^\]]+)\]|([^.[]+)/g,((t,n,r=n)=>e.push(r))),r=e.shift(),s=l,l=e.join("-")}let a=n[r]||Object.assign(Object.assign(n[r]={},o(t,r)),o(e,r));if(null==l)return a;l||(l="DEFAULT");let c=a[l]??l.split("-").reduce(((e,t)=>e?.[t]),a)??s;return u?A(c,{opacityValue:M(u,i)}):c}let a={};for(let n of[...Object.keys(t),...Object.keys(e)])a[n]=i(n);return a}function o(e,t){let n=e[t];return"function"==typeof n&&(n=n(r)),n&&/color|fill|stroke/i.test(t)?function e(t,n=[]){let r={};for(let i in t){let o=t[i],l=[...n,i];r[l.join("-")]=o,"DEFAULT"==i&&(l=n,r[n.join("-")]=o),"object"==typeof o&&Object.assign(r,e(o,l))}return r}(n):n}}(e),e:r,h:$,s:(e,t)=>f(e,t,v),d:(e,t,r)=>n(e,t,v,r),v:e=>(h.has(e)||h.set(e,fe(e,o,g,pe,v)||"&:"+e),h.get(e)),r(e,t){let n=JSON.stringify([e,t]);return y.has(n)||y.set(n,!b(e,v)&&fe(e,a,m,de,v,t)),y.get(n)},f:e=>d.reduce(((e,t)=>t(e,v)),e)};return v}(n),c=new Map,f=[],p=new Set;function d(e){let n=o.f(e),r=g(n);if(r&&!p.has(r)){p.add(r);let n=$(f,e);t.insert(r,n,e),f.splice(n,0,e)}return n.n}return t.resume((e=>c.set(e,e)),((e,n)=>{t.insert(e,f.length,n),f.push(n),p.add(e)})),Object.defineProperties((function(e){if(!c.size)for(let e of l(n.preflight))"function"==typeof e&&(e=e(o)),e&&("string"==typeof e?E("",a.b,_(e),o,a.b,[],!1,!0):O(e,{},o,a.b)).forEach(d);e=""+e;let t=c.get(e);if(!t){let n=new Set;for(let t of C(_(e),o))n.add(t.c).add(d(t));t=[...n].filter(Boolean).join(" "),c.set(e,t).set(t,t)}return t}),Object.getOwnPropertyDescriptors({get target(){return t.target},theme:o.theme,config:n,snapshot(){let e=t.snapshot(),n=new Set(p),r=new Map(c),i=[...f];return()=>{e(),p=n,c=r,f=i}},clear(){t.clear(),p=new Set,c=new Map,f=[]},destroy(){this.clear(),t.destroy()}}))}function be(e,t){return e!=t&&""+e.split(" ").sort()!=""+t.split(" ").sort()}function $e(e){let t=new MutationObserver(n);return{observe(e){t.observe(e,{attributeFilter:["class"],subtree:!0,childList:!0}),r(e),n([{target:e,type:""}])},disconnect(){t.disconnect()}};function n(e){for(let{type:t,target:n}of e)if("a"==t[0])r(n);else for(let e of n.querySelectorAll("[class]"))r(e);t.takeRecords()}function r(t){let n,r=t.getAttribute?.("class");r&&be(r,n=e(r))&&t.setAttribute("class",n)}}function ve(e=Ce,t="undefined"!=typeof document&&document.documentElement){if(t){let n=$e(e);n.observe(t);let{destroy:r}=e;e.destroy=()=>{n.disconnect(),r.call(e)}}return e}function we(e){let t=document.querySelector(e||'style[data-twind=""]');return t&&"STYLE"==t.tagName||(t=document.createElement("style"),document.head.prepend(t)),t.dataset.twind="claimed",t}function xe(e){let t=e?.cssRules?e:(e&&"string"!=typeof e?e:we(e)).sheet;return{target:t,snapshot(){let e=Array.from(t.cssRules,(e=>e.cssText));return()=>{this.clear(),e.forEach(this.insert)}},clear(){for(let e=t.cssRules.length;e--;)t.deleteRule(e)},destroy(){t.ownerNode?.remove()},insert(e,n){try{t.insertRule(e,n)}catch(e){t.insertRule(":root{}",n)}},resume:u}}function ke(e){let t=e&&"string"!=typeof e?e:we(e);return{target:t,snapshot(){let e=Array.from(t.childNodes,(e=>e.textContent));return()=>{this.clear(),e.forEach(this.insert)}},clear(){t.textContent=""},destroy(){t.remove()},insert(e,n){t.insertBefore(document.createTextNode(e),t.childNodes[n]||null)},resume:u}}function Ae(e){let t=[];return{target:t,snapshot(){let e=[...t];return()=>{t.splice(0,t.length,...e)}},clear(){t.length=0},destroy(){this.clear()},insert(n,r,i){t.splice(r,0,e?`/*!${i.p.toString(36)},${(2*i.o).toString(36)}${i.n?","+i.n:""}*/${n}`:n)},resume:u}}function je(e,t){let n="undefined"==typeof document?Ae(!t):e?ke():xe();return t||(n.resume=Me),n}function Oe(e){return(e.ownerNode||e).textContent||(e.cssRules?Array.from(e.cssRules,(e=>e.cssText)):l(e)).join("")}function Me(e,t){let n=Oe(this.target),r=/\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;if(r.test(n)){var i;let o;if(r.lastIndex=0,this.clear(),"undefined"!=typeof document)for(let t of document.querySelectorAll("[class]"))e(t.getAttribute("class"));for(;i=r.exec(n),o&&t(n.slice(o.index+o[0].length,i?.index),{p:parseInt(o[1],36),o:parseInt(o[2],36)/2,n:o[3]}),o=i;);}}function Se(e){if("undefined"!=typeof document&&document.currentScript){let t=()=>n.disconnect(),n=new MutationObserver((n=>{for(let{target:r}of n)if(r===document.body)return e(),t()}));return n.observe(document.documentElement,{childList:!0,subtree:!0}),t}return u}let Ce=new Proxy(u,{apply:(t,n,r)=>e(r[0]),get(t,n){let r=e[n];return"function"==typeof r?function(){return r.apply(e,arguments)}:r}});function Ee(t={},n=je,r){return e?.destroy(),e=ve(me(t,"function"==typeof n?n():n),r)}let Re=function(e,...t){("function"==typeof this?this:Ce)(U({"@layer base":D(e,t)}))};function ze(e,t=!0){let n=ce(e);return Ee({...n,hash:n.hash??t},(()=>je(!t)))}let Ne=function e(t){return new Proxy((function(e,...n){return Ve(t,"",e,n)}),{get:(n,r)=>"bind"===r?e:r in n?n[r]:function(e,...n){return Ve(t,r,e,n)}})}();function Ve(e,t,n,o){return{toString(){let l=D(n,o),s=r(t+i(JSON.stringify([t,l])));return("function"==typeof e?e:Ce)(U({[`@keyframes ${s}`]:D(n,o)})),s}}}function _e(e,t={}){let{tw:n=Ce,minify:r=s}="function"==typeof t?{tw:t}:t,{html:i,css:o}=Pe(e,n);return i.replace("</head>",`<style data-twind>${r(o,i)}</style></head>`)}function Pe(e,t=Ce){let n=t.snapshot(),r={html:Fe(e,t),css:Oe(t.target)};return n(),r}function Fe(e,t=Ce){let n="",r=0;return function(e,t){let n=1,r=0,i="",o="",l=l=>{5==n&&"class"==o&&!1===t(r,l,i)&&(e="")};for(let t=0;t<e.length;t++){let s=e[t];1==n?"<"==s&&(n="!--"==e.substr(t+1,3)?4:3):4==n?">"==s&&"--"==e.slice(t-2,t)&&(n=1):i?s==i&&"\\"!=e[t-1]&&(l(t),n=2,i=""):'"'==s||"'"==s?(i=s,r+=1):">"==s?(l(t),n=1):n&&("="==s?(o=e.slice(r,t),n=5,r=t+1):"/"==s&&(n<5||">"==e[t+1])?(l(t),n=0):/\s/.test(s)&&(l(t),n=2,r=t+1))}}(e,((i,o,l)=>{var s;let u=e.slice(i,o),a=t(('"'==(s=l)?u.replace(/(=|\[)(?:&#39;|&apos;|&#x27;)|(?:&#39;|&apos;|&#x27;)(])/g,"$1'$2"):"'"==s?u.replace(/(=|\[)(?:&#34;|&quot;|&#x22;)|(?:&#34;|&quot;|&#x22;)(])/g,'$1"$2'):u).replace(/(&#38;|&amp;|&#x26;)/g,"&"));be(u,a)&&(l=l?"":'"',n+=e.slice(r,i)+l+a+l,r=o)})),n+e.slice(r,e.length)}let Ie=(e,t)=>"function"==typeof e?Le(t,e):Le(e);function Le(e={},t){let{label:n="style",base:o,props:l={},defaults:s,when:u=[]}=e,c={...t?.defaults,...s},f=i(JSON.stringify([n,t?.className,o,l,c,u])),p=d("",o||"",a.c);function d(e,r,i){return R(((t?t.className.replace(/#.+$/,"~"):"")+n+e+f).replace(/[: ,()[\]]/,""),i,r&&_(r))}return Object.defineProperties((function(e){let n,r;Array.isArray(e)&&(n=!0,e=Object.fromEntries(new URLSearchParams(e[1]).entries()));let i={...c,...e},o=n?"":(t?t(i)+" ":"")+p;for(let e in l){let t=l[e],n=i[e];if(n===Object(n)){let i="";r="";for(let e in n){let o=t[n[e]];o&&(i+="@"+e+"-"+n[e],r+=(r&&" ")+("_"==e?o:e+":("+o+")"))}r&&(o+=" "+d("--"+e+"-"+i,r,402653184))}else(r=t[n])&&(o+=" "+d("--"+e+"-"+n,r,402653184))}return u.forEach(((e,t)=>{let n="";for(let t in e[0]){let r=i[t];if(r===Object(r)||""+r!=""+e[0][t]){n="";break}n+=(n&&"_")+t+"-"+r}n&&(r=e[1])&&(o+=" "+d("-"+t+"--"+n,r,536870912))})),o}),Object.getOwnPropertyDescriptors({className:p,defaults:c,selector:"."+r(p)}))}let Te=function(e,...t){return("function"==typeof this?this:Ce)(F(e,t))};export{W as animation,L as apply,re as arbitrary,l as asArray,Se as auto,j as autoDarkColor,ee as colorFromTheme,Fe as consume,U as css,xe as cssom,ae as cx,ce as defineConfig,ke as dom,r as escape,Pe as extract,G as fromMatch,Q as fromTheme,ue as getAutocompleteProvider,je as getSheet,i as hash,s as identity,Re as injectGlobal,_e as inline,ze as install,Ne as keyframes,Z as match,X as matchColor,K as matchTheme,$e as mo,o as mql,u as noop,oe as normalize,ve as observe,_ as parse,te as parseValue,Ee as setup,T as shortcut,Oe as stringify,Ie as style,ne as toCSS,A as toColorValue,Ce as tw,me as twind,Te as tx,Ae as virtual,se as withAutocomplete};export default null;
//# sourceMappingURL=/sm/56e53e36011b7b54f8a520944e152fc72abc2f0fd9345adb0b94796f635be7cf.map