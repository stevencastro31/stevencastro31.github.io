<script>
    // Source: https://svelte.dev/repl/f2397020cba34f5e9cb96336005f3435?version=3.37.0
	export let skills;    
    import { flip } from 'svelte/animate'
	import SkillCard from './SkillCard.svelte';
    
	const dragDuration = 300
	let cards = Array(skills.length).fill().map((_, i) => i);
	let delays = Array(skills.length).fill().map((_, i) => i * 50);
	let draggingCard;
	let animatingCards = new Set();

	function swapWith(card) {
		if (draggingCard === card || animatingCards.has(card)) { return; }
		animatingCards.add(card);
		setTimeout(() => animatingCards.delete(card), dragDuration);
		const cardAIndex = cards.indexOf(draggingCard);
		const cardBIndex = cards.indexOf(card);
		cards[cardAIndex] = card;
		cards[cardBIndex] = draggingCard;
	}
</script>

<div class="flex flex-wrap justify-center w-4/5 lg:w-3/5">
	{#each cards as card, i (card)}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div animate:flip={{ duration: dragDuration }} draggable="true"
			 data-aos="fade-up" data-aos-delay={delays[i]}
			 on:dragstart={() => draggingCard = card} on:dragend={() => draggingCard = undefined}
		     on:dragenter={() => swapWith(card)} on:dragover|preventDefault>
            <SkillCard data={skills[card]}/>
	</div>
	{/each}
</div>