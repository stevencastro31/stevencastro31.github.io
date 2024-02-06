<script>
    import Section from "$lib/components/Section.svelte";
    import EducationCard from "./EducationCard.svelte";
    import DLSUImage from "$lib/assets/schools/dlsu.png?w=300&h=300&format=webp";
    import CKSCImage from "$lib/assets/schools/cksc.png?w=300&h=300&format=webp";
    import StudentImage from "$lib/assets/illust/loosedrawing/1150.png?w=500&h=600&format=webp";

    let educationDetails = [{
            school: "De La Salle University Manila",
            address: "2401 Taft Ave, Malate, Manila, 1004 Metro Manila",
            time: "Sept 2019 - Dec 2023",
            degree: "Bachelor of Science in Computer Science",
            major: "Major in Software Technology",
            image: DLSUImage,
            color: "green",
        }, {
            school: "Chiang Kai Shek College",
            address: "1477 Narra St, Tondo, Manila, 1012 Metro Manila",
            time: "2014 - Apr 2019",
            degree: "Senior Highschool Diploma",
            major: "STEM Graduate",
            image: CKSCImage,
            color: "blue",
        }, {
            school: "Chiang Kai Shek College",
            address: "1274 Padre Algue St, Tondo, Manila, 1012 Metro Manila",
            time: "2008 - 2013",
            degree: "Gradeschool, Junior Highschool Diplomas",
            major: "",
            image: CKSCImage,
            color: "blue",
        }
    ];
</script>

<Section id="education">
    <div class="h-auto w-screen py-16">
        <div class="flex lg:grid flex-col-reverse grid-cols-7 gap-8">  
            <div class="col-span-4 flex flex-col justify-center items-center xl:items-end p-8">
                <h1 class="p-4 text-4xl text-center xl:text-right font-bold border-b-4 mb-8 w-3/5" data-aos="fade-up" data-aos-offset="250">Education</h1>
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