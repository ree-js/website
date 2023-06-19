import{unified as $}from"./704ce3.js";import H from"./0ec7ba.js";import K from"./42cb39.js";import Q from"./d1b8b4.js";import{buildJsx as W}from"./b5238e.js";import{start as Y,cont as Z,name as ee}from"./595cb8.js";import{analyze as oe}from"./bf2faf.js";import{stringifyPosition as V}from"./c81b5e.js";import{positionFromEstree as X}from"./3f18d8.js";import{walk as ie}from"./a72b14.js";import{stringifyPosition as se}from"./c81b5e.js";import{positionFromEstree as me}from"./3f18d8.js";import{name as J}from"./595cb8.js";import{walk as ce}from"./a72b14.js";import{analyze as ue}from"./bf2faf.js";import{toJs as T,jsx as A}from"./7422f6.js";import{toEstree as xe}from"./bec849.js";import{visit as ge}from"./1834b7.js";import{visit as be}from"./1834b7.js";import De from"node:process";import{VFile as we}from"./9dd7c2.js";import Ce from"./2ecf4e.js";function j(e,t){let n=["start","end","loc","range","comments"],r=-1;for(;++r<n.length;){let a=n[r];a in e&&(t[a]=e[a])}}function P(e,t){let n=-1,r=[],a=[],f;for(;++n<e.length;){let m=e[n];m.type==="ImportNamespaceSpecifier"?f=m:a.push(m)}if(f){let m={type:"VariableDeclarator",id:f.local,init:t};j(f,m),r.push(m)}return r.push({type:"VariableDeclarator",id:{type:"ObjectPattern",properties:a.map(m=>{let d=m.type==="ImportSpecifier"?m.imported:m.type==="ExportSpecifier"?m.exported:{type:"Identifier",name:"default"},g=m.local;m.type==="ExportSpecifier"&&(g=d,d=m.local);let x={type:"Property",kind:"init",shorthand:d.name===g.name,method:!1,computed:!1,key:d,value:g};return j(m,x),x})},init:f?{type:"Identifier",name:f.local.name}:t}),r}var F=B("Identifier","MemberExpression",ee),_=B("JSXIdentifier","JSXMemberExpression",te);function B(e,t,n){return r;function r(a){let f=-1,m;for(;++f<a.length;){let d=a[f],g=typeof d=="string"&&n(d);if(e==="JSXIdentifier"&&!g)throw new Error("Cannot turn `"+d+"` into a JSX identifier");let x=g?{type:e,name:d}:{type:"Literal",value:d};m=m?{type:t,object:m,property:x,computed:x.type==="Literal",optional:!1}:x}if(!m)throw new Error("Expected non-empty `ids` to be passed");if(m.type==="Literal")throw new Error("Expected identifier as left-most value");return m}}function te(e){let t=-1;for(;++t<e.length;)if(!(t?ne:Y)(e.charCodeAt(t)))return!1;return t>0}function ne(e){return e===45||Z(e)}function re(e){let{development:t,outputFormat:n}=e||{};return(r,a)=>{W(r,{development:t,filePath:a.history[0]}),n==="function-body"&&r.body[0]&&r.body[0].type==="ImportDeclaration"&&typeof r.body[0].source.value=="string"&&/\/jsx-(dev-)?runtime$/.test(r.body[0].source.value)&&(r.body[0]={type:"VariableDeclaration",kind:"const",declarations:P(r.body[0].specifiers,F(["arguments",0]))})}}function ae(e){if(e.type==="FunctionDeclaration")return{...e,type:"FunctionExpression"};if(e.type==="ClassDeclaration")return{...e,type:"ClassExpression"};throw new Error("Cannot turn `"+e.type+"` into an expression")}function pe(e){return e.type==="FunctionDeclaration"||e.type==="ClassDeclaration"||e.type==="VariableDeclaration"}function le(e){let t=e||{},n=t.baseUrl||void 0,r=t.useDynamicImport||void 0,a=t.outputFormat||"program",f=t.pragma===void 0?"React.createElement":t.pragma,m=t.pragmaFrag===void 0?"React.Fragment":t.pragmaFrag,d=t.pragmaImportSource||"react",g=t.jsxImportSource||"react",x=t.jsxRuntime||"automatic";return(p,b)=>{let c=[],i=[],u=[],E=0,l,I,s;if(p.comments||(p.comments=[]),x&&u.push("@jsxRuntime "+x),x==="automatic"&&g&&u.push("@jsxImportSource "+g),x==="classic"&&f&&u.push("@jsx "+f),x==="classic"&&m&&u.push("@jsxFrag "+m),u.length>0&&p.comments.unshift({type:"Block",value:u.join(" ")}),x==="classic"&&d){if(!f)throw new Error("Missing `pragma` in classic runtime with `pragmaImportSource`");C({type:"ImportDeclaration",specifiers:[{type:"ImportDefaultSpecifier",local:{type:"Identifier",name:f.split(".")[0]}}],source:{type:"Literal",value:d}})}for(s of p.body)if(s.type==="ExportDefaultDeclaration")l&&b.fail("Cannot specify multiple layouts (previous: "+V(X(l))+")",X(s),"recma-document:duplicate-layout"),l=s,i.push({type:"VariableDeclaration",kind:"const",declarations:[{type:"VariableDeclarator",id:{type:"Identifier",name:"MDXLayout"},init:pe(s.declaration)?ae(s.declaration):s.declaration}]});else if(s.type==="ExportNamedDeclaration"&&s.source){let o=s.source;s.specifiers=s.specifiers.filter(y=>{if(y.exported.name==="default"){l&&b.fail("Cannot specify multiple layouts (previous: "+V(X(l))+")",X(s),"recma-document:duplicate-layout"),l=y;let v=[];if(y.local.name==="default")v.push({type:"ImportDefaultSpecifier",local:{type:"Identifier",name:"MDXLayout"}});else{let N={type:"ImportSpecifier",imported:y.local,local:{type:"Identifier",name:"MDXLayout"}};j(y.local,N),v.push(N)}let h={type:"Literal",value:o.value};j(o,h);let D={type:"ImportDeclaration",specifiers:v,source:h};return j(y,D),C(D),!1}return!0}),s.specifiers.length>0&&w(s)}else s.type==="ExportNamedDeclaration"||s.type==="ExportAllDeclaration"?w(s):s.type==="ImportDeclaration"?C(s):s.type==="ExpressionStatement"&&(s.expression.type==="JSXFragment"||s.expression.type==="JSXElement")?(I=!0,i.push(...S(s.expression,!!l))):i.push(s);I||i.push(...S(void 0,!!l)),c.push(["MDXContent","default"]),a==="function-body"?i.push({type:"ReturnStatement",argument:{type:"ObjectExpression",properties:[...Array.from({length:E}).map((o,y)=>({type:"SpreadElement",argument:{type:"Identifier",name:"_exportAll"+(y+1)}})),...c.map(o=>({type:"Property",kind:"init",method:!1,computed:!1,shorthand:typeof o=="string",key:{type:"Identifier",name:typeof o=="string"?o:o[1]},value:{type:"Identifier",name:typeof o=="string"?o:o[0]}}))]}}):i.push({type:"ExportDefaultDeclaration",declaration:{type:"Identifier",name:"MDXContent"}}),p.body=i,n&&ie(p,{enter(o){if(o.type==="MemberExpression"&&"object"in o&&o.object.type==="MetaProperty"&&o.property.type==="Identifier"&&o.object.meta.name==="import"&&o.object.property.name==="meta"&&o.property.name==="url"){let y={type:"Literal",value:n};this.replace(y)}}});function w(o){if(o.type==="ExportNamedDeclaration"){o.declaration&&c.push(...oe(o.declaration).scope.declarations.keys());for(s of o.specifiers)c.push(s.exported.name)}C(o)}function C(o){if(n&&o.source){let h=String(o.source.value);try{h=String(new URL(h))}catch{/^\.{0,2}\//.test(h)&&(h=String(new URL(h,n)))}let D={type:"Literal",value:h};j(o.source,D),o.source=D}let y,v;if(a==="function-body")if(o.type==="ImportDeclaration"||o.type==="ExportAllDeclaration"||o.type==="ExportNamedDeclaration"&&o.source){if(r||b.fail("Cannot use `import` or `export \u2026 from` in `evaluate` (outputting a function body) by default: please set `useDynamicImport: true` (and probably specify a `baseUrl`)",X(o),"recma-document:invalid-esm-statement"),!o.source)throw new Error("Expected `node.source` to be defined");let h={type:"ImportExpression",source:o.source};j(o,h),v={type:"AwaitExpression",argument:h},(o.type==="ImportDeclaration"||o.type==="ExportNamedDeclaration")&&o.specifiers.length===0?y={type:"ExpressionStatement",expression:v}:y={type:"VariableDeclaration",kind:"const",declarations:o.type==="ExportAllDeclaration"?[{type:"VariableDeclarator",id:{type:"Identifier",name:"_exportAll"+ ++E},init:v}]:P(o.specifiers,v)}}else if(o.declaration)y=o.declaration;else{let h=o.specifiers.filter(D=>D.local.name!==D.exported.name).map(D=>({type:"VariableDeclarator",id:D.exported,init:D.local}));h.length>0&&(y={type:"VariableDeclaration",kind:"const",declarations:h})}else y=o;y&&i.push(y)}};function S(p,b){let c={type:"JSXElement",openingElement:{type:"JSXOpeningElement",name:{type:"JSXIdentifier",name:"MDXLayout"},attributes:[{type:"JSXSpreadAttribute",argument:{type:"Identifier",name:"props"}}],selfClosing:!1},closingElement:{type:"JSXClosingElement",name:{type:"JSXIdentifier",name:"MDXLayout"}},children:[{type:"JSXElement",openingElement:{type:"JSXOpeningElement",name:{type:"JSXIdentifier",name:"_createMdxContent"},attributes:[{type:"JSXSpreadAttribute",argument:{type:"Identifier",name:"props"}}],selfClosing:!0},closingElement:null,children:[]}]};b||(c={type:"ConditionalExpression",test:{type:"Identifier",name:"MDXLayout"},consequent:c,alternate:{type:"CallExpression",callee:{type:"Identifier",name:"_createMdxContent"},arguments:[{type:"Identifier",name:"props"}],optional:!1}});let i=p||{type:"Literal",value:null};return i&&i.type==="JSXFragment"&&i.children.length===1&&i.children[0].type==="JSXElement"&&(i=i.children[0]),[{type:"FunctionDeclaration",id:{type:"Identifier",name:"_createMdxContent"},params:[{type:"Identifier",name:"props"}],body:{type:"BlockStatement",body:[{type:"ReturnStatement",argument:i}]}},{type:"FunctionDeclaration",id:{type:"Identifier",name:"MDXContent"},params:[{type:"AssignmentPattern",left:{type:"Identifier",name:"props"},right:{type:"ObjectExpression",properties:[]}}],body:{type:"BlockStatement",body:[{type:"ReturnStatement",argument:c}]}}]}}function O(e){let t=-1,n;for(;++t<e.length;){let r=e[t];n=n?{type:"BinaryExpression",left:n,operator:"+",right:r}:r}if(!n)throw new Error("Expected non-empty `expressions` to be passed");return n}var L={}.hasOwnProperty;function de(e){let{development:t,providerImportSource:n,outputFormat:r}=e||{};return(a,f)=>{let m=ue(a),d=[],g=!1,x=!1,S;if(ce(a,{enter(p){let b=m.map.get(p);(p.type==="FunctionDeclaration"||p.type==="FunctionExpression"||p.type==="ArrowFunctionExpression")&&(d.push({objects:[],components:[],tags:[],references:{},idToInvalidComponentName:new Map,node:p}),M(p,"MDXContent")&&b&&!k(b,"MDXLayout")&&d[0].components.push("MDXLayout"));let c=d[0];if(!(!c||!M(c.node,"_createMdxContent")&&!n)&&(b&&(b.node=p,S=b),S&&p.type==="JSXElement")){let i=p.openingElement.name;if(i.type==="JSXMemberExpression"){let u=[];for(;i.type==="JSXMemberExpression";)u.unshift(i.property.name),i=i.object;u.unshift(i.name);let E=u.join("."),l=i.name,I=k(S,l);if(!L.call(c.references,E)){let s=S.parent;(!I||s&&s.node.type==="FunctionDeclaration"&&M(s.node,"_createMdxContent"))&&(c.references[E]={node:p,component:!0})}!c.objects.includes(l)&&!I&&c.objects.push(l)}else if(i.type!=="JSXNamespacedName"){if(J(i.name)&&!/^[a-z]/.test(i.name)){let u=i.name;k(S,u)||(u!=="MDXLayout"&&!L.call(c.references,u)&&(c.references[u]={node:p,component:!0}),c.components.includes(u)||c.components.push(u))}else if(!(p.data&&p.data._mdxExplicitJsx)){let u=i.name;c.tags.includes(u)||c.tags.push(u);let E=["_components",u];if(J(u)===!1){let l=c.idToInvalidComponentName.get(u);l===void 0&&(l=`_component${c.idToInvalidComponentName.size}`,c.idToInvalidComponentName.set(u,l)),E=[l]}p.openingElement.name=_(E),p.closingElement&&(p.closingElement.name=_(E))}}}},leave(p){let b=[],c=[],i=[],u=[];if(S&&S.node===p&&(S=S.parent),p.type==="FunctionDeclaration"||p.type==="FunctionExpression"||p.type==="ArrowFunctionExpression"){let E=p,l=d[d.length-1],I;for(I of l.tags)b.push({type:"Property",kind:"init",key:J(I)?{type:"Identifier",name:I}:{type:"Literal",value:I},value:{type:"Literal",value:I},method:!1,shorthand:!1,computed:!1});c.push(...l.components);for(I of l.objects)c.includes(I)||c.push(I);let s=[];if(b.length>0||c.length>0||l.idToInvalidComponentName.size>0){n&&(g=!0,i.push({type:"CallExpression",callee:{type:"Identifier",name:"_provideComponents"},arguments:[],optional:!1})),(M(l.node,"MDXContent")||M(l.node,"_createMdxContent"))&&i.push(F(["props","components"])),(b.length>0||i.length>1)&&i.unshift({type:"ObjectExpression",properties:b});let y=i.length>1?{type:"CallExpression",callee:F(["Object","assign"]),arguments:i,optional:!1}:i[0].type==="MemberExpression"?{type:"LogicalExpression",operator:"||",left:i[0],right:{type:"ObjectExpression",properties:[]}}:i[0],v;if(c.length>0&&(v={type:"ObjectPattern",properties:c.map(h=>({type:"Property",kind:"init",key:{type:"Identifier",name:h==="MDXLayout"?"wrapper":h},value:{type:"Identifier",name:h},method:!1,shorthand:h!=="MDXLayout",computed:!1}))}),l.tags.length>0&&(u.push({type:"VariableDeclarator",id:{type:"Identifier",name:"_components"},init:y}),y={type:"Identifier",name:"_components"}),M(l.node,"_createMdxContent"))for(let[h,D]of l.idToInvalidComponentName)u.push({type:"VariableDeclarator",id:{type:"Identifier",name:D},init:{type:"MemberExpression",object:{type:"Identifier",name:"_components"},property:{type:"Literal",value:h},computed:!0,optional:!1}});v&&u.push({type:"VariableDeclarator",id:v,init:y}),u.length>0&&s.push({type:"VariableDeclaration",kind:"const",declarations:u})}let w;for(w in l.references)if(L.call(l.references,w)){let y=w.split("."),v=0;for(;++v<y.length;){let h=y.slice(0,v).join(".");L.call(l.references,h)||(l.references[h]={node:l.references[w].node,component:!1})}}let C=Object.keys(l.references).sort(),o=-1;for(;++o<C.length;){let y=C[o],v=l.references[y],h=se(me(v.node)),D=[{type:"Literal",value:y},{type:"Literal",value:v.component}];x=!0,t&&h!=="1:1-1:1"&&D.push({type:"Literal",value:h}),s.push({type:"IfStatement",test:{type:"UnaryExpression",operator:"!",prefix:!0,argument:F(y.split("."))},consequent:{type:"ExpressionStatement",expression:{type:"CallExpression",callee:{type:"Identifier",name:"_missingMdxReference"},arguments:D,optional:!1}},alternate:null})}s.length>0&&(E.body.type!=="BlockStatement"&&(E.body={type:"BlockStatement",body:[{type:"ReturnStatement",argument:E.body}]}),E.body.body.unshift(...s)),d.pop()}}}),g&&n&&a.body.unshift(ye(n,r)),x){let p=[{type:"Literal",value:"Expected "},{type:"ConditionalExpression",test:{type:"Identifier",name:"component"},consequent:{type:"Literal",value:"component"},alternate:{type:"Literal",value:"object"}},{type:"Literal",value:" `"},{type:"Identifier",name:"id"},{type:"Literal",value:"` to be defined: you likely forgot to import, pass, or provide it."}],b=[{type:"Identifier",name:"id"},{type:"Identifier",name:"component"}];t&&(p.push({type:"ConditionalExpression",test:{type:"Identifier",name:"place"},consequent:O([{type:"Literal",value:"\nIt\u2019s referenced in your code at `"},{type:"Identifier",name:"place"},{type:"Literal",value:(f.path?"` in `"+f.path:"")+"`"}]),alternate:{type:"Literal",value:""}}),b.push({type:"Identifier",name:"place"})),a.body.push({type:"FunctionDeclaration",id:{type:"Identifier",name:"_missingMdxReference"},generator:!1,async:!1,params:b,body:{type:"BlockStatement",body:[{type:"ThrowStatement",argument:{type:"NewExpression",callee:{type:"Identifier",name:"Error"},arguments:[O(p)]}}]}})}}}function ye(e,t){let n=[{type:"ImportSpecifier",imported:{type:"Identifier",name:"useMDXComponents"},local:{type:"Identifier",name:"_provideComponents"}}];return t==="function-body"?{type:"VariableDeclaration",kind:"const",declarations:P(n,F(["arguments",0]))}:{type:"ImportDeclaration",specifiers:n,source:{type:"Literal",value:e}}}function M(e,t){return!!(e&&"id"in e&&e.id&&e.id.name===t)}function k(e,t){let n=e;for(;n;){if(n.declarations.has(t))return!0;n=n.parent}return!1}function fe(e){let{SourceMapGenerator:t}=e||{};Object.assign(this,{Compiler:n});function n(r,a){let f=t?T(r,{filePath:a.path||"unknown.mdx",SourceMapGenerator:t,handlers:A}):T(r,{handlers:A});return a.map=f.map,f.value}}function he(e){return t=>xe(t,e)}function Ee(){return e=>{ge(e,"raw",(t,n,r)=>{if(r&&typeof n=="number")return r.children.splice(n,1),n})}}function ve(){return e=>{be(e,(t,n,r)=>{let a=-1,f=!0,m=!1;if(r&&typeof n=="number"&&t.type==="paragraph"){let d=t.children;for(;++a<d.length;){let g=d[a];if(g.type==="mdxJsxTextElement"||g.type==="mdxTextExpression")m=!0;else if(!(g.type==="text"&&/^[\t\r\n ]+$/.test(String(g.value)))){f=!1;break}}if(f&&m){a=-1;let g=[];for(;++a<d.length;){let x=d[a];x.type==="mdxJsxTextElement"&&(x.type="mdxJsxFlowElement"),x.type==="mdxTextExpression"&&(x.type="mdxFlowExpression"),x.type==="text"&&/^[\t\r\n ]+$/.test(String(x.value))||g.push(x)}return r.children.splice(n,1,...g),n}}if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement"){let d=t.data||(t.data={});d._mdxExplicitJsx=!0}})}}var Ie=["mdxFlowExpression","mdxJsxFlowElement","mdxJsxTextElement","mdxTextExpression","mdxjsEsm"],Se=De.env.NODE_ENV==="development",R=["filepath","compilers","hastPlugins","mdPlugins","skipExport","wrapExport"];function z(e){let{development:t,jsx:n,format:r,outputFormat:a,providerImportSource:f,recmaPlugins:m,rehypePlugins:d,remarkPlugins:g,remarkRehypeOptions:x,elementAttributeNameCase:S,stylePropertyNameCase:p,SourceMapGenerator:b,...c}=e||{},i=t??Se,u=-1;for(;++u<R.length;){let I=R[u];if(e&&I in e)throw new Error("`options."+I+"` is no longer supported. Please see <https://mdxjs.com/migrating/v2/> for more information")}if(r==="detect")throw new Error("Incorrect `format: 'detect'`: `createProcessor` can support either `md` or `mdx`; it does not support detecting the format");let E=$().use(K);r!=="md"&&E.use(H);let l=x?x.passThrough||[]:[];return E.use(ve).use(g||[]).use(Q,{...x,allowDangerousHtml:!0,passThrough:[...l,...Ie]}).use(d||[]),r==="md"&&E.use(Ee),E.use(he,{elementAttributeNameCase:S,stylePropertyNameCase:p}).use(le,{...c,outputFormat:a}).use(de,{development:i,providerImportSource:f,outputFormat:a}),n||E.use(re,{development:i,outputFormat:a}),E.use(fe,{SourceMapGenerator:b}).use(m||[]),E}var je=Ce.map(e=>"."+e);function U(e,t){let n=Me(e)?e:new we(e),{format:r,...a}=t||{};return{file:n,options:{format:r==="md"||r==="mdx"?r:n.extname&&(a.mdExtensions||je).includes(n.extname)?"md":"mdx",...a}}}function Me(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Xe(e,t){let{file:n,options:r}=U(e,t);return z(r).process(n)}function Fe(e,t){let{file:n,options:r}=U(e,t);return z(r).processSync(n)}var Le=Object.getPrototypeOf(q).constructor;async function q(e,t){return new Le(String(e))(t)}function Je(e,t){return new Function(String(e))(t)}function G(e){let{development:t,Fragment:n,jsx:r,jsxs:a,jsxDEV:f,useMDXComponents:m,...d}=e||{};if(!n)throw new Error("Expected `Fragment` given to `evaluate`");if(t){if(!f)throw new Error("Expected `jsxDEV` given to `evaluate`")}else{if(!r)throw new Error("Expected `jsx` given to `evaluate`");if(!a)throw new Error("Expected `jsxs` given to `evaluate`")}return{compiletime:{...d,development:t,outputFormat:"function-body",providerImportSource:m?"#":void 0},runtime:{Fragment:n,jsx:r,jsxs:a,jsxDEV:f,useMDXComponents:m}}}async function tt(e,t){let{compiletime:n,runtime:r}=G(t);return q(await Xe(e,n),r)}function nt(e,t){let{compiletime:n,runtime:r}=G(t);return Je(Fe(e,n),r)}export{Xe as compile,Fe as compileSync,z as createProcessor,tt as evaluate,nt as evaluateSync,Ie as nodeTypes,q as run,Je as runSync};
//# sourceMappingURL=mdx.bundle.mjs.map