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

<nav class="bg-white h-16 w-screen fixed top-0 z-50 opacity-95 border-b-4">
    <div class="h-full w-full hidden md:flex justify-center">
        {#each navOptions as navOption}
            <NavButton data={navOption}/>
        {/each}
    </div>

    <div class="h-full w-full block md:hidden">
        <Hamburger bind:open --padding="1rem"/>
        <div class="h-fit w-3/4 flex flex-col">
            <Menu bind:open {navOptions}/>
        </div>
    </div>
</nav>