<script lang="ts">
	import { page } from '$app/stores';
	import Head from '$components/templates/Head.svelte';
	import { extractFrontMatter, transform } from '$lib/markdown';

	let contents = async () => {
		const status = $page.status;
		const lang = $page.params.lang;
		let res = await fetch(`/contents?path=${lang}/${status}/index.md`);
		let json = await res.json();
		return json;
	};

	let loadData = async () => {
		const md = await contents();
		let { metadata, body } = extractFrontMatter(md);
		let html = transform(body);
		let { title, description } = metadata;
		let url = $page.url.toString();
		return { title, description, html, url };
	};
</script>

{#await loadData() then { title, description, html, url }}
	<Head {title} {description} {url} />

	<div class="w-screen h-screen flex justify-center items-center">
		<div class="inner w-1/2 -mt-20">
			{@html html}
		</div>
	</div>
{/await}

<style lang="scss">
	.inner {
		:global(h1) {
			@apply text-8xl font-extrabold text-center text-red-100;
		}

		:global(p) {
			@apply text-xl text-center text-red-400;
		}
	}
</style>
