<script lang="ts">
	import SectionHeader from "../common/SectionHeader.svelte";
</script>

<div id="about" class="w-screen px-8 py-16 flex flex-col lg:flex-row gap-8 justify-center items-center bg-[#1a191d]">
    <!-- Art -->
    <img src="tyoudoii/usingcomputer_man_color_outlined.png" alt="man using a computer" class="max-h-100 aspect-450/400">

    <!-- Content -->
    <div class="max-w-full lg:max-w-2/5 text-justify">
        <SectionHeader text="About Me" isLeft={false} isLight={false}/>
        <p>
            Hello! I'm Steven, a programmer who enjoys solving technical problems and a Computer Science undergraduate at <a class="text-nowrap underline underline-offset-2" target="_blank" href="https://www.dlsu.edu.ph">De La Salle University - Manila</a>.
        </p>
        <p>
            I have experience with object-oriented programming (OOP), database design, software engineering, and web development. 
            I also have professional experience in code testing, developer support, and customer support.
        </p>
        <p> 
            More recently, I have been working more with web development and have been exposed to technologies such as <span class="text-nowrap">Svelte 5</span> and the .NET ecosystem.
            I believe technology is constantly evolving, and I am always eager to learn new tools and technologies to create meaningful digital experiences.
        </p>    
    </div>
</div>

<style>
    p {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
        color: var(--color-gray-300); 
    }
</style>

