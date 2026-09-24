import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import icons from "unplugin-icons/vite";

const root = import.meta.dirname;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: "/valheim-iconpack-editor/",
    resolve: {
      alias: {
        "@/": `${resolve(root, "src")}/`,
        "#/": `${resolve(root, "src", "lib", "components")}/`,
        "~lodash": `${resolve(root, "src", "lib", "lodash")}`,
      },
    },
    plugins: [svelte(), icons({ compiler: "svelte" })],
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [{ name: "vendor", test: /node_modules/ }],
          },
        },
      },
    },
    define: {
      __DEV_MODE__: JSON.stringify(mode === "development"),
    },
  };
});
