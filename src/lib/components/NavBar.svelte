<script>
    import NavButton from "$lib/components/NavButton.svelte";
    import { Hamburger } from 'svelte-hamburgers';
    import Menu from '$lib/components/Menu.svelte';

    let open;
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

<nav class="lg:h-16 sm:h-fit w-screen fixed top-0 bg-white opacity-95 border-b-4 z-10">
    <!-- Desktop -->
    <div class="h-full w-full hidden sm:flex justify-center items-center">
        {#each navOptions as navOption}
            <NavButton data={navOption}/>
        {/each}
    </div>

    <!-- Mobile -->
    <div class="h-full w-full flex flex-col sm:hidden">
        <Hamburger bind:open --padding="1rem" />
        <Menu bind:open {navOptions}/>
    </div>
</nav>

