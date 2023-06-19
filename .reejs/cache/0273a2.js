/* esm.sh - esbuild bundle(is-buffer@2.0.5) node production */
var p=Object.create;var s=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var y=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),g=(r,t)=>{for(var u in t)s(r,u,{get:t[u],enumerable:!0})},o=(r,t,u,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of m(t))!B.call(r,n)&&n!==u&&s(r,n,{get:()=>t[n],enumerable:!(l=a(t,n))||l.enumerable});return r},f=(r,t,u)=>(o(r,t,"default"),u&&o(u,t,"default")),i=(r,t,u)=>(u=r!=null?p(x(r)):{},o(t||!r||!r.__esModule?s(u,"default",{value:r,enumerable:!0}):u,r));var c=y((w,d)=>{d.exports=function(t){return t!=null&&t.constructor!=null&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}});var e={};g(e,{default:()=>q});var h=i(c());f(e,i(c()));var{default:_,...k}=h,q=_!==void 0?_:k;export{q as default};
/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=is-buffer.mjs.map