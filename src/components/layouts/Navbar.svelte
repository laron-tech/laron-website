<script lang="ts">
	import Hamburger from '$components/buttons/Hamburger.svelte';

	let handleClick = () => {
		return;
	};
</script>

<div class="realtive w-screen p-2 fixed top-0 backdrop-blur-sm">
	<div class="flex justify-between items-center">
		<a href="/">.</a>
		<div style="width: 50px; height: 50px;">
			<Hamburger class="stroke-blue-500" on:click={handleClick} />
		</div>
	</div>
</div>

<style>
	a {
		color: transparent;
		width: 50px;
		height: 50px;
		background-image: url('/laron.svg');
		background-size: cover;
	}
</style>
