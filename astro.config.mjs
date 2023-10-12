import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	build: {
		inlineStylesheets: 'auto'
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@styles/config";`
				}
			}
		},
		resolve: {
			alias: {
				'@components': '/src/components',
				'@functionnal-components': '/src/functionnal-components',
				'@layouts': '/src/layouts',
				'@styles': '/src/styles',
				'@assets': '/src/assets',
				'@scripts': '/src/scripts',
				'@libs': '/src/libs'
			}
		}
	},
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }]
	}
});
