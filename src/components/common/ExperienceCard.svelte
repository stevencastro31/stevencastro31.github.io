
<script lang="ts">
	import { TechnicalSkill } from "../enums/TechnicalSkill";
	import SkillBoard from "./SkillBoard.svelte";
    import { SKILL_DATA } from "../objects/SkillData";
    import type { SkillInfo } from "../types/SkillInfo";
	import type { ExperienceInfo } from "../types/ExperienceInfo";
	import CheckBox from "./CheckBox.svelte";

    let { info, expanded = false }: { info: ExperienceInfo, expanded?: boolean } = $props();

    let skills: TechnicalSkill[] = $derived(info.skills);
    let skillInfo: SkillInfo[] = $derived(skills.map((skill) => { return SKILL_DATA[skill]; }));
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="w-full h-fit flex flex-col drop-shadow-2xl cursor-pointer" onclick={() => expanded = !expanded }>
    <!-- Inner -->
    <div class="bg-white w-full h-fit inner border-t-12 rounded-tr-4xl rounded-b-4xl" class:rounded-b-4xl={!expanded} class:expanded style={`border-color: #${info.color}`}>

        <!-- Content -->
        <div class="mx-6 mt-6 mb-3 h-fit flex flex-col place-content-between">
            <div class="flex gap-6 items-center">
                <img class="size-14  bg-gray-100" src={info.icon} alt="company icon">
                <div>
                    <h1 class="text-lg font-semibold text-left">{info.comapany}</h1>
                    <p class="text-medium font-medium">{info.role}</p>
                </div>
            </div>

            <div class="flex flex-row place-content-between items-center">
                <p class="mt-4 font-medium text-gray-500">{info.year}</p>
                <div class="mr-2 pointer-events-none">
                    <CheckBox bind:checked={expanded}/>
                </div>
            </div>
        </div>
    </div>

    <!-- Outer -->
    <div class="outer  w-full h-fit bg-[#1a191d]  rounded-b-4xl grid" class:grid-rows-[0fr]={!expanded} class:grid-rows-[1fr]={expanded} class:expanded>
        <div class="subouter mx-6 overflow-hidden" class:mb-6={expanded} class:expanded>
            
            <!-- Content -->
            <div class="h-fit w-full" >
                <p class="text-white mt-4 text-justify text-sm">{info.description}</p>
                <div class="w-full mt-2">
                    <SkillBoard skills={skillInfo} isCenter={false} isMini={true}/>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .inner {
        transition: border-radius 400ms ease-out;
        transition-delay: 600ms;
    }

    .outer {
        transition: grid-template-rows 500ms ease-in;
        transition-delay: 100ms;
    }

    .inner.expanded {
        transition: border-radius 200ms;
        transition-delay: 0ms;
    }

    .outer.expanded {
        transition: grid-template-rows 500ms ease;
        transition-delay: 200ms;
    }

    .subouter.expanded {
        transition: margin-bottom 200ms ease-out;
        transition-delay: 500ms;
    }

    .subouter {
        transition: margin-bottom 100ms ease-in;
        transition-delay: 0ms;
    }

    img {
        user-select: none;
    }
</style>