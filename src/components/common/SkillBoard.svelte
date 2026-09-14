<script lang="ts">
    import { SvelteSet } from 'svelte/reactivity';
    import { flip } from 'svelte/animate';
    import type { SkillInfo } from '../types/SkillInfo';
	import SkillCard from './SkillCard.svelte';

    let { skills } : { skills: SkillInfo[] } = $props();
	const dragDuration = 300
	// svelte-ignore state_referenced_locally
	const cards: number[] = $state(Array.from({ length: skills.length }, (_, i) => i));

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let draggingCard: any;
	let animatingCards: SvelteSet<number> = new SvelteSet();

	function swapWith(id: number) {
		if (draggingCard === id || animatingCards.has(id)) { return; }
		animatingCards.add(id);
		setTimeout(() => animatingCards.delete(id), dragDuration);
		const cardAIndex = cards.indexOf(draggingCard);
		const cardBIndex = cards.indexOf(id);
		cards[cardAIndex] = id;
		cards[cardBIndex] = draggingCard;
	}

    function dragStart(id: number) {
        draggingCard = id;
    }

    function dragEnd() {
        draggingCard = undefined;
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<!-- credit: https://svelte.dev/repl/f2397020cba34f5e9cb96336005f3435?version=3.37.0 -->

<div class="flex flex-wrap justify-center w-4/5 lg:w-3/5">
	{#each cards as card (card)}
		<div animate:flip={{ duration: dragDuration }} on:dragstart={() => dragStart(card)} on:dragend={() => dragEnd()} on:dragenter={() => swapWith(card)} on:dragover|preventDefault draggable="true">
            <SkillCard info={skills[card]}/>
	    </div>
	{/each}
</div>