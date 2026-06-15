<script>
    import Section from "$lib/components/Section.svelte";
    import EducationCard from "./EducationCard.svelte";
    import StudentImage from "$lib/assets/illust/loosedrawing/1150.png?w=500&h=600&format=webp";
    import CSV from '$lib/data/education.csv?raw';

    let educationDetails = [];
    let data = CSV.trim().split('\n').slice(1).map(line => { 
        let [item1, item2, item3, item4, item5, item6, item7] = line.split('|');
        return { school: item1, address: item2, time: item3, degree: item4, major: item5, image: item6, color: item7 };
    }).filter(exp => exp.school && exp.address && exp.time && exp.degree && exp.major && exp.image && exp.color);
    educationDetails = [...data];
</script>

<Section id="education">
    <div class="h-auto w-screen py-16">
        <div class="flex lg:grid flex-col-reverse grid-cols-7 gap-8">  
            <div class="col-span-4 flex flex-col justify-center items-center xl:items-end p-8">
                <h1 class="p-4 text-4xl text-center xl:text-right font-bold rounded-br-2xl border-b-4 mb-8 w-3/5" data-aos="fade-up" data-aos-offset="250">Education</h1>
                {#each educationDetails as educationDetail, i} 
                    <EducationCard {educationDetail} delay={i}/>
                {/each}
            </div>
            <div class="col-span-3 flex justify-center items-center">
                <img class="px-16 py-4" src={StudentImage} alt="Student">
            </div>
        </div>
    </div> 
</Section>