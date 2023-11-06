import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikReact } from '@builder.io/qwik-react/vite';
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(),qwikReact(), tsconfigPaths({})],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
