<script lang="ts">
    let { source }: { source: string } = $props();
</script>
<a href={source} class="flex flex-row items-center h-8 pl-2 pr-4 py-5 rounded-xl border-2 border-white/50 bg-[#1a191d] hover:border-white">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github" class="size-6 invert mr-2"/>
    Source
</a>

