<script lang="ts">
	import Hamburger from '$components/buttons/Hamburger.svelte';

	let handleClick = () => {
		console.log('clicked');
	};
</script>

<div class="realtive w-screen p-2 fixed top-0 backdrop-blur-sm">
	<div class="flex justify-between items-center">
		<a href="/" />
		<div style="width: 50px; height: 50px;">
			<Hamburger class="stroke-blue-500" on:click={handleClick} />
		</div>
	</div>
</div>

<style>
	a {
		width: 50px;
		height: 50px;
		background-image: url('/laron.svg');
		background-size: cover;
	}
</style>
