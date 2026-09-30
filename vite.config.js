import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" membuat path aset relatif, jadi jalan di GitHub Pages
// baik di username.github.io maupun username.github.io/nama-repo
export default defineConfig({
  base: "./",
  plugins: [react()],
});