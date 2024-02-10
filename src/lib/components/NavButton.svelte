<script>
    export let open;
    export let isMenu = false;
    export let data;

    let isTitle = data.title === "Steven Castro";
    function toggleMenu() { open = !open; };
</script>

{#if isMenu}
    <a class="h-full w-auto p-4 rounded-sm text-left active:bg-gray-300 active:-translate-y-0.5 active:font-bold active:border-l-blue-500 border-l-4 bg-white opacity-95" href={data.link} on:click={toggleMenu}>{data.title}</a>
{:else}
    <a class="h-full w-auto p-4 rounded-sm text-center hover:text-blue-700 hover:bg-gray-200 active:bg-gray-300 active:-translate-y-0.5 active:font-bold" class:text-xl={isTitle} href={data.link}>{data.title}</a>
{/if}


