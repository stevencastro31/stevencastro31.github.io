<script>
    const materials = [
        { title: "Svelte", link: "https://svelte.dev" },
        { title: "SvelteKit", link: "https://kit.svelte.dev" },
        { title: "TailwindCSS", link: "https://tailwindcss.com" },
        { title: "AOS", link: "https://michalsnik.github.io/aos/" },
        { title: "Devicon", link: "https://github.com/devicons/devicon/"},
        { title: "Techicons", link: "https://techicons.dev"},
        { title: "TailwindCSS Animated", link: "https://www.tailwindcss-animated.com"},
        { title: "loosedrawing", link: "https://loosedrawing.com"},
        { title: "tyoudoii-illust", link: "https://tyoudoii-illust.com"},
        { title: "Unsplash", link: "https://unsplash.com/photos/white-and-black-wooden-cabinet-n8St7X9HgLA"},
        { title: "vite-imagetools", link: "https://www.npmjs.com/package/vite-imagetools"},
        { title: "svelte-hamburgers", link: "https://www.npmjs.com/package/svelte-hamburgers"},
        { title: "TinyPNG", link: "https://tinypng.com"}
    ];
</script>

<div class="h-[80vh]  mt-16">
    <div class="h-full flex xl:grid grid-cols-7">
        <div class="h-full col-span-3 col-start-2 flex flex-col justify-center">
            <h1 class="text-6xl xl:text-7xl text-center xl:text-left font-bold p-8 animate-fade-right">Materials</h1>
            <h2 class="text-md p-4 font-bold pb-2 border-b-4 animate-fade-right">Libraries, Frameworks, Resources used to build this website.</h2>
            <div class="p-4 w-full lg:w-4/5 flex flex-wrap justify-center lg:justify-start">
                {#each materials as mat, i} 
                    <div class=" bg-slate-200 rounded-md m-1 animate-jump">
                        <a class="p-4 text-md" href={mat.link} target="_blank">{mat.title}</a>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>