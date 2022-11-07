import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
		scss: {
			includePaths: ['src']
		}
	}),

	kit: {
		adapter: adapter({
			edge: false,
			split: true,
		}),
		alias: {
			$components: 'src/components/',
			$styles: 'src/styles/',
			$contents: 'src/contents/'
		}
	}
};

export default config;
