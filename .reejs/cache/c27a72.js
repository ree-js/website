import a from"node:process";import m from"./b7654d.js";import d from"./32b1b4.js";import l from"./8b4a9f.js";import f from"./aba1cc.js";import c from"./232abd.js";import x from"./2f2890.js";import y from"./a4485a.js";import T from"./f51a45.js";import e from"node:process";import b from"node:readline";import{BufferListStream as g}from"./5ec9ad.js";var w=3,v=class{#s=0;#f=new g;#r;#e;constructor(){this.#f.pipe(e.stdout);let t=this;this.#r=function(i,s,...r){let{stdin:h}=e;if(t.#s>0||h.emit===t.#r){if(i==="keypress")return;i==="data"&&s.includes(w)&&e.emit("SIGINT"),Reflect.apply(t.#r,this,[i,s,...r])}else Reflect.apply(e.stdin.emit,this,[i,s,...r])}}start(){this.#s++,this.#s===1&&this._realStart()}stop(){if(this.#s<=0)throw new Error("`stop` called more times than `start`");this.#s--,this.#s===0&&this._realStop()}_realStart(){e.platform!=="win32"&&(this.#e=b.createInterface({input:e.stdin,output:this.#f}),this.#e.on("SIGINT",()=>{e.listenerCount("SIGINT")===0?e.emit("SIGINT"):(this.#e.close(),e.kill(e.pid,"SIGINT"))}))}_realStop(){e.platform!=="win32"&&(this.#e.close(),this.#e=void 0)}},p,S=class{#s=0;#f=!1;#r=0;#e=0;#t;#n;#i;#p;#u;#o;#a;#l;#d;#h;color;constructor(t){p||(p=new v),typeof t=="string"&&(t={text:t}),this.#t={color:"cyan",stream:a.stderr,discardStdin:!0,hideCursor:!0,...t},this.color=this.#t.color,this.spinner=this.#t.spinner,this.#u=this.#t.interval,this.#i=this.#t.stream,this.#o=typeof this.#t.isEnabled=="boolean"?this.#t.isEnabled:y({stream:this.#i}),this.#a=typeof this.#t.isSilent=="boolean"?this.#t.isSilent:!1,this.text=this.#t.text,this.prefixText=this.#t.prefixText,this.indent=this.#t.indent,a.env.NODE_ENV==="test"&&(this._stream=this.#i,this._isEnabled=this.#o,Object.defineProperty(this,"_linesToClear",{get(){return this.#s},set(i){this.#s=i}}),Object.defineProperty(this,"_frameIndex",{get(){return this.#e}}),Object.defineProperty(this,"_lineCount",{get(){return this.#r}}))}get indent(){return this.#l}set indent(t=0){if(!(t>=0&&Number.isInteger(t)))throw new Error("The `indent` option must be an integer from 0 and up");this.#l=t,this.updateLineCount()}get interval(){return this.#u||this.#n.interval||100}get spinner(){return this.#n}set spinner(t){if(this.#e=0,this.#u=void 0,typeof t=="object"){if(t.frames===void 0)throw new Error("The given spinner must have a `frames` property");this.#n=t}else if(!T())this.#n=l.line;else if(t===void 0)this.#n=l.dots;else if(t!=="default"&&l[t])this.#n=l[t];else throw new Error(`There is no built-in spinner named '${t}'. See https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json for a full list.`)}get text(){return this.#d}set text(t){this.#d=t||"",this.updateLineCount()}get prefixText(){return this.#h}set prefixText(t){this.#h=t||"",this.updateLineCount()}get isSpinning(){return this.#p!==void 0}getFullPrefixText(t=this.#h,i=" "){return typeof t=="string"&&t!==""?t+i:typeof t=="function"?t()+i:""}updateLineCount(){let t=this.#i.columns||80,i=this.getFullPrefixText(this.#h,"-");this.#r=0;for(let s of c(" ".repeat(this.#l)+i+"--"+this.#d).split(`
`))this.#r+=Math.max(1,Math.ceil(x(s)/t))}get isEnabled(){return this.#o&&!this.#a}set isEnabled(t){if(typeof t!="boolean")throw new TypeError("The `isEnabled` option must be a boolean");this.#o=t}get isSilent(){return this.#a}set isSilent(t){if(typeof t!="boolean")throw new TypeError("The `isSilent` option must be a boolean");this.#a=t}frame(){let{frames:t}=this.#n,i=t[this.#e];this.color&&(i=m[this.color](i)),this.#e=++this.#e%t.length;let s=typeof this.#h=="string"&&this.#h!==""?this.#h+" ":"",r=typeof this.text=="string"?" "+this.text:"";return s+i+r}clear(){if(!this.#o||!this.#i.isTTY)return this;this.#i.cursorTo(0);for(let t=0;t<this.#s;t++)t>0&&this.#i.moveCursor(0,-1),this.#i.clearLine(1);return(this.#l||this.lastIndent!==this.#l)&&this.#i.cursorTo(this.#l),this.lastIndent=this.#l,this.#s=0,this}render(){return this.#a?this:(this.clear(),this.#i.write(this.frame()),this.#s=this.#r,this)}start(t){return t&&(this.text=t),this.#a?this:this.#o?this.isSpinning?this:(this.#t.hideCursor&&d.hide(this.#i),this.#t.discardStdin&&a.stdin.isTTY&&(this.#f=!0,p.start()),this.render(),this.#p=setInterval(this.render.bind(this),this.interval),this):(this.text&&this.#i.write(`- ${this.text}
`),this)}stop(){return this.#o?(clearInterval(this.#p),this.#p=void 0,this.#e=0,this.clear(),this.#t.hideCursor&&d.show(this.#i),this.#t.discardStdin&&a.stdin.isTTY&&this.#f&&(p.stop(),this.#f=!1),this):this}succeed(t){return this.stopAndPersist({symbol:f.success,text:t})}fail(t){return this.stopAndPersist({symbol:f.error,text:t})}warn(t){return this.stopAndPersist({symbol:f.warning,text:t})}info(t){return this.stopAndPersist({symbol:f.info,text:t})}stopAndPersist(t={}){if(this.#a)return this;let i=t.prefixText||this.#h,s=t.text||this.text,r=typeof s=="string"?" "+s:"";return this.stop(),this.#i.write(`${this.getFullPrefixText(i," ")}${t.symbol||" "}${r}
`),this}};function I(t){return new S(t)}async function M(t,i){let s=typeof t=="function",r=typeof t.then=="function";if(!s&&!r)throw new TypeError("Parameter `action` must be a Function or a Promise");let{successText:h,failText:o}=typeof i=="object"?i:{successText:void 0,failText:void 0},u=I(i).start();try{let n=await(s?t(u):t);return u.succeed(h===void 0?void 0:typeof h=="string"?h:h(n)),n}catch(n){throw u.fail(o===void 0?void 0:typeof o=="string"?o:o(n)),n}}export{I as default,M as oraPromise};
//# sourceMappingURL=ora.bundle.mjs.map