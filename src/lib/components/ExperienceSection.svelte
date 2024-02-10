<script>
    import Section from "$lib/components/Section.svelte";
    import ExperienceImage from "$lib/assets/illust/loosedrawing/987.png?w=500&h=600&format=webp";
    import ExperienceCard from "./ExperienceCard.svelte";

    let example =  {role: "Role", color: "orange", company: "company", year: "2000"};
    let experienceDetails = [{
            role: "Clerical Worker",
            color: "",
            company: "Eastworld Sales Philippines",
            year: "(2019)",     
        }, {
            role: "Dialogflow Developer",
            color: "orange",
            company: "TE3D House – AdRIC Research Center",
            year: "(2023)",
        }
    ];
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