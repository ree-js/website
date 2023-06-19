/* esm.sh - esbuild bundle(highlight.js@11.8.0/lib/core) node production */
var st=Object.create;var be=Object.defineProperty;var rt=Object.getOwnPropertyDescriptor;var ct=Object.getOwnPropertyNames;var ot=Object.getPrototypeOf,at=Object.prototype.hasOwnProperty;var lt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ut=(e,t,i,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let d of ct(t))!at.call(e,d)&&d!==i&&be(e,d,{get:()=>t[d],enumerable:!(l=rt(t,d))||l.enumerable});return e};var ft=(e,t,i)=>(i=e!=null?st(ot(e)):{},ut(t||!e||!e.__esModule?be(i,"default",{value:e,enumerable:!0}):i,e));var je=lt((nn,Pe)=>{function Re(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{let i=e[t],l=typeof i;(l==="object"||l==="function")&&!Object.isFrozen(i)&&Re(i)}),e}var Y=class{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function Se(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function B(e,...t){let i=Object.create(null);for(let l in e)i[l]=e[l];return t.forEach(function(l){for(let d in l)i[d]=l[d]}),i}var gt="</span>",_e=e=>!!e.scope,ht=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){let i=e.split(".");return[`${t}${i.shift()}`,...i.map((l,d)=>`${l}${"_".repeat(d+1)}`)].join(" ")}return`${t}${e}`},ie=class{constructor(t,i){this.buffer="",this.classPrefix=i.classPrefix,t.walk(this)}addText(t){this.buffer+=Se(t)}openNode(t){if(!_e(t))return;let i=ht(t.scope,{prefix:this.classPrefix});this.span(i)}closeNode(t){_e(t)&&(this.buffer+=gt)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}},we=(e={})=>{let t={children:[]};return Object.assign(t,e),t},H=class{constructor(){this.rootNode=we(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){let i=we({scope:t});this.add(i),this.stack.push(i)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,i){return typeof i=="string"?t.addText(i):i.children&&(t.openNode(i),i.children.forEach(l=>this._walk(t,l)),t.closeNode(i)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(i=>typeof i=="string")?t.children=[t.children.join("")]:t.children.forEach(i=>{H._collapse(i)}))}},se=class extends H{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,i){let l=t.root;i&&(l.scope=`language:${i}`),this.add(l)}toHTML(){return new ie(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}};function U(e){return e?typeof e=="string"?e:e.source:null}function Ne(e){return C("(?=",e,")")}function pt(e){return C("(?:",e,")*")}function dt(e){return C("(?:",e,")?")}function C(...e){return e.map(i=>U(i)).join("")}function Et(e){let t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function ce(...e){return"("+(Et(e).capture?"":"?:")+e.map(l=>U(l)).join("|")+")"}function Ae(e){return new RegExp(e.toString()+"|").exec("").length-1}function bt(e,t){let i=e&&e.exec(t);return i&&i.index===0}var _t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function oe(e,{joinWith:t}){let i=0;return e.map(l=>{i+=1;let d=i,_=U(l),c="";for(;_.length>0;){let r=_t.exec(_);if(!r){c+=_;break}c+=_.substring(0,r.index),_=_.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?c+="\\"+String(Number(r[1])+d):(c+=r[0],r[0]==="("&&i++)}return c}).map(l=>`(${l})`).join(t)}var wt=/\b\B/,ke="[a-zA-Z]\\w*",ae="[a-zA-Z_]\\w*",Ie="\\b\\d+(\\.\\d+)?",Te="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Be="\\b(0b[01]+)",xt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Mt=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=C(t,/.*\b/,e.binary,/\b.*/)),B({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(i,l)=>{i.index!==0&&l.ignoreMatch()}},e)},$={begin:"\\\\[\\s\\S]",relevance:0},Ot={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[$]},yt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[$]},Rt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},J=function(e,t,i={}){let l=B({scope:"comment",begin:e,end:t,contains:[]},i);l.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});let d=ce("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return l.contains.push({begin:C(/[ ]+/,"(",d,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),l},St=J("//","$"),Nt=J("/\\*","\\*/"),At=J("#","$"),kt={scope:"number",begin:Ie,relevance:0},It={scope:"number",begin:Te,relevance:0},Tt={scope:"number",begin:Be,relevance:0},Bt={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[$,{begin:/\[/,end:/\]/,relevance:0,contains:[$]}]}]},Dt={scope:"title",begin:ke,relevance:0},vt={scope:"title",begin:ae,relevance:0},Ct={begin:"\\.\\s*"+ae,relevance:0},Lt=function(e){return Object.assign(e,{"on:begin":(t,i)=>{i.data._beginMatch=t[1]},"on:end":(t,i)=>{i.data._beginMatch!==t[1]&&i.ignoreMatch()}})},X=Object.freeze({__proto__:null,MATCH_NOTHING_RE:wt,IDENT_RE:ke,UNDERSCORE_IDENT_RE:ae,NUMBER_RE:Ie,C_NUMBER_RE:Te,BINARY_NUMBER_RE:Be,RE_STARTERS_RE:xt,SHEBANG:Mt,BACKSLASH_ESCAPE:$,APOS_STRING_MODE:Ot,QUOTE_STRING_MODE:yt,PHRASAL_WORDS_MODE:Rt,COMMENT:J,C_LINE_COMMENT_MODE:St,C_BLOCK_COMMENT_MODE:Nt,HASH_COMMENT_MODE:At,NUMBER_MODE:kt,C_NUMBER_MODE:It,BINARY_NUMBER_MODE:Tt,REGEXP_MODE:Bt,TITLE_MODE:Dt,UNDERSCORE_TITLE_MODE:vt,METHOD_GUARD:Ct,END_SAME_AS_BEGIN:Lt});function Pt(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function jt(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Ht(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Pt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Ut(e,t){Array.isArray(e.illegal)&&(e.illegal=ce(...e.illegal))}function $t(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Gt(e,t){e.relevance===void 0&&(e.relevance=1)}var Wt=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");let i=Object.assign({},e);Object.keys(e).forEach(l=>{delete e[l]}),e.keywords=i.keywords,e.begin=C(i.beforeMatch,Ne(i.begin)),e.starts={relevance:0,contains:[Object.assign(i,{endsParent:!0})]},e.relevance=0,delete i.beforeMatch},Kt=["of","and","for","in","not","or","if","then","parent","list","value"],zt="keyword";function De(e,t,i=zt){let l=Object.create(null);return typeof e=="string"?d(i,e.split(" ")):Array.isArray(e)?d(i,e):Object.keys(e).forEach(function(_){Object.assign(l,De(e[_],t,_))}),l;function d(_,c){t&&(c=c.map(r=>r.toLowerCase())),c.forEach(function(r){let u=r.split("|");l[u[0]]=[_,Ft(u[0],u[1])]})}}function Ft(e,t){return t?Number(t):Xt(e)?0:1}function Xt(e){return Kt.includes(e.toLowerCase())}var xe={},v=e=>{console.error(e)},Me=(e,...t)=>{console.log(`WARN: ${e}`,...t)},L=(e,t)=>{xe[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),xe[`${e}/${t}`]=!0)},Z=new Error;function ve(e,t,{key:i}){let l=0,d=e[i],_={},c={};for(let r=1;r<=t.length;r++)c[r+l]=d[r],_[r+l]=!0,l+=Ae(t[r-1]);e[i]=c,e[i]._emit=_,e[i]._multi=!0}function Yt(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw v("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Z;if(typeof e.beginScope!="object"||e.beginScope===null)throw v("beginScope must be object"),Z;ve(e,e.begin,{key:"beginScope"}),e.begin=oe(e.begin,{joinWith:""})}}function Zt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw v("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Z;if(typeof e.endScope!="object"||e.endScope===null)throw v("endScope must be object"),Z;ve(e,e.end,{key:"endScope"}),e.end=oe(e.end,{joinWith:""})}}function Jt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Vt(e){Jt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Yt(e),Zt(e)}function qt(e){function t(c,r){return new RegExp(U(c),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class i{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,r]),this.matchAt+=Ae(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);let r=this.regexes.map(u=>u[1]);this.matcherRe=t(oe(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;let u=this.matcherRe.exec(r);if(!u)return null;let M=u.findIndex((j,V)=>V>0&&j!==void 0),w=this.matchIndexes[M];return u.splice(0,M),Object.assign(u,w)}}class l{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];let u=new i;return this.rules.slice(r).forEach(([M,w])=>u.addRule(M,w)),u.compile(),this.multiRegexes[r]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,u){this.rules.push([r,u]),u.type==="begin"&&this.count++}exec(r){let u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let M=u.exec(r);if(this.resumingScanAtSamePosition()&&!(M&&M.index===this.lastIndex)){let w=this.getMatcher(0);w.lastIndex=this.lastIndex+1,M=w.exec(r)}return M&&(this.regexIndex+=M.position+1,this.regexIndex===this.count&&this.considerAll()),M}}function d(c){let r=new l;return c.contains.forEach(u=>r.addRule(u.begin,{rule:u,type:"begin"})),c.terminatorEnd&&r.addRule(c.terminatorEnd,{type:"end"}),c.illegal&&r.addRule(c.illegal,{type:"illegal"}),r}function _(c,r){let u=c;if(c.isCompiled)return u;[jt,$t,Vt,Wt].forEach(w=>w(c,r)),e.compilerExtensions.forEach(w=>w(c,r)),c.__beforeBegin=null,[Ht,Ut,Gt].forEach(w=>w(c,r)),c.isCompiled=!0;let M=null;return typeof c.keywords=="object"&&c.keywords.$pattern&&(c.keywords=Object.assign({},c.keywords),M=c.keywords.$pattern,delete c.keywords.$pattern),M=M||/\w+/,c.keywords&&(c.keywords=De(c.keywords,e.case_insensitive)),u.keywordPatternRe=t(M,!0),r&&(c.begin||(c.begin=/\B|\b/),u.beginRe=t(u.begin),!c.end&&!c.endsWithParent&&(c.end=/\B|\b/),c.end&&(u.endRe=t(u.end)),u.terminatorEnd=U(u.end)||"",c.endsWithParent&&r.terminatorEnd&&(u.terminatorEnd+=(c.end?"|":"")+r.terminatorEnd)),c.illegal&&(u.illegalRe=t(c.illegal)),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map(function(w){return Qt(w==="self"?c:w)})),c.contains.forEach(function(w){_(w,u)}),c.starts&&_(c.starts,r),u.matcher=d(u),u}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=B(e.classNameAliases||{}),_(e)}function Ce(e){return e?e.endsWithParent||Ce(e.starts):!1}function Qt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return B(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Ce(e)?B(e,{starts:e.starts?B(e.starts):null}):Object.isFrozen(e)?B(e):e}var mt="11.8.0",re=class extends Error{constructor(t,i){super(t),this.name="HTMLInjectionError",this.html=i}},ne=Se,Oe=B,ye=Symbol("nomatch"),en=7,Le=function(e){let t=Object.create(null),i=Object.create(null),l=[],d=!0,_="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]},r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:se};function u(n){return r.noHighlightRe.test(n)}function M(n){let a=n.className+" ";a+=n.parentNode?n.parentNode.className:"";let h=r.languageDetectRe.exec(a);if(h){let E=I(h[1]);return E||(Me(_.replace("{}",h[1])),Me("Falling back to no-highlight mode for this block.",n)),E?h[1]:"no-highlight"}return a.split(/\s+/).find(E=>u(E)||I(E))}function w(n,a,h){let E="",x="";typeof a=="object"?(E=n,h=a.ignoreIllegals,x=a.language):(L("10.7.0","highlight(lang, code, ...args) has been deprecated."),L("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),x=n,E=a),h===void 0&&(h=!0);let S={code:E,language:x};W("before:highlight",S);let T=S.result?S.result:j(S.language,S.code,h);return T.code=S.code,W("after:highlight",T),T}function j(n,a,h,E){let x=Object.create(null);function S(s,o){return s.keywords[o]}function T(){if(!f.keywords){O.addText(b);return}let s=0;f.keywordPatternRe.lastIndex=0;let o=f.keywordPatternRe.exec(b),g="";for(;o;){g+=b.substring(s,o.index);let p=A.case_insensitive?o[0].toLowerCase():o[0],y=S(f,p);if(y){let[k,nt]=y;if(O.addText(g),g="",x[p]=(x[p]||0)+1,x[p]<=en&&(F+=nt),k.startsWith("_"))g+=o[0];else{let it=A.classNameAliases[k]||k;N(o[0],it)}}else g+=o[0];s=f.keywordPatternRe.lastIndex,o=f.keywordPatternRe.exec(b)}g+=b.substring(s),O.addText(g)}function K(){if(b==="")return;let s=null;if(typeof f.subLanguage=="string"){if(!t[f.subLanguage]){O.addText(b);return}s=j(f.subLanguage,b,!0,Ee[f.subLanguage]),Ee[f.subLanguage]=s._top}else s=q(b,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(F+=s.relevance),O.__addSublanguage(s._emitter,s.language)}function R(){f.subLanguage!=null?K():T(),b=""}function N(s,o){s!==""&&(O.startScope(o),O.addText(s),O.endScope())}function ge(s,o){let g=1,p=o.length-1;for(;g<=p;){if(!s._emit[g]){g++;continue}let y=A.classNameAliases[s[g]]||s[g],k=o[g];y?N(k,y):(b=k,T(),b=""),g++}}function he(s,o){return s.scope&&typeof s.scope=="string"&&O.openNode(A.classNameAliases[s.scope]||s.scope),s.beginScope&&(s.beginScope._wrap?(N(b,A.classNameAliases[s.beginScope._wrap]||s.beginScope._wrap),b=""):s.beginScope._multi&&(ge(s.beginScope,o),b="")),f=Object.create(s,{parent:{value:f}}),f}function pe(s,o,g){let p=bt(s.endRe,g);if(p){if(s["on:end"]){let y=new Y(s);s["on:end"](o,y),y.isMatchIgnored&&(p=!1)}if(p){for(;s.endsParent&&s.parent;)s=s.parent;return s}}if(s.endsWithParent)return pe(s.parent,o,g)}function qe(s){return f.matcher.regexIndex===0?(b+=s[0],1):(te=!0,0)}function Qe(s){let o=s[0],g=s.rule,p=new Y(g),y=[g.__beforeBegin,g["on:begin"]];for(let k of y)if(k&&(k(s,p),p.isMatchIgnored))return qe(o);return g.skip?b+=o:(g.excludeBegin&&(b+=o),R(),!g.returnBegin&&!g.excludeBegin&&(b=o)),he(g,s),g.returnBegin?0:o.length}function me(s){let o=s[0],g=a.substring(s.index),p=pe(f,s,g);if(!p)return ye;let y=f;f.endScope&&f.endScope._wrap?(R(),N(o,f.endScope._wrap)):f.endScope&&f.endScope._multi?(R(),ge(f.endScope,s)):y.skip?b+=o:(y.returnEnd||y.excludeEnd||(b+=o),R(),y.excludeEnd&&(b=o));do f.scope&&O.closeNode(),!f.skip&&!f.subLanguage&&(F+=f.relevance),f=f.parent;while(f!==p.parent);return p.starts&&he(p.starts,s),y.returnEnd?0:o.length}function et(){let s=[];for(let o=f;o!==A;o=o.parent)o.scope&&s.unshift(o.scope);s.forEach(o=>O.openNode(o))}let z={};function de(s,o){let g=o&&o[0];if(b+=s,g==null)return R(),0;if(z.type==="begin"&&o.type==="end"&&z.index===o.index&&g===""){if(b+=a.slice(o.index,o.index+1),!d){let p=new Error(`0 width match regex (${n})`);throw p.languageName=n,p.badRule=z.rule,p}return 1}if(z=o,o.type==="begin")return Qe(o);if(o.type==="illegal"&&!h){let p=new Error('Illegal lexeme "'+g+'" for mode "'+(f.scope||"<unnamed>")+'"');throw p.mode=f,p}else if(o.type==="end"){let p=me(o);if(p!==ye)return p}if(o.type==="illegal"&&g==="")return 1;if(ee>1e5&&ee>o.index*3)throw new Error("potential infinite loop, way more iterations than matches");return b+=g,g.length}let A=I(n);if(!A)throw v(_.replace("{}",n)),new Error('Unknown language: "'+n+'"');let tt=qt(A),m="",f=E||tt,Ee={},O=new r.__emitter(r);et();let b="",F=0,D=0,ee=0,te=!1;try{if(A.__emitTokens)A.__emitTokens(a,O);else{for(f.matcher.considerAll();;){ee++,te?te=!1:f.matcher.considerAll(),f.matcher.lastIndex=D;let s=f.matcher.exec(a);if(!s)break;let o=a.substring(D,s.index),g=de(o,s);D=s.index+g}de(a.substring(D))}return O.finalize(),m=O.toHTML(),{language:n,value:m,relevance:F,illegal:!1,_emitter:O,_top:f}}catch(s){if(s.message&&s.message.includes("Illegal"))return{language:n,value:ne(a),illegal:!0,relevance:0,_illegalBy:{message:s.message,index:D,context:a.slice(D-100,D+100),mode:s.mode,resultSoFar:m},_emitter:O};if(d)return{language:n,value:ne(a),illegal:!1,relevance:0,errorRaised:s,_emitter:O,_top:f};throw s}}function V(n){let a={value:ne(n),illegal:!1,relevance:0,_top:c,_emitter:new r.__emitter(r)};return a._emitter.addText(n),a}function q(n,a){a=a||r.languages||Object.keys(t);let h=V(n),E=a.filter(I).filter(fe).map(R=>j(R,n,!1));E.unshift(h);let x=E.sort((R,N)=>{if(R.relevance!==N.relevance)return N.relevance-R.relevance;if(R.language&&N.language){if(I(R.language).supersetOf===N.language)return 1;if(I(N.language).supersetOf===R.language)return-1}return 0}),[S,T]=x,K=S;return K.secondBest=T,K}function Ue(n,a,h){let E=a&&i[a]||h;n.classList.add("hljs"),n.classList.add(`language-${E}`)}function Q(n){let a=null,h=M(n);if(u(h))return;if(W("before:highlightElement",{el:n,language:h}),n.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(n)),r.throwUnescapedHTML))throw new re("One of your code blocks includes unescaped HTML.",n.innerHTML);a=n;let E=a.textContent,x=h?w(E,{language:h,ignoreIllegals:!0}):q(E);n.innerHTML=x.value,Ue(n,h,x.language),n.result={language:x.language,re:x.relevance,relevance:x.relevance},x.secondBest&&(n.secondBest={language:x.secondBest.language,relevance:x.secondBest.relevance}),W("after:highlightElement",{el:n,result:x,text:E})}function $e(n){r=Oe(r,n)}let Ge=()=>{G(),L("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function We(){G(),L("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let le=!1;function G(){if(document.readyState==="loading"){le=!0;return}document.querySelectorAll(r.cssSelector).forEach(Q)}function Ke(){le&&G()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Ke,!1);function ze(n,a){let h=null;try{h=a(e)}catch(E){if(v("Language definition for '{}' could not be registered.".replace("{}",n)),d)v(E);else throw E;h=c}h.name||(h.name=n),t[n]=h,h.rawDefinition=a.bind(null,e),h.aliases&&ue(h.aliases,{languageName:n})}function Fe(n){delete t[n];for(let a of Object.keys(i))i[a]===n&&delete i[a]}function Xe(){return Object.keys(t)}function I(n){return n=(n||"").toLowerCase(),t[n]||t[i[n]]}function ue(n,{languageName:a}){typeof n=="string"&&(n=[n]),n.forEach(h=>{i[h.toLowerCase()]=a})}function fe(n){let a=I(n);return a&&!a.disableAutodetect}function Ye(n){n["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=a=>{n["before:highlightBlock"](Object.assign({block:a.el},a))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=a=>{n["after:highlightBlock"](Object.assign({block:a.el},a))})}function Ze(n){Ye(n),l.push(n)}function Je(n){let a=l.indexOf(n);a!==-1&&l.splice(a,1)}function W(n,a){let h=n;l.forEach(function(E){E[h]&&E[h](a)})}function Ve(n){return L("10.7.0","highlightBlock will be removed entirely in v12.0"),L("10.7.0","Please use highlightElement now."),Q(n)}Object.assign(e,{highlight:w,highlightAuto:q,highlightAll:G,highlightElement:Q,highlightBlock:Ve,configure:$e,initHighlighting:Ge,initHighlightingOnLoad:We,registerLanguage:ze,unregisterLanguage:Fe,listLanguages:Xe,getLanguage:I,registerAliases:ue,autoDetection:fe,inherit:Oe,addPlugin:Ze,removePlugin:Je}),e.debugMode=function(){d=!1},e.safeMode=function(){d=!0},e.versionString=mt,e.regex={concat:C,lookahead:Ne,either:ce,optional:dt,anyNumberOfTimes:pt};for(let n in X)typeof X[n]=="object"&&Re(X[n]);return Object.assign(e,X),e},P=Le({});P.newInstance=()=>Le({});Pe.exports=P;P.HighlightJS=P;P.default=P});var He=ft(je(),1);var sn=He.default;var export_HighlightJS=He.default;export{export_HighlightJS as HighlightJS,sn as default};
//# sourceMappingURL=core.js.map