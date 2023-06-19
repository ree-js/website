/* esm.sh - esbuild bundle(micromark-extension-gfm-autolink-literal@1.0.5) node production */
import{asciiAlpha as h,asciiAlphanumeric as g,asciiControl as _,markdownLineEndingOrSpace as A,unicodePunctuation as v,unicodeWhitespace as w}from"./e4af39.js";var y={tokenize:j,partial:!0},S={tokenize:q,partial:!0},D={tokenize:G,partial:!0},W={tokenize:J,partial:!0},O={tokenize:K,partial:!0},b={tokenize:B,previous:E},C={tokenize:F,previous:H},p={tokenize:U,previous:T},s={},R={text:s},k=48;for(;k<123;)s[k]=p,k++,k===58?k=65:k===91&&(k=97);s[43]=p;s[45]=p;s[46]=p;s[95]=p;s[72]=[p,C];s[104]=[p,C];s[87]=[p,b];s[119]=[p,b];function U(t,o,l){let u=this,a,e;return n;function n(i){return!x(i)||!T.call(u,u.previous)||P(u.events)?l(i):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),r(i))}function r(i){return x(i)?(t.consume(i),r):i===64?(t.consume(i),f):l(i)}function f(i){return i===46?t.check(O,z,m)(i):i===45||i===95||g(i)?(e=!0,t.consume(i),f):z(i)}function m(i){return t.consume(i),a=!0,f}function z(i){return e&&a&&h(u.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),o(i)):l(i)}}function B(t,o,l){let u=this;return a;function a(n){return n!==87&&n!==119||!E.call(u,u.previous)||P(u.events)?l(n):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(y,t.attempt(S,t.attempt(D,e),l),l)(n))}function e(n){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),o(n)}}function F(t,o,l){let u=this,a="",e=!1;return n;function n(i){return(i===72||i===104)&&H.call(u,u.previous)&&!P(u.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),a+=String.fromCodePoint(i),t.consume(i),r):l(i)}function r(i){if(h(i)&&a.length<5)return a+=String.fromCodePoint(i),t.consume(i),r;if(i===58){let I=a.toLowerCase();if(I==="http"||I==="https")return t.consume(i),f}return l(i)}function f(i){return i===47?(t.consume(i),e?m:(e=!0,f)):l(i)}function m(i){return i===null||_(i)||A(i)||w(i)||v(i)?l(i):t.attempt(S,t.attempt(D,z),l)(i)}function z(i){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),o(i)}}function j(t,o,l){let u=0;return a;function a(n){return(n===87||n===119)&&u<3?(u++,t.consume(n),a):n===46&&u===3?(t.consume(n),e):l(n)}function e(n){return n===null?l(n):o(n)}}function q(t,o,l){let u,a,e;return n;function n(m){return m===46||m===95?t.check(W,f,r)(m):m===null||A(m)||w(m)||m!==45&&v(m)?f(m):(e=!0,t.consume(m),n)}function r(m){return m===95?u=!0:(a=u,u=void 0),t.consume(m),n}function f(m){return a||u||!e?l(m):o(m)}}function G(t,o){let l=0,u=0;return a;function a(n){return n===40?(l++,t.consume(n),a):n===41&&u<l?e(n):n===33||n===34||n===38||n===39||n===41||n===42||n===44||n===46||n===58||n===59||n===60||n===63||n===93||n===95||n===126?t.check(W,o,e)(n):n===null||A(n)||w(n)?o(n):(t.consume(n),a)}function e(n){return n===41&&u++,t.consume(n),a}}function J(t,o,l){return u;function u(r){return r===33||r===34||r===39||r===41||r===42||r===44||r===46||r===58||r===59||r===63||r===95||r===126?(t.consume(r),u):r===38?(t.consume(r),e):r===93?(t.consume(r),a):r===60||r===null||A(r)||w(r)?o(r):l(r)}function a(r){return r===null||r===40||r===91||A(r)||w(r)?o(r):u(r)}function e(r){return h(r)?n(r):l(r)}function n(r){return r===59?(t.consume(r),u):h(r)?(t.consume(r),n):l(r)}}function K(t,o,l){return u;function u(e){return t.consume(e),a}function a(e){return g(e)?l(e):o(e)}}function E(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||A(t)}function H(t){return!h(t)}function T(t){return!(t===47||x(t))}function x(t){return t===43||t===45||t===46||t===95||g(t)}function P(t){let o=t.length,l=!1;for(;o--;){let u=t[o][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){l=!0;break}if(u._gfmAutolinkLiteralWalkedInto){l=!1;break}}return t.length>0&&!l&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),l}import{sanitizeUri as M}from"./1635a9.js";var N={exit:{literalAutolinkEmail:V,literalAutolinkHttp:X,literalAutolinkWww:Q}};function Q(t){L.call(this,t,"http://")}function V(t){L.call(this,t,"mailto:")}function X(t){L.call(this,t)}function L(t,o){let l=this.sliceSerialize(t);this.tag('<a href="'+M((o||"")+l)+'">'),this.raw(this.encode(l)),this.tag("</a>")}export{R as gfmAutolinkLiteral,N as gfmAutolinkLiteralHtml};
//# sourceMappingURL=micromark-extension-gfm-autolink-literal.mjs.map