<script>
    import Section from "$lib/components/Section.svelte";
    import Button from "$lib/components/DownloadButton.svelte";
</script>

<Section id="lead">
    <div class="bg-illia-plakhuta bg-cover bg-center h-[80vh] xl:h-screen">
        <div class="h-full w-auto flex flex-col justify-center items-center">
            <h1 class="text-white text-4xl md:text-6xl lg:text-8xl my-2 animate-fade-up animate-ease-out animate-delay-[100ms] font-bold">Steven Castro</h1>
            <h2 class="text-white text-2xl md:text-3xl lg:text-4xl mb-4 animate-fade-up animate-ease-out animate-delay-[250ms]">Programmer</h2>
            <Button title="Download Resume"/>
        </div>
    </div>
</Section>