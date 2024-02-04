<script>
    import DLSUImage from "$lib/assets/schools/dlsu.png?w=250&h=250&format=webp";
    import CKSCImage from "$lib/assets/schools/cksc.png?w=250&h=250&format=webp"

    export let educationDetail;
</script>

<div class="flex flex-col my-2 items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 bg-white" data-aos="fade-up" data-aos-delay="250">
    <div class="flex flex-col justify-between p-4 leading-normal w-96">
        <h5 class="mb-2 text-2xl font-bold tracking-tight">{educationDetail.school}</h5>
        <p class="mb-2">{educationDetail.time}</p>
        <p class="mb-2">{educationDetail.degree}</p>
    </div>

    {#if educationDetail.type === 'tertiary'}
        <img class="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={DLSUImage} alt="De La Salle University">
    {:else}
        <img class="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={CKSCImage} alt="Chiang Kai Shek College">
    {/if}
</div>  