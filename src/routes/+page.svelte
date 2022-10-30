<script lang="ts">
	import * as THREE from 'three';
	import GLOBE from 'vanta/dist/vanta.globe.min';
	import LaronLogo from '$components/images/LaronLogo.svelte';

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
				size: 1.5,
				color: 0x2563eb,
				color2: 0x5b21b6,
				backgroundColor: 0x0
			});
		}
	};
</script>

<div
	use:vanta
	class="relative z-0 md:px-32 -mt-16 px-6 h-2/3 flex items-center justify-center overflow-hidden"
>
	<div>
		<h1 class="text-center text-3xl font-bold">Welcome to Laron</h1>
		<br />
		<p class="text-center">
			Laron is an open source project that focused on building ecosystem on the top of the <a
				class="underline decoration-yellow-600 text-yellow-600"
				href="https://ethereum.org/en/web3/">Web3 technologies</a
			>.
		</p>
	</div>
</div>
<div class="bg-blue-800 border-t border-t-black px-6 md:px-32 py-4">
	<div class="flex items-center justify-center">
		<div class="w-1/3">
			<LaronLogo />
		</div>
	</div>
	<h1 class="title">What is Laron?</h1>
	<br />
	<p>
		Laron is name of the Team, Organization, and Project that's build and deliver the project to the
		community.
		<br />
		<br />
		The Team, Organization, and Project itself was not private, everyone can contribute to the project
		and the team. Even if the project is open source, Laron has the
		<a class="underline decoration-yellow-600 text-yellow-600" href="/teams">core teams</a>
		responsible for the project.
	</p>
	<br />
	<br />
</div>

<style>
	.title {
		@apply text-center text-2xl font-bold;
	}
</style>
