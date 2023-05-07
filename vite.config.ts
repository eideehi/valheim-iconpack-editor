import { resolve } from "path";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: "/valheim-iconpack-editor/",
    resolve: {
      alias: {
        "@/": `${resolve(__dirname, "src")}/`,
        "#/": `${resolve(__dirname, "src", "lib", "components")}/`,
        "~lodash": `${resolve(__dirname, "src", "lib", "lodash")}`,
      },
    },
    plugins: [svelte(), icons({ compiler: "svelte" }), splitVendorChunkPlugin()],
    define: {
      __DEV_MODE__: JSON.stringify(mode === "development"),
    },
  };
});
