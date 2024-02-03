<script>
    import NavButton from "$lib/components/NavButton.svelte";

    let navOptions = [
        { link: '#lead', title: 'Home' },
        { link: '#about', title: 'About' },
        { link: '#experience', title: 'Experience' },
        { link: '#education', title: 'Education' },
        { link: '#projects', title: 'Projects' },
        { link: '#skills', title: 'Skills' },
        { link: '#contact', title: 'Contact' },
        // { link: '#source', title: 'Source' },                    // Different Page?
    ];
</script>   

<nav class="lg:h-16 sm:h-fit w-full fixed top-0 bg-white opacity-95 border-b-4 z-10">
    <div class="h-full w-full flex justify-center items-center flex-wrap ">
        {#each navOptions as navOption}
            <NavButton data={navOption}/>
        {/each}
    </div>
</nav>