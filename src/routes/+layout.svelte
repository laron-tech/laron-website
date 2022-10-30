<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	import Navbar from '$components/navbar/Navbar.svelte';
	import Sidebar from '$components/sidebar/Sidebar.svelte';
	import '$styles/root.css';

	let isDarkMode = false;
	let isShowSidebar = false;

	onMount(() => {
		if (browser) {
			const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
			isDarkMode = prefersDarkScheme.matches;
			prefersDarkScheme.addEventListener('change', (mediaQuery) => {
				isDarkMode = mediaQuery.matches;
			});
		}
	});

	$: colorClass = isDarkMode ? 'dark' : 'light';
</script>

<div class="laron-app relative {colorClass}">
	<Navbar
		onHamburgerClick={() => {
			isShowSidebar = !isShowSidebar;
		}}
	/>
	<Sidebar active={isShowSidebar} />
	<div class="h-screen w-screen overflow-auto pt-20">
		<slot />
	</div>
</div>

<style>
	.laron-app.dark {
		@apply bg-gray-900 text-gray-100;
	}

	.laron-app.light {
		@apply bg-gray-100 text-gray-900;
	}

	/* global styles */
	.laron-app.dark > :global(.laron-sidebar .sidebar-content) {
		@apply bg-gray-900 text-gray-100;
	}

	.laron-app.light > :global(.laron-sidebar .sidebar-content) {
		@apply bg-gray-100 text-gray-900;
	}
</style>
