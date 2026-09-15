<script lang="ts">
    import SkillBoard from "../common/SkillBoard.svelte";
    import { SKILL_DATA } from "../objects/SkillData";
    import type { SkillInfo } from "../types/SkillInfo";

    const items: SkillInfo[] = [...Object.values(SKILL_DATA)];
</script>

<div id="skills" class="w-screen px-8 py-12 flex flex-col items-center bg-[#1a191d]">
    <h1 class="text-center text-4xl text-white font-bold mb-8 p-4 border-b-2">Skills</h1>
    <div class="w-4/5 lg:w-3/5">
        <SkillBoard skills={items}/>
    </div>
    <h2 class="p-4 text-gray-300 text-center">Languages, Tooling, and Frameworks I'm familiar with.</h2>
</div>