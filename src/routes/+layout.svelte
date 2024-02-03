<script>
    import "../app.css";
    import NavButton from "$lib/components/NavButton.svelte";

    let navOptions = [
        { link: '/', title: 'About' },
        { link: '/', title: 'Exprience' },
        { link: '/', title: 'Education' },
        { link: '/', title: 'Project' },
        { link: '/', title: 'Skills' },
        { link: '/', title: 'Contact' },
    ];
</script>

<nav class="fixed top-0 w-full bg-white h-16">
    <div class="h-full w-full flex justify-center items-center">
        {#each navOptions as navOption}
            <NavButton data={navOption}/>
        {/each}
    </div>
</nav>

<slot></slot>

<style>

</style>