<script lang="ts">
	import type { User, Team } from '$lib/const/teams';

	export let users: User[];
	export let teams: Team[];
</script>

<div>
	{#each users as user, i}
		<div class="flex items-center m-2 p-2 rounded shadow-sm shadow-current">
			<img src={user.avatar_url || ''} alt={user.login || ''} class="rounded-full w-1/4" />
			<div class="ml-6">
				<span class="block">{user.name || user.login}</span>
				<span class="block text-green-600">{teams[i].position || ''}</span>
			</div>
		</div>
	{/each}
</div>
