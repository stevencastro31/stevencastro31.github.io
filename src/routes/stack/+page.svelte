<script lang="ts">
     const materials = [
        { title: "Typescript", link: "https://www.typescriptlang.org"},
        { title: "Svelte v5", link: "https://svelte.dev" },
        { title: "SvelteKit", link: "https://kit.svelte.dev" },
        { title: "TailwindCSS", link: "https://tailwindcss.com" },
        { title: "Devicon", link: "https://github.com/devicons/devicon/"},
        { title: "Techicons", link: "https://techicons.dev"},
        { title: "loosedrawing", link: "https://loosedrawing.com"},
        { title: "tyoudoii-illust", link: "https://tyoudoii-illust.com"},
        { title: "Unsplash", link: "https://unsplash.com/photos/white-and-black-wooden-cabinet-n8St7X9HgLA"},
        { title: "svelte-hamburgers", link: "https://www.npmjs.com/package/svelte-hamburgers"},
        { title: "GIMP", link: "https://www.gimp.org/downloads/"},
        { title: "pnpm", link: "https://pnpm.io"},
        { title: "Visual Studio Code", link: "https://code.visualstudio.com/download"},
        { title: "GitHub Pages", link: "https://docs.github.com/en/pages"},
        { title: "UIVerse", link: "https://uiverse.io/elements"},
    ];
</script>

<div class="flex flex-col h-[85vh] w-screen mt-16 px-8 xl:px-80 justify-center">
    <h1 class="text-7xl font-medium text-white mb-4 p-4">Materials</h1>
    <h3 class="text-xl border-b-4 border-gray-200 text-white py-2 mb-4">Libraries, Frameworks, Resources, and Tools I used to build this website.</h3>
    <div class="flex flex-row flex-wrap 2xl:max-w-3/5">
        {#each materials as mat, i (i)} 
            <div class=" bg-white rounded-md m-1 w-fit">
                <a class="p-4 text-md text-black w-fit text-xl" href={mat.link} target="_blank">{mat.title}</a>
            </div>
        {/each}
    </div>
</div>
