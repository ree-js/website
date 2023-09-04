import { URLImport, NativeImport } from "@reejs/imports";

let fs = await NativeImport("node:fs");

export default {
  writers: [
    {
      "name": "add_mdxPlugins",
      "index": -1,
      "run": async (h, s) => {
        //add default plugins to mdx compiler. We would be using gfm & rehype-highlight
        let rehypeHighlight = await URLImport("https://esm.sh/rehype-highlight@6.0.0?bundle");
        let remarkGfm = await URLImport("https://esm.sh/remark-gfm@3.0.1?bundle");
        globalThis.mdxPlugins = [
          rehypeHighlight, remarkGfm
        ];
        return {
          DATA: h.DATA,
          mainFile: h.mainFile,
        }
      }
    }
  ],
  loaders:[{
    name: "css_loader",
    load: async (id)=>{
      if(id.endsWith(".css")){
        //convert css to string
        let file = fs.readFileSync(id);
        let code = `if(globalThis.window && !globalThis.Deno){
          let style = document.createElement("style");
          style.innerHTML = \`${file}\`;
          document.head.appendChild(style);
        };
        export default {};
        `;
        return {code};
      }
    }}
  ]
}