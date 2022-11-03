<script lang="ts">
	import { Template } from '$lib/templates';
	import Home from '$components/templates/Home.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: title = data.title;
	$: description = data.description;
	$: template = data.template;
</script>

<svelte:head>
	<title>Laron | {title}</title>
	<meta name="description" content={description} />
	<!-- twitter specific -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@larontech" />
	<meta name="twitter:title" content="Laron | {title}" />
	<meta name="twitter:description" content={description} />
</svelte:head>

{#if template === Template.home}
	<Home content={data.page} />
{:else}
	<p>Template not found</p>
{/if}
