// vite.config.js
import { defineConfig } from "file:///C:/Users/quisn/OneDrive/Desktop/Project-Astro/codecima-web-scapes/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/quisn/OneDrive/Desktop/Project-Astro/codecima-web-scapes/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///C:/Users/quisn/OneDrive/Desktop/Project-Astro/codecima-web-scapes/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\quisn\\OneDrive\\Desktop\\Project-Astro\\codecima-web-scapes";
var vite_config_default = defineConfig(function(_a) {
  var mode = _a.mode;
  return {
    server: {
      host: "::",
      port: 8080
    },
    plugins: [
      react(),
      mode === "development" && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxxdWlzblxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFByb2plY3QtQXN0cm9cXFxcY29kZWNpbWEtd2ViLXNjYXBlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccXVpc25cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxQcm9qZWN0LUFzdHJvXFxcXGNvZGVjaW1hLXdlYi1zY2FwZXNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3F1aXNuL09uZURyaXZlL0Rlc2t0b3AvUHJvamVjdC1Bc3Ryby9jb2RlY2ltYS13ZWItc2NhcGVzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIG1vZGUgPSBfYS5tb2RlO1xuICAgIHJldHVybiAoe1xuICAgICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgICAgIGhvc3Q6IFwiOjpcIixcbiAgICAgICAgICAgIHBvcnQ6IDgwODAsXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIHJlYWN0KCksXG4gICAgICAgICAgICBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCksXG4gICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtWSxTQUFTLG9CQUFvQjtBQUNoYSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSGhDLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYSxTQUFVLElBQUk7QUFDdEMsTUFBSSxPQUFPLEdBQUc7QUFDZCxTQUFRO0FBQUEsSUFDSixRQUFRO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDVjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sU0FBUyxpQkFBaUIsZ0JBQWdCO0FBQUEsSUFDOUMsRUFBRSxPQUFPLE9BQU87QUFBQSxJQUNoQixTQUFTO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDSCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDeEM7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
