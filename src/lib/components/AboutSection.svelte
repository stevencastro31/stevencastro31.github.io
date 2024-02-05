<script>
    // Formatting Images: ?w=400&h=400&format=webp
    import Section from "$lib/components/Section.svelte";
    import Image from '$lib/assets/illust/tyoudoii/usingcomputer_man_color.png?w=450&h=400&format=webp';
</script>

<Section id="about">
    <div class="flex flex-col md:flex-row justify-center items-center py-16">
        <img class="h-auto md:h-64 lg:h-auto m-8" src={Image} alt="test">
        <div class="h-fit w-auto lg:w-[40vw] mx-4 lg:ml-16 lg:mr-8 my-8">
            <h1 class="p-4 text-4xl text-left font-bold border-b-4" data-aos="fade-up">About Me</h1>
            <p class="p-4 text-gray-700" data-aos="fade-up" data-aos-delay="250">
               Hello! I'm a dedicated developer passionate about crafting exceptional digital experiences. 
               With expertise in both front-end and back-end technologies, I thrive on challenges and value collaboration. 
               Let's create something amazing together! asdasdasasd asdas dasd asd as dass
            </p>
            <p class="px-4 pb-4 text-gray-700" data-aos="fade-up" data-aos-delay="350"> 
                I have have experience in blah blah blah...
            </p>
        </div>
    </div>
</Section>