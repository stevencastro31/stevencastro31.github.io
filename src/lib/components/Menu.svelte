<script>
    import NavButton from './NavButton.svelte';
    
    export let navOptions
    export let open;
</script>

{#if open}
    <!-- <div class="h-16 w-screen invisible"></div> -->
    {#each navOptions as navOption}
        <NavButton data={navOption} isMenu=true/>
    {/each}
{/if}

<style>

</style>
