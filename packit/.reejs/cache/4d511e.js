/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.5.0/lib/handle/inline-code) node production */
import{patternCompile as a}from"./004f6c.js";u.peek=p;function u(s,f,l){let e=s.value||"",t="`",o=-1;for(;new RegExp("(^|[^`])"+t+"([^`]|$)").test(e);)t+="`";for(/[^ \r\n]/.test(e)&&(/^[ \r\n]/.test(e)&&/[ \r\n]$/.test(e)||/^`|`$/.test(e))&&(e=" "+e+" ");++o<l.unsafe.length;){let r=l.unsafe[o],c=a(r),i;if(r.atBreak)for(;i=c.exec(e);){let n=i.index;e.charCodeAt(n)===10&&e.charCodeAt(n-1)===13&&n--,e=e.slice(0,n)+" "+e.slice(i.index+1)}}return t+e+t}function p(){return"`"}export{u as inlineCode};
//# sourceMappingURL=inline-code.js.map