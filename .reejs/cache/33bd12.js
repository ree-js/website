/* esm.sh - esbuild bundle(ts-interface-checker@0.1.13) node production */
var fe=Object.create;var L=Object.defineProperty;var ce=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var le=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty;var I=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ye=(t,e)=>{for(var r in e)L(t,r,{get:e[r],enumerable:!0})},N=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of pe(e))!he.call(t,i)&&i!==r&&L(t,i,{get:()=>e[i],enumerable:!(n=ce(e,i))||n.enumerable});return t},C=(t,e,r)=>(N(t,e,"default"),r&&N(r,e,"default")),J=(t,e,r)=>(r=t!=null?fe(le(t)):{},N(e||!t||!t.__esModule?L(r,"default",{value:t,enumerable:!0}):r,t));var j=I(w=>{"use strict";var me=w&&w.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)i.hasOwnProperty(o)&&(n[o]=i[o])},t(e,r)};return function(e,r){t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(w,"__esModule",{value:!0});w.DetailContext=w.NoopContext=w.VError=void 0;var z=function(t){me(e,t);function e(r,n){var i=t.call(this,n)||this;return i.path=r,Object.setPrototypeOf(i,e.prototype),i}return e}(Error);w.VError=z;var ve=function(){function t(){}return t.prototype.fail=function(e,r,n){return!1},t.prototype.unionResolver=function(){return this},t.prototype.createContext=function(){return this},t.prototype.resolveUnion=function(e){},t}();w.NoopContext=ve;var G=function(){function t(){this._propNames=[""],this._messages=[null],this._score=0}return t.prototype.fail=function(e,r,n){return this._propNames.push(e),this._messages.push(r),this._score+=n,!1},t.prototype.unionResolver=function(){return new ge},t.prototype.resolveUnion=function(e){for(var r,n,i=e,o=null,a=0,s=i.contexts;a<s.length;a++){var p=s[a];(!o||p._score>=o._score)&&(o=p)}o&&o._score>0&&((r=this._propNames).push.apply(r,o._propNames),(n=this._messages).push.apply(n,o._messages))},t.prototype.getError=function(e){for(var r=[],n=this._propNames.length-1;n>=0;n--){var i=this._propNames[n];e+=typeof i=="number"?"["+i+"]":i?"."+i:"";var o=this._messages[n];o&&r.push(e+" "+o)}return new z(e,r.join("; "))},t.prototype.getErrorDetail=function(e){for(var r=[],n=this._propNames.length-1;n>=0;n--){var i=this._propNames[n];e+=typeof i=="number"?"["+i+"]":i?"."+i:"";var o=this._messages[n];o&&r.push({path:e,message:o})}for(var a=null,n=r.length-1;n>=0;n--)a&&(r[n].nested=[a]),a=r[n];return a},t}();w.DetailContext=G;var ge=function(){function t(){this.contexts=[]}return t.prototype.createContext=function(){var e=new G;return this.contexts.push(e),e},t}()});var D=I(u=>{"use strict";var g=u&&u.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)i.hasOwnProperty(o)&&(n[o]=i[o])},t(e,r)};return function(e,r){t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(u,"__esModule",{value:!0});u.basicTypes=u.BasicType=u.TParamList=u.TParam=u.param=u.TFunc=u.func=u.TProp=u.TOptional=u.opt=u.TIface=u.iface=u.TEnumLiteral=u.enumlit=u.TEnumType=u.enumtype=u.TIntersection=u.intersection=u.TUnion=u.union=u.TTuple=u.tuple=u.TArray=u.array=u.TLiteral=u.lit=u.TName=u.name=u.TType=void 0;var Q=j(),v=function(){function t(){}return t}();u.TType=v;function k(t){return typeof t=="string"?W(t):t}function M(t,e){var r=t[e];if(!r)throw new Error("Unknown type "+e);return r}function W(t){return new U(t)}u.name=W;var U=function(t){g(e,t);function e(r){var n=t.call(this)||this;return n.name=r,n._failMsg="is not a "+r,n}return e.prototype.getChecker=function(r,n,i){var o=this,a=M(r,this.name),s=a.getChecker(r,n,i);return a instanceof y||a instanceof e?s:function(p,l){return s(p,l)?!0:l.fail(null,o._failMsg,0)}},e}(v);u.TName=U;function Te(t){return new B(t)}u.lit=Te;var B=function(t){g(e,t);function e(r){var n=t.call(this)||this;return n.value=r,n.name=JSON.stringify(r),n._failMsg="is not "+n.name,n}return e.prototype.getChecker=function(r,n){var i=this;return function(o,a){return o===i.value?!0:a.fail(null,i._failMsg,-1)}},e}(v);u.TLiteral=B;function de(t){return new X(k(t))}u.array=de;var X=function(t){g(e,t);function e(r){var n=t.call(this)||this;return n.ttype=r,n}return e.prototype.getChecker=function(r,n){var i=this.ttype.getChecker(r,n);return function(o,a){if(!Array.isArray(o))return a.fail(null,"is not an array",0);for(var s=0;s<o.length;s++){var p=i(o[s],a);if(!p)return a.fail(s,null,1)}return!0}},e}(v);u.TArray=X;function be(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Y(t.map(function(r){return k(r)}))}u.tuple=be;var Y=function(t){g(e,t);function e(r){var n=t.call(this)||this;return n.ttypes=r,n}return e.prototype.getChecker=function(r,n){var i=this.ttypes.map(function(a){return a.getChecker(r,n)}),o=function(a,s){if(!Array.isArray(a))return s.fail(null,"is not an array",0);for(var p=0;p<i.length;p++){var l=i[p](a[p],s);if(!l)return s.fail(p,null,1)}return!0};return n?function(a,s){return o(a,s)?a.length<=i.length?!0:s.fail(i.length,"is extraneous",2):!1}:o},e}(v);u.TTuple=Y;function we(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Z(t.map(function(r){return k(r)}))}u.union=we;var Z=function(t){g(e,t);function e(r){var n=t.call(this)||this;n.ttypes=r;var i=r.map(function(a){return a instanceof U||a instanceof B?a.name:null}).filter(function(a){return a}),o=r.length-i.length;return i.length?(o>0&&i.push(o+" more"),n._failMsg="is none of "+i.join(", ")):n._failMsg="is none of "+o+" types",n}return e.prototype.getChecker=function(r,n){var i=this,o=this.ttypes.map(function(a){return a.getChecker(r,n)});return function(a,s){for(var p=s.unionResolver(),l=0;l<o.length;l++){var m=o[l](a,p.createContext());if(m)return!0}return s.resolveUnion(p),s.fail(null,i._failMsg,0)}},e}(v);u.TUnion=Z;function Pe(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new $(t.map(function(r){return k(r)}))}u.intersection=Pe;var $=function(t){g(e,t);function e(r){var n=t.call(this)||this;return n.ttypes=r,n}return e.prototype.getChecker=function(r,n){var i=new Set,o=this.ttypes.map(function(a){return a.getChecker(r,n,i)});return function(a,s){var p=o.every(function(l){return l(a,s)});return p?!0:s.fail(null,null,0)}},e}(v);u.TIntersection=$;function Ce(t){return new R(t)}u.enumtype=Ce;var R=function(t){g(e,t);function e(r){var n=t.call(this)||this;return n.members=r,n.validValues=new Set,n._failMsg="is not a valid enum value",n.validValues=new Set(Object.keys(r).map(function(i){return r[i]})),n}return e.prototype.getChecker=function(r,n){var i=this;return function(o,a){return i.validValues.has(o)?!0:a.fail(null,i._failMsg,0)}},e}(v);u.TEnumType=R;function ke(t,e){return new ee(t,e)}u.enumlit=ke;var ee=function(t){g(e,t);function e(r,n){var i=t.call(this)||this;return i.enumName=r,i.prop=n,i._failMsg="is not "+r+"."+n,i}return e.prototype.getChecker=function(r,n){var i=this,o=M(r,this.enumName);if(!(o instanceof R))throw new Error("Type "+this.enumName+" used in enumlit is not an enum type");var a=o.members[this.prop];if(!o.members.hasOwnProperty(this.prop))throw new Error("Unknown value "+this.enumName+"."+this.prop+" used in enumlit");return function(s,p){return s===a?!0:p.fail(null,i._failMsg,-1)}},e}(v);u.TEnumLiteral=ee;function _e(t){return Object.keys(t).map(function(e){return Oe(e,t[e])})}function Oe(t,e){return e instanceof V?new x(t,e.ttype,!0):new x(t,k(e),!1)}function je(t,e){return new te(t,_e(e))}u.iface=je;var te=function(t){g(e,t);function e(r,n){var i=t.call(this)||this;return i.bases=r,i.props=n,i.propSet=new Set(n.map(function(o){return o.name})),i}return e.prototype.getChecker=function(r,n,i){var o=this,a=this.bases.map(function(h){return M(r,h).getChecker(r,n)}),s=this.props.map(function(h){return h.ttype.getChecker(r,n)}),p=new Q.NoopContext,l=this.props.map(function(h,T){return!h.isOpt&&!s[T](void 0,p)}),m=function(h,T){if(typeof h!="object"||h===null)return T.fail(null,"is not an object",0);for(var d=0;d<a.length;d++)if(!a[d](h,T))return!1;for(var d=0;d<s.length;d++){var A=o.props[d].name,q=h[A];if(q===void 0){if(l[d])return T.fail(A,"is missing",1)}else{var se=s[d](q,T);if(!se)return T.fail(A,null,1)}}return!0};if(!n)return m;var b=this.propSet;return i&&(this.propSet.forEach(function(h){return i.add(h)}),b=i),function(h,T){if(!m(h,T))return!1;for(var d in h)if(!b.has(d))return T.fail(d,"is extraneous",2);return!0}},e}(v);u.TIface=te;function Ee(t){return new V(k(t))}u.opt=Ee;var V=function(t){g(e,t);function e(r){var n=t.call(this)||this;return n.ttype=r,n}return e.prototype.getChecker=function(r,n){var i=this.ttype.getChecker(r,n);return function(o,a){return o===void 0||i(o,a)}},e}(v);u.TOptional=V;var x=function(){function t(e,r,n){this.name=e,this.ttype=r,this.isOpt=n}return t}();u.TProp=x;function Ae(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new re(new ie(e),k(t))}u.func=Ae;var re=function(t){g(e,t);function e(r,n){var i=t.call(this)||this;return i.paramList=r,i.result=n,i}return e.prototype.getChecker=function(r,n){return function(i,o){return typeof i=="function"?!0:o.fail(null,"is not a function",0)}},e}(v);u.TFunc=re;function Ne(t,e,r){return new ne(t,k(e),!!r)}u.param=Ne;var ne=function(){function t(e,r,n){this.name=e,this.ttype=r,this.isOpt=n}return t}();u.TParam=ne;var ie=function(t){g(e,t);function e(r){var n=t.call(this)||this;return n.params=r,n}return e.prototype.getChecker=function(r,n){var i=this,o=this.params.map(function(l){return l.ttype.getChecker(r,n)}),a=new Q.NoopContext,s=this.params.map(function(l,m){return!l.isOpt&&!o[m](void 0,a)}),p=function(l,m){if(!Array.isArray(l))return m.fail(null,"is not an array",0);for(var b=0;b<o.length;b++){var h=i.params[b];if(l[b]===void 0){if(s[b])return m.fail(h.name,"is missing",1)}else{var T=o[b](l[b],m);if(!T)return m.fail(h.name,null,1)}}return!0};return n?function(l,m){return p(l,m)?l.length<=o.length?!0:m.fail(o.length,"is extraneous",2):!1}:p},e}(v);u.TParamList=ie;var y=function(t){g(e,t);function e(r,n){var i=t.call(this)||this;return i.validator=r,i.message=n,i}return e.prototype.getChecker=function(r,n){var i=this;return function(o,a){return i.validator(o)?!0:a.fail(null,i.message,0)}},e}(v);u.BasicType=y;u.basicTypes={any:new y(function(t){return!0},"is invalid"),number:new y(function(t){return typeof t=="number"},"is not a number"),object:new y(function(t){return typeof t=="object"&&t},"is not an object"),boolean:new y(function(t){return typeof t=="boolean"},"is not a boolean"),string:new y(function(t){return typeof t=="string"},"is not a string"),symbol:new y(function(t){return typeof t=="symbol"},"is not a symbol"),void:new y(function(t){return t==null},"is not void"),undefined:new y(function(t){return t===void 0},"is not undefined"),null:new y(function(t){return t===null},"is not null"),never:new y(function(t){return!1},"is unexpected"),Date:new y(H("[object Date]"),"is not a Date"),RegExp:new y(H("[object RegExp]"),"is not a RegExp")};var Le=Object.prototype.toString;function H(t){return function(e){return typeof e=="object"&&e&&Le.call(e)===t}}typeof Buffer<"u"&&(u.basicTypes.Buffer=new y(function(t){return Buffer.isBuffer(t)},"is not a Buffer"));var Ie=function(t){u.basicTypes[t.name]=new y(function(e){return e instanceof t},"is not a "+t.name)};for(E=0,S=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,ArrayBuffer];E<S.length;E++)K=S[E],Ie(K);var K,E,S});var F=I(f=>{"use strict";var Se=f&&f.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n};Object.defineProperty(f,"__esModule",{value:!0});f.Checker=f.createCheckers=void 0;var O=D(),_=j(),c=D();Object.defineProperty(f,"TArray",{enumerable:!0,get:function(){return c.TArray}});Object.defineProperty(f,"TEnumType",{enumerable:!0,get:function(){return c.TEnumType}});Object.defineProperty(f,"TEnumLiteral",{enumerable:!0,get:function(){return c.TEnumLiteral}});Object.defineProperty(f,"TFunc",{enumerable:!0,get:function(){return c.TFunc}});Object.defineProperty(f,"TIface",{enumerable:!0,get:function(){return c.TIface}});Object.defineProperty(f,"TLiteral",{enumerable:!0,get:function(){return c.TLiteral}});Object.defineProperty(f,"TName",{enumerable:!0,get:function(){return c.TName}});Object.defineProperty(f,"TOptional",{enumerable:!0,get:function(){return c.TOptional}});Object.defineProperty(f,"TParam",{enumerable:!0,get:function(){return c.TParam}});Object.defineProperty(f,"TParamList",{enumerable:!0,get:function(){return c.TParamList}});Object.defineProperty(f,"TProp",{enumerable:!0,get:function(){return c.TProp}});Object.defineProperty(f,"TTuple",{enumerable:!0,get:function(){return c.TTuple}});Object.defineProperty(f,"TType",{enumerable:!0,get:function(){return c.TType}});Object.defineProperty(f,"TUnion",{enumerable:!0,get:function(){return c.TUnion}});Object.defineProperty(f,"TIntersection",{enumerable:!0,get:function(){return c.TIntersection}});Object.defineProperty(f,"array",{enumerable:!0,get:function(){return c.array}});Object.defineProperty(f,"enumlit",{enumerable:!0,get:function(){return c.enumlit}});Object.defineProperty(f,"enumtype",{enumerable:!0,get:function(){return c.enumtype}});Object.defineProperty(f,"func",{enumerable:!0,get:function(){return c.func}});Object.defineProperty(f,"iface",{enumerable:!0,get:function(){return c.iface}});Object.defineProperty(f,"lit",{enumerable:!0,get:function(){return c.lit}});Object.defineProperty(f,"name",{enumerable:!0,get:function(){return c.name}});Object.defineProperty(f,"opt",{enumerable:!0,get:function(){return c.opt}});Object.defineProperty(f,"param",{enumerable:!0,get:function(){return c.param}});Object.defineProperty(f,"tuple",{enumerable:!0,get:function(){return c.tuple}});Object.defineProperty(f,"union",{enumerable:!0,get:function(){return c.union}});Object.defineProperty(f,"intersection",{enumerable:!0,get:function(){return c.intersection}});Object.defineProperty(f,"BasicType",{enumerable:!0,get:function(){return c.BasicType}});var xe=j();Object.defineProperty(f,"VError",{enumerable:!0,get:function(){return xe.VError}});function Me(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r=Object.assign.apply(Object,Se([{},O.basicTypes],t)),n={},i=0,o=t;i<o.length;i++)for(var a=o[i],s=0,p=Object.keys(a);s<p.length;s++){var l=p[s];n[l]=new oe(r,a[l])}return n}f.createCheckers=Me;var oe=function(){function t(e,r,n){if(n===void 0&&(n="value"),this.suite=e,this.ttype=r,this._path=n,this.props=new Map,r instanceof O.TIface)for(var i=0,o=r.props;i<o.length;i++){var a=o[i];this.props.set(a.name,a.ttype)}this.checkerPlain=this.ttype.getChecker(e,!1),this.checkerStrict=this.ttype.getChecker(e,!0)}return t.prototype.setReportedPath=function(e){this._path=e},t.prototype.check=function(e){return this._doCheck(this.checkerPlain,e)},t.prototype.test=function(e){return this.checkerPlain(e,new _.NoopContext)},t.prototype.validate=function(e){return this._doValidate(this.checkerPlain,e)},t.prototype.strictCheck=function(e){return this._doCheck(this.checkerStrict,e)},t.prototype.strictTest=function(e){return this.checkerStrict(e,new _.NoopContext)},t.prototype.strictValidate=function(e){return this._doValidate(this.checkerStrict,e)},t.prototype.getProp=function(e){var r=this.props.get(e);if(!r)throw new Error("Type has no property "+e);return new t(this.suite,r,this._path+"."+e)},t.prototype.methodArgs=function(e){var r=this._getMethod(e);return new t(this.suite,r.paramList)},t.prototype.methodResult=function(e){var r=this._getMethod(e);return new t(this.suite,r.result)},t.prototype.getArgs=function(){if(!(this.ttype instanceof O.TFunc))throw new Error("getArgs() applied to non-function");return new t(this.suite,this.ttype.paramList)},t.prototype.getResult=function(){if(!(this.ttype instanceof O.TFunc))throw new Error("getResult() applied to non-function");return new t(this.suite,this.ttype.result)},t.prototype.getType=function(){return this.ttype},t.prototype._doCheck=function(e,r){var n=new _.NoopContext;if(!e(r,n)){var i=new _.DetailContext;throw e(r,i),i.getError(this._path)}},t.prototype._doValidate=function(e,r){var n=new _.NoopContext;if(e(r,n))return null;var i=new _.DetailContext;return e(r,i),i.getErrorDetail(this._path)},t.prototype._getMethod=function(e){var r=this.props.get(e);if(!r)throw new Error("Type has no property "+e);if(!(r instanceof O.TFunc))throw new Error("Property "+e+" is not a method");return r},t}();f.Checker=oe});var P={};ye(P,{BasicType:()=>lt,Checker:()=>Be,TArray:()=>Ve,TEnumLiteral:()=>Fe,TEnumType:()=>De,TFunc:()=>qe,TIface:()=>Je,TIntersection:()=>$e,TLiteral:()=>ze,TName:()=>Ge,TOptional:()=>He,TParam:()=>Ke,TParamList:()=>Qe,TProp:()=>We,TTuple:()=>Xe,TType:()=>Ye,TUnion:()=>Ze,VError:()=>ht,__esModule:()=>Ue,array:()=>et,createCheckers:()=>Re,default:()=>mt,enumlit:()=>tt,enumtype:()=>rt,func:()=>nt,iface:()=>it,intersection:()=>pt,lit:()=>ot,name:()=>ut,opt:()=>at,param:()=>st,tuple:()=>ft,union:()=>ct});var ae=J(F());C(P,J(F()));var Ue=!0,{Checker:Be,createCheckers:Re,TArray:Ve,TEnumType:De,TEnumLiteral:Fe,TFunc:qe,TIface:Je,TLiteral:ze,TName:Ge,TOptional:He,TParam:Ke,TParamList:Qe,TProp:We,TTuple:Xe,TType:Ye,TUnion:Ze,TIntersection:$e,array:et,enumlit:tt,enumtype:rt,func:nt,iface:it,lit:ot,name:ut,opt:at,param:st,tuple:ft,union:ct,intersection:pt,BasicType:lt,VError:ht}=ae,{default:ue,...yt}=ae,mt=ue!==void 0?ue:yt;export{lt as BasicType,Be as Checker,Ve as TArray,Fe as TEnumLiteral,De as TEnumType,qe as TFunc,Je as TIface,$e as TIntersection,ze as TLiteral,Ge as TName,He as TOptional,Ke as TParam,Qe as TParamList,We as TProp,Xe as TTuple,Ye as TType,Ze as TUnion,ht as VError,Ue as __esModule,et as array,Re as createCheckers,mt as default,tt as enumlit,rt as enumtype,nt as func,it as iface,pt as intersection,ot as lit,ut as name,at as opt,st as param,ft as tuple,ct as union};
//# sourceMappingURL=ts-interface-checker.mjs.map