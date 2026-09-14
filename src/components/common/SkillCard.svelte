
<script lang="ts">
    import type { SkillInfo } from "../types/SkillInfo";
    const { info }: { info: SkillInfo } = $props();
</script>

<div class="bg-white opacity-90 rounded-lg p-2 m-1 flex cursor-move">
    <img class="h-8" src={info.icon} alt={info.name}>
    <p class="p-1 font-medium">{info.name}</p>
</div>