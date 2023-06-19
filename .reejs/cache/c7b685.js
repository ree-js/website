/* esm.sh - esbuild bundle(micromark-extension-gfm-table@1.0.7) node production */
var H={none:"",left:' align="left"',right:' align="right"',center:' align="center"'},V={enter:{table(t){let i=t._align;this.lineEndingIfNeeded(),this.tag("<table>"),this.setData("tableAlign",i)},tableBody(){this.tag("<tbody>")},tableData(){let t=this.getData("tableAlign"),i=this.getData("tableColumn"),n=H[t[i]];n===void 0?this.buffer():(this.lineEndingIfNeeded(),this.tag("<td"+n+">"))},tableHead(){this.lineEndingIfNeeded(),this.tag("<thead>")},tableHeader(){let t=this.getData("tableAlign"),i=this.getData("tableColumn"),n=H[t[i]];this.lineEndingIfNeeded(),this.tag("<th"+n+">")},tableRow(){this.setData("tableColumn",0),this.lineEndingIfNeeded(),this.tag("<tr>")}},exit:{codeTextData(t){let i=this.sliceSerialize(t);this.getData("tableAlign")&&(i=i.replace(/\\([\\|])/g,q)),this.raw(this.encode(i))},table(){this.setData("tableAlign"),this.setData("slurpAllLineEndings"),this.lineEndingIfNeeded(),this.tag("</table>")},tableBody(){this.lineEndingIfNeeded(),this.tag("</tbody>")},tableData(){let t=this.getData("tableAlign"),i=this.getData("tableColumn");i in t?(this.tag("</td>"),this.setData("tableColumn",i+1)):this.resume()},tableHead(){this.lineEndingIfNeeded(),this.tag("</thead>")},tableHeader(){let t=this.getData("tableColumn");this.tag("</th>"),this.setData("tableColumn",t+1)},tableRow(){let t=this.getData("tableAlign"),i=this.getData("tableColumn");for(;i<t.length;)this.lineEndingIfNeeded(),this.tag("<td"+H[t[i]]+"></td>"),i++;this.setData("tableColumn",i),this.lineEndingIfNeeded(),this.tag("</tr>")}}};function q(t,i){return i==="|"?i:t}import{factorySpace as y}from"./cfc29b.js";import{markdownLineEnding as k,markdownLineEndingOrSpace as M,markdownSpace as R}from"./967460.js";var E=class{constructor(){this.map=[]}add(i,n,l){G(this,i,n,l)}consume(i){if(this.map.sort((r,s)=>r[0]-s[0]),this.map.length===0)return;let n=this.map.length,l=[];for(;n>0;)n-=1,l.push(i.slice(this.map[n][0]+this.map[n][1])),l.push(this.map[n][2]),i.length=this.map[n][0];l.push([...i]),i.length=0;let a=l.pop();for(;a;)i.push(...a),a=l.pop();this.map.length=0}};function G(t,i,n,l){let a=0;if(!(n===0&&l.length===0)){for(;a<t.map.length;){if(t.map[a][0]===i){t.map[a][1]+=n,t.map[a][2].push(...l);return}a+=1}t.map.push([i,n,l])}}function L(t,i){let n=!1,l=[];for(;i<t.length;){let a=t[i];if(n){if(a[0]==="enter")a[1].type==="tableContent"&&l.push(t[i+1][1].type==="tableDelimiterMarker"?"left":"none");else if(a[1].type==="tableContent"){if(t[i-1][1].type==="tableDelimiterMarker"){let r=l.length-1;l[r]=l[r]==="left"?"center":"right"}}else if(a[1].type==="tableDelimiterRow")break}else a[0]==="enter"&&a[1].type==="tableDelimiterRow"&&(n=!0);i+=1}return l}var J={flow:{null:{tokenize:Q,resolveAll:U}}};function Q(t,i,n){let l=this,a=0,r=0,s;return o;function o(e){let w=l.events.length-1;for(;w>-1;){let z=l.events[w][1].type;if(z==="lineEnding"||z==="linePrefix")w--;else break}let F=w>-1?l.events[w][1].type:null,S=F==="tableHead"||F==="tableRow"?x:g;return S===x&&l.parser.lazy[l.now().line]?n(e):S(e)}function g(e){return t.enter("tableHead"),t.enter("tableRow"),f(e)}function f(e){return e===124||(s=!0,r+=1),m(e)}function m(e){return e===null?n(e):k(e)?r>1?(r=0,l.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(e),t.exit("lineEnding"),d):n(e):R(e)?y(t,m,"whitespace")(e):(r+=1,s&&(s=!1,a+=1),e===124?(t.enter("tableCellDivider"),t.consume(e),t.exit("tableCellDivider"),s=!0,m):(t.enter("data"),b(e)))}function b(e){return e===null||e===124||M(e)?(t.exit("data"),m(e)):(t.consume(e),e===92?h:b)}function h(e){return e===92||e===124?(t.consume(e),b):b(e)}function d(e){return l.interrupt=!1,l.parser.lazy[l.now().line]?n(e):(t.enter("tableDelimiterRow"),s=!1,R(e)?y(t,u,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(e):u(e))}function u(e){return e===45||e===58?O(e):e===124?(s=!0,t.enter("tableCellDivider"),t.consume(e),t.exit("tableCellDivider"),v):D(e)}function v(e){return R(e)?y(t,O,"whitespace")(e):O(e)}function O(e){return e===58?(r+=1,s=!0,t.enter("tableDelimiterMarker"),t.consume(e),t.exit("tableDelimiterMarker"),I):e===45?(r+=1,I(e)):e===null||k(e)?j(e):D(e)}function I(e){return e===45?(t.enter("tableDelimiterFiller"),N(e)):D(e)}function N(e){return e===45?(t.consume(e),N):e===58?(s=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(e),t.exit("tableDelimiterMarker"),B):(t.exit("tableDelimiterFiller"),B(e))}function B(e){return R(e)?y(t,j,"whitespace")(e):j(e)}function j(e){return e===124?u(e):e===null||k(e)?!s||a!==r?D(e):(t.exit("tableDelimiterRow"),t.exit("tableHead"),i(e)):D(e)}function D(e){return n(e)}function x(e){return t.enter("tableRow"),A(e)}function A(e){return e===124?(t.enter("tableCellDivider"),t.consume(e),t.exit("tableCellDivider"),A):e===null||k(e)?(t.exit("tableRow"),i(e)):R(e)?y(t,A,"whitespace")(e):(t.enter("data"),C(e))}function C(e){return e===null||e===124||M(e)?(t.exit("data"),A(e)):(t.consume(e),e===92?_:C)}function _(e){return e===92||e===124?(t.consume(e),C):C(e)}}function U(t,i){let n=-1,l=!0,a=0,r=[0,0,0,0],s=[0,0,0,0],o=!1,g=0,f,m,b,h=new E;for(;++n<t.length;){let d=t[n],u=d[1];d[0]==="enter"?u.type==="tableHead"?(o=!1,g!==0&&(P(h,i,g,f,m),m=void 0,g=0),f={type:"table",start:Object.assign({},u.start),end:Object.assign({},u.end)},h.add(n,0,[["enter",f,i]])):u.type==="tableRow"||u.type==="tableDelimiterRow"?(l=!0,b=void 0,r=[0,0,0,0],s=[0,n+1,0,0],o&&(o=!1,m={type:"tableBody",start:Object.assign({},u.start),end:Object.assign({},u.end)},h.add(n,0,[["enter",m,i]])),a=u.type==="tableDelimiterRow"?2:m?3:1):a&&(u.type==="data"||u.type==="tableDelimiterMarker"||u.type==="tableDelimiterFiller")?(l=!1,s[2]===0&&(r[1]!==0&&(s[0]=s[1],b=T(h,i,r,a,void 0,b),r=[0,0,0,0]),s[2]=n)):u.type==="tableCellDivider"&&(l?l=!1:(r[1]!==0&&(s[0]=s[1],b=T(h,i,r,a,void 0,b)),r=s,s=[r[1],n,0,0])):u.type==="tableHead"?(o=!0,g=n):u.type==="tableRow"||u.type==="tableDelimiterRow"?(g=n,r[1]!==0?(s[0]=s[1],b=T(h,i,r,a,n,b)):s[1]!==0&&(b=T(h,i,s,a,n,b)),a=0):a&&(u.type==="data"||u.type==="tableDelimiterMarker"||u.type==="tableDelimiterFiller")&&(s[3]=n)}for(g!==0&&P(h,i,g,f,m),h.consume(i.events),n=-1;++n<i.events.length;){let d=i.events[n];d[0]==="enter"&&d[1].type==="table"&&(d[1]._align=L(i.events,n))}return t}function T(t,i,n,l,a,r){let s=l===1?"tableHeader":l===2?"tableDelimiter":"tableData",o="tableContent";n[0]!==0&&(r.end=Object.assign({},p(i.events,n[0])),t.add(n[0],0,[["exit",r,i]]));let g=p(i.events,n[1]);if(r={type:s,start:Object.assign({},g),end:Object.assign({},g)},t.add(n[1],0,[["enter",r,i]]),n[2]!==0){let f=p(i.events,n[2]),m=p(i.events,n[3]),b={type:o,start:Object.assign({},f),end:Object.assign({},m)};if(t.add(n[2],0,[["enter",b,i]]),l!==2){let h=i.events[n[2]],d=i.events[n[3]];if(h[1].end=Object.assign({},d[1].end),h[1].type="chunkText",h[1].contentType="text",n[3]>n[2]+1){let u=n[2]+1,v=n[3]-n[2]-1;t.add(u,v,[])}}t.add(n[3]+1,0,[["exit",b,i]])}return a!==void 0&&(r.end=Object.assign({},p(i.events,a)),t.add(a,0,[["exit",r,i]]),r=void 0),r}function P(t,i,n,l,a){let r=[],s=p(i.events,n);a&&(a.end=Object.assign({},s),r.push(["exit",a,i])),l.end=Object.assign({},s),r.push(["exit",l,i]),t.add(n+1,0,r)}function p(t,i){let n=t[i],l=n[0]==="enter"?"start":"end";return n[1][l]}export{J as gfmTable,V as gfmTableHtml};
//# sourceMappingURL=micromark-extension-gfm-table.mjs.map