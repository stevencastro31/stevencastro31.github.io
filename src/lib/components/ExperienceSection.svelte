<script>
    import Section from "$lib/components/Section.svelte";
    import ExperienceImage from "$lib/assets/illust/loosedrawing/987.png?w=500&h=600&format=webp";
    import ExperienceCard from "./ExperienceCard.svelte";
    import CSV from '$lib/data/experience.csv?raw';

    let experienceDetails = [];
    let data = CSV.trim().split('\n').slice(1).map(line => { 
        let [item1, item2, item3, item4] = line.split('|');
        return { role: item1, color: item2, company: item3, year: item4 };
    }).filter(exp => exp.role && exp.color && exp.company && exp.year);
    experienceDetails = [...data];
</script>

<Section id="experience">
    <div class="w-screen py-16">
        <div class="flex flex-col lg:grid grid-cols-7 gap-8">
            <div class="col-span-2 col-start-2 justify-center flex">
                <img class="p-4" src={ExperienceImage} alt="Experience">
            </div>
            <div class="col-span-3 flex flex-col p-8">
                <h1 class="p-4 text-4xl text-center xl:text-left font-bold border-b-4 rounded-bl-2xl mb-8 lg:w-4/5" data-aos="fade-right" data-aos-offset="350">Work Experience</h1>
                <ul>
                    {#each experienceDetails as experienceDetail, i}
                        <li><ExperienceCard {experienceDetail} delay={i}/></li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</Section>