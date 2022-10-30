<script lang="ts">
	import AnimatedHamburger from '$components/buttons/AnimatedHamburger.svelte';
	import LaronLogo from '$components/images/LaronLogo.svelte';

	export let onHamburgerClick = () => {
		return;
	};

	let active = false;
	let handleClick = () => {
		active = !active;
		onHamburgerClick();
	};
</script>

<div class="absolute w-screen p-2 flex justify-between bg-inherit shadow-md">
	<a href="/" class="w-1/3 md:w-2/12 z-10">
		<LaronLogo useLabel />
	</a>
	<AnimatedHamburger
		class="relative stroke-blue-500 z-10 h-8 md:h-14"
		{active}
		on:click={handleClick}
	/>
</div>
