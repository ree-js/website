/* esm.sh - esbuild bundle(bl@5.1.0) node production */
import __1$ from "node:buffer";import * as _2$ from "./722025.js";const __2$ = _2$.default??_2$;import { Duplex as __3$Duplex } from "./576cde.js";var k=Object.create;var m=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var w=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),M=(e,t)=>{for(var i in t)m(e,i,{get:t[i],enumerable:!0})},d=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let f of D(t))!F.call(e,f)&&f!==i&&m(e,f,{get:()=>t[f],enumerable:!(n=q(t,f))||n.enumerable});return e},y=(e,t,i)=>(d(e,t,"default"),i&&d(i,t,"default")),v=(e,t,i)=>(i=e!=null?k(j(e)):{},d(t||!e||!e.__esModule?m(i,"default",{value:e,enumerable:!0}):i,e));var A=E((J,U)=>{"use strict";var{Buffer:h}=__1$,x=Symbol.for("BufferList");function r(e){if(!(this instanceof r))return new r(e);r._init.call(this,e)}r._init=function(t){Object.defineProperty(this,x,{value:!0}),this._bufs=[],this.length=0,t&&this.append(t)};r.prototype._new=function(t){return new r(t)};r.prototype._offset=function(t){if(t===0)return[0,0];let i=0;for(let n=0;n<this._bufs.length;n++){let f=i+this._bufs[n].length;if(t<f||n===this._bufs.length-1)return[n,t-i];i=f}};r.prototype._reverseOffset=function(e){let t=e[0],i=e[1];for(let n=0;n<t;n++)i+=this._bufs[n].length;return i};r.prototype.get=function(t){if(t>this.length||t<0)return;let i=this._offset(t);return this._bufs[i[0]][i[1]]};r.prototype.slice=function(t,i){return typeof t=="number"&&t<0&&(t+=this.length),typeof i=="number"&&i<0&&(i+=this.length),this.copy(null,0,t,i)};r.prototype.copy=function(t,i,n,f){if((typeof n!="number"||n<0)&&(n=0),(typeof f!="number"||f>this.length)&&(f=this.length),n>=this.length||f<=0)return t||h.alloc(0);let s=!!t,p=this._offset(n),L=f-n,u=L,c=s&&i||0,l=p[1];if(n===0&&f===this.length){if(!s)return this._bufs.length===1?this._bufs[0]:h.concat(this._bufs,this.length);for(let _=0;_<this._bufs.length;_++)this._bufs[_].copy(t,c),c+=this._bufs[_].length;return t}if(u<=this._bufs[p[0]].length-l)return s?this._bufs[p[0]].copy(t,i,l,l+u):this._bufs[p[0]].slice(l,l+u);s||(t=h.allocUnsafe(L));for(let _=p[0];_<this._bufs.length;_++){let b=this._bufs[_].length-l;if(u>b)this._bufs[_].copy(t,c,l),c+=b;else{this._bufs[_].copy(t,c,l,l+u),c+=b;break}u-=b,l&&(l=0)}return t.length>c?t.slice(0,c):t};r.prototype.shallowSlice=function(t,i){if(t=t||0,i=typeof i!="number"?this.length:i,t<0&&(t+=this.length),i<0&&(i+=this.length),t===i)return this._new();let n=this._offset(t),f=this._offset(i),s=this._bufs.slice(n[0],f[0]+1);return f[1]===0?s.pop():s[s.length-1]=s[s.length-1].slice(0,f[1]),n[1]!==0&&(s[0]=s[0].slice(n[1])),this._new(s)};r.prototype.toString=function(t,i,n){return this.slice(i,n).toString(t)};r.prototype.consume=function(t){if(t=Math.trunc(t),Number.isNaN(t)||t<=0)return this;for(;this._bufs.length;)if(t>=this._bufs[0].length)t-=this._bufs[0].length,this.length-=this._bufs[0].length,this._bufs.shift();else{this._bufs[0]=this._bufs[0].slice(t),this.length-=t;break}return this};r.prototype.duplicate=function(){let t=this._new();for(let i=0;i<this._bufs.length;i++)t.append(this._bufs[i]);return t};r.prototype.append=function(t){if(t==null)return this;if(t.buffer)this._appendBuffer(h.from(t.buffer,t.byteOffset,t.byteLength));else if(Array.isArray(t))for(let i=0;i<t.length;i++)this.append(t[i]);else if(this._isBufferList(t))for(let i=0;i<t._bufs.length;i++)this.append(t._bufs[i]);else typeof t=="number"&&(t=t.toString()),this._appendBuffer(h.from(t));return this};r.prototype._appendBuffer=function(t){this._bufs.push(t),this.length+=t.length};r.prototype.indexOf=function(e,t,i){if(i===void 0&&typeof t=="string"&&(i=t,t=void 0),typeof e=="function"||Array.isArray(e))throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');if(typeof e=="number"?e=h.from([e]):typeof e=="string"?e=h.from(e,i):this._isBufferList(e)?e=e.slice():Array.isArray(e.buffer)?e=h.from(e.buffer,e.byteOffset,e.byteLength):h.isBuffer(e)||(e=h.from(e)),t=Number(t||0),isNaN(t)&&(t=0),t<0&&(t=this.length+t),t<0&&(t=0),e.length===0)return t>this.length?this.length:t;let n=this._offset(t),f=n[0],s=n[1];for(;f<this._bufs.length;f++){let p=this._bufs[f];for(;s<p.length;)if(p.length-s>=e.length){let u=p.indexOf(e,s);if(u!==-1)return this._reverseOffset([f,u]);s=p.length-e.length+1}else{let u=this._reverseOffset([f,s]);if(this._match(u,e))return u;s++}s=0}return-1};r.prototype._match=function(e,t){if(this.length-e<t.length)return!1;for(let i=0;i<t.length;i++)if(this.get(e+i)!==t[i])return!1;return!0};(function(){let e={readDoubleBE:8,readDoubleLE:8,readFloatBE:4,readFloatLE:4,readInt32BE:4,readInt32LE:4,readUInt32BE:4,readUInt32LE:4,readInt16BE:2,readInt16LE:2,readUInt16BE:2,readUInt16LE:2,readInt8:1,readUInt8:1,readIntBE:null,readIntLE:null,readUIntBE:null,readUIntLE:null};for(let t in e)(function(i){e[i]===null?r.prototype[i]=function(n,f){return this.slice(n,n+f)[i](0,f)}:r.prototype[i]=function(n=0){return this.slice(n,n+e[i])[i](0)}})(t)})();r.prototype._isBufferList=function(t){return t instanceof r||r.isBufferList(t)};r.isBufferList=function(t){return t!=null&&t[x]};U.exports=r});var O=E((K,B)=>{"use strict";var I=__3$Duplex,P=__2$,a=A();function o(e){if(!(this instanceof o))return new o(e);if(typeof e=="function"){this._callback=e;let t=function(n){this._callback&&(this._callback(n),this._callback=null)}.bind(this);this.on("pipe",function(n){n.on("error",t)}),this.on("unpipe",function(n){n.removeListener("error",t)}),e=null}a._init.call(this,e),I.call(this)}P(o,I);Object.assign(o.prototype,a.prototype);o.prototype._new=function(t){return new o(t)};o.prototype._write=function(t,i,n){this._appendBuffer(t),typeof n=="function"&&n()};o.prototype._read=function(t){if(!this.length)return this.push(null);t=Math.min(t,this.length),this.push(this.slice(0,t)),this.consume(t)};o.prototype.end=function(t){I.prototype.end.call(this,t),this._callback&&(this._callback(null,this.slice()),this._callback=null)};o.prototype._destroy=function(t,i){this._bufs.length=0,this.length=0,i(t)};o.prototype._isBufferList=function(t){return t instanceof o||t instanceof a||o.isBufferList(t)};o.isBufferList=a.isBufferList;B.exports=o;B.exports.BufferListStream=o;B.exports.BufferList=a});var g={};M(g,{BufferList:()=>R,BufferListStream:()=>W,default:()=>G,isBufferList:()=>T});var S=v(O());y(g,v(O()));var{isBufferList:T,BufferListStream:W,BufferList:R}=S,{default:N,...C}=S,G=N!==void 0?N:C;export{R as BufferList,W as BufferListStream,G as default,T as isBufferList};
//# sourceMappingURL=bl.mjs.map