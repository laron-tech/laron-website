<script lang="ts">
	import type { LayoutData } from './$types';
	import '../../app.css';
	import Navbar from '$components/layouts/Navbar.svelte';

	export let data: LayoutData;
</script>

<div class="relative">
	<Navbar />
	<slot />
</div>
