<script>
    import Section from "$lib/components/Section.svelte";
    import EducationCard from "./EducationCard.svelte";
    import Image from "$lib/assets/illust/loosedrawing/1150.png?w=450&h=400&format=webp"

    let educationDetails = [{
            school: "De La Salle University Manila",
            time: "2019-2023",
            degree: "B.S. in Computer Science Major in Software Technology",
            type: "tertiary",
            color: "green",
        }, {
            school: "Chiang Kai Shek College",
            time: "2008-2019",
            degree: "Gradeschool, Junior & Senior Highschool",
            type: "secondary",
            color: "blue",
        }
    ];
</script>

<Section id="education">
    <div class="h-fit w-full pt-16 pb-8 bg-bunker-950">
        <h1 class="h-fit w-full pt-8 pb-16 text-center text-4xl font-bold text-white">Education</h1>
        <div class="h-fit w-full flex justify-center">

            <div class="flex flex-col items-center pr-20">
                {#each educationDetails as educationDetail} 
                    <EducationCard {educationDetail}/>
                 {/each}
            </div>

            <div class="justify-center items-center hidden lg:flex">
                <img class="bg-white ml-16 shadow-lg rounded-lg" src={Image} alt="Education">
            </div>

        </div>
    </div>
</Section>

<style>
    /* div {
        border: 4px dotted red;
    } */
</style>