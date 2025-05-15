import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "es2020",
    outDir: "dist",
    assetsDir: "assets",
    minify: "esbuild", // más rápido que terser
    cssCodeSplit: true,
    sourcemap: false, // desactívalo en producción para performance
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Divide librerías grandes en chunks separados
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor-react";
            if (id.includes("lucide-react")) return "vendor-icons";
            return "vendor";
          }
        },
      },
    },
  },
}));
