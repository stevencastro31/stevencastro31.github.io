<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

     export let index = 1;
     export let isMenu = false;
     export let data;

     let settings = { y: -15, delay: 100 * index };
</script>

{#if isMenu}
    <!-- Mobile  -->
    <a href={data.link} 
        class="h-full lg:w-fit sm:w-screen p-4 rounded-sm text-left ml-4 hover:bg-gray-200 
            active:bg-gray-300 active:-translate-y-0.5 active:font-bold transition:fly={settings} 
              active:border-l-blue-500 active:border-opacity-100 border-opacity-0 border-l-4 ">
        {data.title}
    </a>
{:else}
    <!-- Desktop  -->
    <a href={data.link} 
        class="h-full lg:w-fit sm:w-screen p-4 rounded-sm text-center hover:bg-gray-200 
            active:bg-gray-300 active:-translate-y-0.5 active:font-bold">
        {data.title}
    </a>
{/if}


