<script>
    // Formatting Images: ?w=400&h=400&format=webp
    import Section from "$lib/components/Section.svelte";
    import Image from '$lib/assets/illust/tyoudoii/usingcomputer_man_color.png?w=450&h=400&format=webp';
</script>

<Section id="about">
    <div class="pt-16 h-fit w-fit">
        <div class="lg:h-[65vh] sm:h-fit w-full lg:grid sm:flex lg:grid-rows-1 lg:grid-cols-7 sm:flex-col-reverse lg:border-t-4 lg:border-b-4 mb-8 border-dotted border-gray-400">
            <div class="h-full col-span-2 col-start-2 flex justify-center items-center sm:mt-4">
                <img class="rounded-lg" src={Image} alt="test">
            </div>
            <div class="h-full col-span-4 flex flex-col justify-center items-left">
                <h1 class="h-fit w-3/4 p-4 ml-16 border-b-4 text-4xl text-left font-bold">About Me</h1>
                <p class="h-fit w-3/4 ml-16 p-4 text-gray-700">
                    Hello! I'm a dedicated developer passionate about crafting exceptional digital experiences. 
                    With expertise in both front-end and back-end technologies, I thrive on challenges and value collaboration. 
                    Let's create something amazing together!
                </p>
            </div>  
        </div>
    </div>
</Section>