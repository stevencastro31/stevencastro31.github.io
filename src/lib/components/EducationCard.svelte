<script>
    export let delay = 1;
    export let educationDetail;
    delay = delay * 150;

    let isBlue = educationDetail.color === 'blue';
    let isGreen = educationDetail.color === 'green';
</script>

<div class="w-full md:w-96 bg-white rounded-tl-3xl rounded-br-xl shadow-lg mb-4 border-t-8" class:border-green-600={isGreen} class:border-blue-500={isBlue} data-aos="fade-right" data-aos-delay={delay} data-aos-offset="300">
    <div class="flex flex-col p-4 w-full">
        <div class="flex justify-between">
            <h5 class="text-xl font-bold">{educationDetail.school}</h5>
            <img class="max-h-8 max-w-8 pointer-events-none select-none" src={educationDetail.image} alt="icon">
        </div>
        <!-- <p class="text-gray-600 mt-2">{educationDetail.address}</p> -->
        <p class="text-gray-600 mb-2">{educationDetail.time}</p>
        <p class="text-gray-600">{educationDetail.degree}</p>
        <p class="text-gray-600">{educationDetail.major}</p>
    </div>
</div>