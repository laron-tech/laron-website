<script lang="ts">
	import { Template } from '$lib/templates';
	import Home from '$components/templates/Home.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: title = `Laron | ${data.title}`;
	$: description = data.description;
	$: template = data.template;
	$: url = data.url;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/laron.svg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content="/laron.svg" />
</svelte:head>

{#if template === Template.home}
	<Home content={data.page} />
{:else}
	<p>Template not found</p>
{/if}
