<script>
    // Formatting Images: ?w=400&h=400&format=webp
    import Section from "$lib/components/Section.svelte";
    import Image from '$lib/assets/illust/tyoudoii/usingcomputer_man_color.png?w=450&h=400&format=webp';
</script>

<Section id="about">
    <div class="flex flex-col md:flex-row justify-center items-center py-16">
        <img class="h-auto md:h-64 lg:h-auto m-8" src={Image} alt="test">
        <div class="h-fit w-auto lg:w-[40vw] mx-4 lg:ml-16 lg:mr-8 my-8">
            <h1 class="p-4 text-4xl text-left font-bold border-b-4 rounded-bl-2xl" data-aos="fade-up">About Me</h1>
            <p class="p-4 text-gray-700" data-aos="fade-up" data-aos-delay="250">
                Hello! I'm Steven, a fresh undergraduate in Computer Science at <a class="underline underline-offset-2" target="_blank" href="https://www.dlsu.edu.ph">De La Salle University - Manila</a>. 
                I'm a dedicated developer passionate about crafting digital experiences. 
                With expertise in both front-end and back-end technologies, I thrive on challenges and value collaboration. 
            </p>
            <p class="px-4 pb-4 text-gray-700" data-aos="fade-up" data-aos-delay="350"> 
                I have experiences with object oriented programming (OOP), database design, software engineering, and web development. 
                I'm willing to learn with a curiosity for the latest technologies, ready to make a meaningful impact on your projects. 
                Let's create something amazing together!
            </p>
        </div>
    </div>
</Section>