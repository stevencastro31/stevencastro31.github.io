<script lang="ts">
    import { Hamburger } from "svelte-hamburgers";

	let names: string[] = ["About", "Education", "Skills", "Experience", "Project Work"];
    let menu: boolean = $state(false);
</script>

<div class="w-screen flex md:place-content-around h-16 bg-gray-100 fixed top-0 z-50">

    <!-- Mobile -->
    <div class="md:hidden">
        <Hamburger bind:open={menu} />
        {#if menu}
            <div class="fixed top-16 left-0 z-50 bg-transparent">
                <a href="#lead">
                    <p class="h-16 w-64 text-xl bg-gray-100/80 p-4 text-left border-b border-gray-500">Home</p>
                </a>
                {#each names as name, i (i)}
                    <a href={`/#${name.toLowerCase().replace(" ", "")}`}>
                        <p class="h-16 w-64 text-xl bg-gray-100/80 p-4 text-left border-b border-gray-500">{name}</p>
                    </a>
                {/each}
                <a href="/stack">
                    <p class="h-16 w-64 text-xl bg-gray-100/80 p-4 text-left border-b border-gray-500">Stack</p>
                </a>
            </div>
        {/if}   
     </div>

    <!-- Desktop -->
    <a href="/#lead" class="hidden md:flex">
        <p class="h-16 text-xl w-fit p-4 text-center hover:text-blue-600 hover:bg-gray-200">Steven Castro</p>
    </a>

    <div class="flex flex-row hidden md:flex">
        {#each names as name, i (i)}
            <a href={`/#${name.toLowerCase().replace(" ", "")}`}>
                <p class="h-16 text-xl w-fit p-4 text-center hover:text-blue-600 hover:bg-gray-200" >{name}</p>
            </a>
        {/each}
        <a href="/stack">
            <p class="h-16 text-xl w-fit p-4 text-center hover:text-blue-600 hover:bg-gray-200">Stack</p>
        </a>
    </div>
</div>