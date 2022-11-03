import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),

	kit: {
		adapter: vercel({
			edge: true,
			external: [],
			split: false,
		}),
		alias: {
			$components: 'src/components/',
			$contents: 'src/contents/',
		},
	}
};

export default config;
