import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split large third-party libs into their own cacheable chunks so the
        // entry chunk stays small and vendors are reused across visits.
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@phosphor-icons")) return "icons";
            if (id.includes("framer-motion")) return "motion";
            if (
              id.includes("react-router") ||
              id.includes("react-dom") ||
              /node_modules[\\/]react[\\/]/.test(id) ||
              id.includes("scheduler")
            ) {
              return "react-vendor";
            }
          }
        },
      },
    },
  },
});
