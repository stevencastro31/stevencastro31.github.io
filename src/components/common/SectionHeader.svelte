<script lang="ts">
    let { text, isLeft = true, isLight = true } : { text: string, isLeft?: boolean, isLight?: boolean } = $props();

    let textColor = $derived(isLight ? "text-black" : "text-gray-100");
    let borderColor = $derived(isLight ? "border-b-gray-300" : "border-b-white");
    let borderCorner = $derived(isLeft ? "lg:rounded-bl-none" : "lg:rounded-br-none");
    let textPosition = $derived(isLeft ? "lg:text-right" : "lg:text-left");
</script>

<h1 class={`p-4 mb-4 font-bold text-5xl border-b-4 ${textColor} ${borderColor} rounded-bl-2xl rounded-br-2xl text-center ${textPosition} ${borderCorner}`}>{text}</h1>