import { URLImport } from "@reejs/imports";
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
  ]
}
//# sourceURL=packit.config.js