<script lang="ts">
	import type { EducationInfo } from "../types/EducationInfo";
    import EducationCard from "../common/EducationCard.svelte";
	import SectionHeader from "../common/SectionHeader.svelte";
    import { EDUCATION_DATA } from "../objects/EducationData";

    const items: EducationInfo[] = $derived(EDUCATION_DATA);
</script>

<div id="education" class="w-screen px-8 py-12 flex flex-col lg:flex-row-reverse justify-center items-center">
    <!-- Art -->
    <img src="loosedrawing/1150.png" alt="man reading a book on top of a stack of books" class="max-h-136 aspect-square"/>

    <!-- Content -->
    <div class="w-full max-w-full lg:max-w-5/10">
        <SectionHeader text="Education"/>
        <div class="w-full h-full flex flex-col 2xl:grid 2xl:grid-cols-2 gap-6 py-8">
            {#each items as item, index (index)}
                <div class="h-full w-full">
                    <EducationCard info={item}/>
                </div>
            {/each}
        </div>
    </div>
</div>