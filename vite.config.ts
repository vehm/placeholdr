import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		watch: {
			usePolling: true,
		},
	},
	resolve: {
		alias: [
			{
				find: "./runtimeConfig",
				replacement: "./runtimeConfig.browser",
			},
			{
				find: "/@",
				replacement: path.resolve(__dirname, "./src"),
			},
			{
				find: "/@components",
				replacement: path.resolve(__dirname, "./src/components"),
			},
			{
				find: "/@contexts",
				replacement: path.resolve(__dirname, "./src/contexts"),
			},
			{
				find: "/@reducers",
				replacement: path.resolve(__dirname, "./src/reducers"),
			},
			{
				find: "/@routes",
				replacement: path.resolve(__dirname, "./src/routes"),
			},
			{
				find: "/@types",
				replacement: path.resolve(__dirname, "./src/types"),
			},
			{
				find: "/@utils",
				replacement: path.resolve(__dirname, "./src/utils"),
			},
			{
				find: "/@hooks",
				replacement: path.resolve(__dirname, "./src/hooks"),
			},
		],
	},
});
