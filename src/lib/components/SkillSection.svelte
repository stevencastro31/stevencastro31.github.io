<script>
    import Section from "$lib/components/Section.svelte";
    import SkillBoard from "./SkillBoard.svelte";
    import CSV from '$lib/data/skills.csv?raw';

    let skills = [];
    let data = CSV.trim().split('\n').slice(1).map(line => { 
        let [item1, item2] = line.split('|');
        return { title: item1, icon: item2 };
    }).filter(skill => skill.title && skill.icon);
    skills = [...data];
</script>

<Section id="skills">
    <div class="h-auto w-screen py-16 bg-bunker-950 flex flex-col items-center">
        <h1 class="text-center text-4xl text-white font-bold mb-8 p-4 border-b-2">Skills</h1>
        <SkillBoard {skills}/>          
        <h2 class="p-4 text-gray-200 text-center" data-aos="fade-up" data-aos-delay={skills.length * 50}>Languages, Tooling, and Frameworks I'm familiar with.</h2>
    </div>
</Section>