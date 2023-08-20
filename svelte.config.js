import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import adapterMulti from '@macfja/svelte-multi-adapter';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapterMulti([
			adapterStatic({ pages: 'build-static', assets: 'build-static', precompress: false }),
			adapterNode({ out: 'build-node', precompress: false })
		])
	}
};

export default config;
