/* esm.sh - esbuild bundle(cli-cursor@4.0.0) node production */
import o from"node:process";import d from"./96f816.js";var s=!1,r={};r.show=(e=o.stderr)=>{e.isTTY&&(s=!1,e.write("\x1B[?25h"))};r.hide=(e=o.stderr)=>{e.isTTY&&(d(),s=!0,e.write("\x1B[?25l"))};r.toggle=(e,i)=>{e!==void 0&&(s=e),s?r.show(i):r.hide(i)};var u=r;export{u as default};
//# sourceMappingURL=cli-cursor.mjs.map