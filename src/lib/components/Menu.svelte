<script>
    import { scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
    import NavButton from './NavButton.svelte';
    
    export let navOptions
    export let open;
</script>

{#if open}
    {#each navOptions as navOption, i}
        <NavButton data={navOption} isMenu=true index={i}/>
    {/each}

    <hr class="z-20 bg-black" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}

<style>

</style>
