
<script lang="ts">
    import type { Snippet } from "svelte";
    let expanded = $state(false);
    let { face, content }: { face: Snippet<[boolean]>, content: Snippet<[boolean]> } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="w-full h-full flex flex-row" onclick={() => expanded = !expanded}>
    <div class="bg-blue-900 rounded-l-4xl transition-[border-radius] inner" class:rounded-r-4xl={!expanded} class:expanded
        // class:duration-200={expanded} class:delay-0={expanded} 		class:duration-100={expanded} class:delay-600={expanded}
        >
        {@render face(expanded)}
    </div>

    <div class=" outer rounded-r-4xl w-full h-full grid transition-[grid-template-columns]" class:grid-cols-[0fr]={!expanded} class:grid-cols-[1fr]={expanded} class:expanded
        // class:duration-400={!expanded} class:delay-200={!expanded} 	class:duration-600={!expanded} class:delay-0={!expanded} 
        >
        <div class="rounded-r-4xl bg-blue-900 w-full h-full overflow-hidden">
            {@render content(expanded)}
        </div>
    </div>
</div>

<style>
    .inner {
        transition: border-radius 400ms ease-out;
        transition-delay: 500ms;
    }

    .outer {
        transition: grid-template-columns 500ms;
        transition-delay: 0;
    }

    .inner.expanded {
        transition: border-radius 200ms;
        transition-delay: 0ms;
    }

    .outer.expanded {
        transition: grid-template-columns 500ms;
        transition-delay: 200ms;
    }
</style>

<!--  transition-opacity duration-400" class:opacity-0={!expanded} class:opacity-100={expanded} -->


<!-- <div class="w-full h-full flex flex-row" onclick={() => expanded = !expanded}>
    <div class="bg-blue-900 rounded-l-4xl transition-[border-radius] duration-200" class:rounded-r-4xl={!expanded} class:delay-300={!expanded}>
        {@render face(expanded)}
    </div>

    <div class="rounded-r-4xl w-full h-full grid transition-[grid-template-columns] duration-300 " class:grid-cols-[0fr]={!expanded} class:grid-cols-[1fr]={expanded}>
        <div class="rounded-r-4xl bg-blue-900 w-full h-full overflow-hidden transition-opacity duration-200" class:opacity-0={!expanded} class:opacity-100={expanded}>
            {@render content(expanded)}
        </div>
    </div>
</div> -->