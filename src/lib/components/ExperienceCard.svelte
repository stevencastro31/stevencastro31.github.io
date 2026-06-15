<script>
    export let delay = 1;
    export let experienceDetail;
    delay = delay * 200;

    let colors = {
        orange: "border-orange-400",
        blue: "border-blue-400",
        green: "border-green-400",
        red: "border-red-400",
        yellow: "border-yellow-400",
    };
</script>
<div
    class={`lg:w-[440px] rounded-tr-3xl rounded-bl-xl shadow-lg mb-4 border-t-8 p-4 ${colors[experienceDetail.color.trim()] ?? "border-gray-400"}`} data-aos="fade-right" data-aos-delay={delay} data-aos-offset="300">
    <div class="flex justify-between">
        <h5 class="text-lg font-bold">{experienceDetail.role}</h5>
        <h6 class="text-lg font-semibold text-gray-600 ">{experienceDetail.year}</h6>
    </div>
    <h3 class="w-full text-gray-600 pt-2">{experienceDetail.company}</h3>
</div>