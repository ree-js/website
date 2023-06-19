/* esm.sh - esbuild bundle(mdast-util-gfm-footnote@1.0.2) node production */
import{normalizeIdentifier as a}from"./6a12be.js";import{association as c}from"./f58bef.js";import{containerFlow as g}from"./85e2e7.js";import{indentLines as h}from"./9eae4b.js";import{safe as s}from"./16d14d.js";import{track as m}from"./2fdede.js";u.peek=w;function F(){return{enter:{gfmFootnoteDefinition:p,gfmFootnoteDefinitionLabelString:d,gfmFootnoteCall:D,gfmFootnoteCallString:S},exit:{gfmFootnoteDefinition:C,gfmFootnoteDefinitionLabelString:k,gfmFootnoteCall:x,gfmFootnoteCallString:v}}}function b(){return{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:L,footnoteReference:u}}}function p(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function d(){this.buffer()}function k(e){let i=this.resume(),t=this.stack[this.stack.length-1];t.label=i,t.identifier=a(this.sliceSerialize(e)).toLowerCase()}function C(e){this.exit(e)}function D(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function S(){this.buffer()}function v(e){let i=this.resume(),t=this.stack[this.stack.length-1];t.label=i,t.identifier=a(this.sliceSerialize(e)).toLowerCase()}function x(e){this.exit(e)}function u(e,i,t,r){let o=m(r),n=o.move("[^"),f=t.enter("footnoteReference"),l=t.enter("reference");return n+=o.move(s(t,c(e),{...o.current(),before:n,after:"]"})),l(),f(),n+=o.move("]"),n}function w(){return"["}function L(e,i,t,r){let o=m(r),n=o.move("[^"),f=t.enter("footnoteDefinition"),l=t.enter("label");return n+=o.move(s(t,c(e),{...o.current(),before:n,after:"]"})),l(),n+=o.move("]:"+(e.children&&e.children.length>0?" ":"")),o.shift(4),n+=o.move(h(g(e,t,o.current()),M)),f(),n}function M(e,i,t){return i===0?e:(t?"":"    ")+e}export{F as gfmFootnoteFromMarkdown,b as gfmFootnoteToMarkdown};
//# sourceMappingURL=mdast-util-gfm-footnote.mjs.map