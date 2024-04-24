import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm"],
  entry: ["./src/index.ts", "./src/listenProcess.ts"],
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
