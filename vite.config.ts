import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), tsconfigPaths()],
	resolve: {
		alias: {
			'@': '/src',
			'@/components': '/src/components',
			'@/pages': '/src/pages',
			'@/layouts': '/src/layouts',
			'@/libs': '/src/libs',
			'@/routes': '/src/routes',
			'@/stores': '/src/stores',
			'@/services': '/src/services',
			'@/entities': '/src/entities',
			'@/config': '/src/config',
			'@/assets': '/src/assets',
		},
	},
	build: {
		outDir: 'build',
	},
})
