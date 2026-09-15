
<script lang="ts">
    import type { SkillInfo } from "../types/SkillInfo";
    const { info, minify }: { info: SkillInfo, minify?: boolean } = $props();
</script>


{#if minify}
    <div class="bg-white opacity-90 rounded-lg p-1 m-1 flex cursor-move items-center">
        <img class="size-4" src={info.icon} alt={info.name}>
        <p class="px-1 text-sm font-medium">{info.name}</p>
    </div>
{:else}
    <div class="bg-white opacity-90 rounded-lg p-2 m-1 flex cursor-move">
        <img class="size-8" src={info.icon} alt={info.name}>
        <p class="p-1 font-medium">{info.name}</p>
    </div>
{/if}