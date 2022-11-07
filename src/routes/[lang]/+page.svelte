<script lang="ts">
	import '$styles/home.scss';
	import type { PageData } from './$types';
	import Orbit from '$components/svg/Orbit.svelte';
	import { onMount } from 'svelte';

	export let data: PageData;

	let scrollY = 0;

	function parallax(el: HTMLElement) {
		let top = el.offsetTop;
		let title = el.querySelector('h2')!;
		let contents = el.querySelectorAll('p')!;
		let img = el.querySelector('.img-container')! as HTMLElement;

		window.addEventListener('scroll', () => {
			scrollY = window.scrollY;
			let offset = scrollY - top;
			title.style.transform = `translateY(${offset * 1.5}px)`;
			title.style.opacity = `${1 - offset / 200}`;
			if (offset > -50 && offset < 50) {
				title.classList.add('active');
			} else {
				title.classList.remove('active');
			}

			contents.forEach((content) => {
				content.style.opacity = `${offset}`;
			});

			let scale = 1 + offset / 500;
			img.style.transform = `scale(${scale})`;
		});
	}

	onMount(() => {
		let sections = document.querySelectorAll('.section');
		let orbit = document.getElementById('laron-orbits');
		sections[0].appendChild(orbit!);
		let h1 = sections[0].querySelector('h1')!;
		let p = sections[0].querySelector('p')!;

		sections.forEach((section, i) => {
			if (i > 0) {
				parallax(section as HTMLElement);
			}
		});

		window.addEventListener('scroll', () => {
			scrollY = window.scrollY;
			h1.style.transform = `translateY(${-scrollY * 0.5}px)`;

			h1.style.opacity = `${1 - scrollY / 200}`;
			orbit!.style.scale = `${1 - scrollY / 200}`;
			p.style.transform = `translateY(${scrollY * 0.5}px)`;
			p.style.scale = `${1 + scrollY / 200}`;
			p.style.opacity = `${1 - scrollY / 200}`;
		});
	});

	$: content = data.content;
	$: title = data.metadata.title;
	$: description = data.metadata.description;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<!-- <meta property="og:url" content={url} /> -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/favicon.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<!-- <meta property="twitter:url" content={url} /> -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content="/favicon.png" />
</svelte:head>

<Orbit />
<div class="home relative">
	{@html content}
</div>
