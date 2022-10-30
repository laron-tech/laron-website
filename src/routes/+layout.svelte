<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	import * as THREE from 'three';
	import GLOBE from 'vanta/dist/vanta.globe.min';

	import Navbar from '$components/navbar/Navbar.svelte';
	import Sidebar from '$components/sidebar/Sidebar.svelte';
	import Footer from '$components/footer/Footer.svelte';
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

	let vanta = (node: HTMLElement) => {
		if (node) {
			GLOBE({
				el: node,
				THREE,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 1.0,
				scaleMobile: 1.0,
				color: 0x2563eb,
				color2: 0x5b21b6,
				backgroundColor: 0x0
			});
		}
	};

	$: colorClass = isDarkMode ? 'dark' : 'light';
</script>

<div class="laron-app relative {colorClass}">
	<div use:vanta class="vanta absolute top-0 w-screen h-screen" />
	<Navbar
		onHamburgerClick={() => {
			isShowSidebar = !isShowSidebar;
		}}
	/>
	<Sidebar active={isShowSidebar} />
	<div class="h-screen w-screen overflow-auto">
		<slot />
		<Footer />
	</div>
</div>

<style>
	.vanta {
		z-index: -1;
	}
	.laron-app.dark {
		@apply text-gray-100;
	}

	.laron-app.light {
		@apply text-gray-900;
	}

	/* global styles */
	.laron-app.dark > :global(.laron-sidebar .sidebar-content) {
		@apply bg-gray-900 text-gray-100;
	}

	.laron-app.light > :global(.laron-sidebar .sidebar-content) {
		@apply bg-gray-100 text-gray-900;
	}
</style>
