<script>
    import NavButton from "$lib/components/NavButton.svelte";
    import { Hamburger } from 'svelte-hamburgers';
    import Menu from '$lib/components/Menu.svelte';

    let open;
    let navOptions = [
        { link: '/#lead', title: 'Home' },
        { link: '/#about', title: 'About' },
        { link: '/#education', title: 'Education' },
        { link: '/#skills', title: 'Skills' }, 
        { link: '/#experience', title: 'Experience' },
        { link: '/#contact', title: 'Contact' },
        { link: '/materials', title: 'Stack' },
    ];
</script>   

<nav class="bg-white h-16 w-screen fixed top-0 z-50 opacity-95 border-b-4">
    <!-- Desktop -->
    <div class="h-full w-full hidden md:flex justify-between">
        <div class="flex pl-16">
            <NavButton data={{ link: '/#lead', title: 'Steven Castro'}}/>
        </div>

        <div class="flex pr-32">
            {#each navOptions as navOption}
                <NavButton data={navOption}/>
            {/each}      
        </div>

    </div>

    <!-- Mobile -->
    <div class="h-full w-full block md:hidden">
        <Hamburger bind:open --padding="1rem"/>
        <div class="h-fit w-3/4 flex flex-col">
            <Menu bind:open {navOptions}/>
        </div>
    </div>
</nav>