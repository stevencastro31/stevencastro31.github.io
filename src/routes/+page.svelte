<script lang="ts">
	import type { Component } from "svelte";
	import AboutSection from "../components/sections/AboutSection.svelte";
	import EducationSection from "../components/sections/EducationSection.svelte";
	import ExperienceSection from "../components/sections/ExperienceSection.svelte";
    import LeadSection from "../components/sections/LeadSection.svelte";
	import ProjectWorkSection from "../components/sections/ProjectWorkSection.svelte";
	import SkillSection from "../components/sections/SkillSection.svelte";

	let sections: Component[] = [LeadSection, AboutSection, EducationSection, SkillSection, ExperienceSection, ProjectWorkSection]
</script>

{#each sections as Section, i (i)}
	<Section/>
{/each}

<div class="w-screen h-4"></div>