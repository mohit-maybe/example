import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    ssr: false,
    prerender: {
      enabled: true,
      routes: [
        "/",
        "/about",
        "/contact",
        "/work",
        "/projects/axion-ai",
        "/projects/yatra-notes",
        "/projects/product-evaluation-harness",
        "/projects/kisan-saathi",
      ],
    },
  },
});
