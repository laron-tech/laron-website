<script lang="ts">
	import { onMount } from 'svelte';

	export let content: string;
	import * as THREE from 'three';
	import GLOBE from 'vanta/dist/vanta.globe.min';

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

	onMount(() => {
		import('$lib/github/renderTeams').then(({ renderTeams }) => {
			renderTeams();
		});
	});
</script>

<div class="home-section text-gray-100">
	{@html content}
</div>
<div class="scene w-screen h-screen fixed" use:vanta />

<style lang="scss" global>
	.scene {
		top: 0;
		z-index: -1;
	}

	.section {
		@apply min-h-screen w-screen flex justify-center items-center text-center;

		&:nth-child(odd) {
			@apply bg-gray-900;
		}

		.inner {
			@apply w-4/6 md:w-1/3 py-8;
		}

		&#core-team .inner {
			@apply w-5/6;
		}

		&.section-1 p {
			@apply text-xl;
		}

		h1 {
			@apply text-4xl font-bold;
		}

		h2 {
			@apply text-2xl font-bold;
		}
	}
</style>
