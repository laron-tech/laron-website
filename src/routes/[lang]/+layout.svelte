<script lang="ts">
	import '../../app.scss';
	import Navbar from '$components/layouts/Navbar.svelte';
</script>

<div class="relative">
	<Navbar />
	<slot />
</div>
