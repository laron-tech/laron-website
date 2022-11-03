<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let active = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<button class={$$props.class} class:active on:click={handleClick} aria-expanded={active}>
	<svg width="100%" height="100%" viewBox="0 0 100 100">
		<path
			class="line line1 stroke-inherit"
			d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
		/>
		<path class="line line2 stroke-inherit" d="M 20,50 H 80" />
		<path
			class="line line3 stroke-inherit"
			d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
		/>
	</svg>
</button>

<style>
	.line {
		fill: none;
		stroke-width: 4;
		transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	.line1 {
		stroke-dasharray: 60 207;
		stroke-width: 4;
	}
	.line2 {
		stroke-dasharray: 60 60;
		stroke-width: 4;
	}
	.line3 {
		stroke-dasharray: 60 207;
		stroke-width: 4;
	}
	.active .line1 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 4;
	}
	.active .line2 {
		stroke-dasharray: 1 60;
		stroke-dashoffset: -30;
		stroke-width: 4;
	}
	.active .line3 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 4;
	}
</style>
