<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon-me.png';
	import FooterSection from '../components/sections/FooterSection.svelte';
	import NavigationSection from '../components/sections/NavigationSection.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Steven Castro</title>
	<!-- <style>@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto+Slab:wght@100..900&display=swap');</style> -->
	<style>@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@100..900&display=swap');</style>
</svelte:head>

<div class="font-[Prompt]">
	<NavigationSection/>
	{@render children()}
	<FooterSection/>
</div>

