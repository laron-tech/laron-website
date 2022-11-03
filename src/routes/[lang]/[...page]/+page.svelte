<script lang="ts">
	import { Template } from '$lib/templates';
	import type { PageData } from './$types';

	export let data: PageData;

	$: title = `Laron | ${data.title}`;
	$: description = data.description;
	$: template = data.template;
	$: url = data.url;
</script>

{#await import('$components/templates/Head.svelte') then { default: Head }}
	<Head {title} {description} {url} />
{/await}

{#if template === Template.home}
	{#await import('$components/templates/Home.svelte') then { default: Home }}
		<Home content={data.page} />
	{/await}
{:else}
	<p>Template not found</p>
{/if}
