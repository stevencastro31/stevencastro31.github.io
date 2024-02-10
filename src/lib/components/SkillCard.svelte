<script>
    export let data;
</script>

<div class="bg-white opacity-90 rounded-lg p-2 m-1 flex cursor-move">
    <img class="h-8" src={data.icon} alt={data.title}>
    <p class="p-1 font-bold">{data.title}</p>
</div>
