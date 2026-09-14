<script lang="ts">
    import ExpandableCard from "./ExpandableCard.svelte";
</script>

<div class="w-ful h-80">
    <ExpandableCard>
        {#snippet face(collapsed)}
            <div class="h-full w-30 ">
                TESTING
            </div>
        {/snippet}

        {#snippet content(collapsed)}
            <div class="w-full h-full flex ">
                <div class="flex flex-wrap flex-row place- mx-4 ">
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                    <p>Hello World</p>
                </div>

            </div>
        {/snippet}
    </ExpandableCard>
</div>

<style>
    p {
        height: fit-content;
        width: fit-content;
    }
</style>