import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
  plugins: [react(), svgr()],
});
