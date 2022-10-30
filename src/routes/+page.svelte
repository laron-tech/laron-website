<script lang="ts">
	import TeamInfo from '$components/cards/TeamInfo.svelte';
	import LaronLogo from '$components/images/LaronLogo.svelte';
	import { teams, type User } from '$lib/const/teams';
	import { onMount } from 'svelte';

	let users: User[] = [];

	onMount(async () => {
		for (const team of teams) {
			const res = await fetch(`https://api.github.com/users/${team.github}`);
			const data = await res.json();
			users = [...users, data];
		}
	});
</script>

<div class="md:px-32 -mt-16 px-6 h-2/3 flex items-center justify-center overflow-hidden text-gray-100">
	<div class="mt-10">
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
<div class="bg-blue-800 px-6 md:px-32 py-4 text-gray-100">
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
		<a class="underline decoration-yellow-600 text-yellow-600" href="#team">core team</a>
		responsible for the project.
	</p>
	<br />
	<br />
</div>
<div class="flex justify-center px-6 md:px-32 py-4 text-gray-100">
	<div class="backdrop-blur-sm rounded">
		<div class="flex justify-center my-2">
			<img class="w-14 md:w-28" src="/assets/ethereum.svg" alt="ethereum logo" />
		</div>
		<h1 class="title">What we do?</h1>
		<br />
		<p>
			We are doing research and development that will help the community so that this technology can
			be easier to use and reach a wider range of users.
			<br />
			<br />
			Web3 is a new technology that is still in its infancy, and we are glad to be able to contribute
			to the growth of this technology.
		</p>
		<br />
		<br />
	</div>
</div>
<div id="team" class="bg-gray-900 px-6 md:px-32 py-4 text-gray-100">
	<div class="flex items-center justify-center">
		<div class="w-1/3">
			<LaronLogo class="fill-indigo-700" />
		</div>
	</div>
	<h1 class="title">Core team</h1>
	<br />
	<TeamInfo {teams} {users} />
	<br />
	<br />
</div>

<style>
	.title {
		@apply text-center text-2xl font-bold;
	}
</style>
