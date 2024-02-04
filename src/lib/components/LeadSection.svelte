<script>
    import Section from "$lib/components/Section.svelte";
    import Button from "$lib/components/DownloadButton.svelte";
    // @ts-ignore
    import BackgroundImageLG from "$lib/background/illia-plakhuta-n8St7X9HgLA-unsplash.jpg?w=1920&h=1080&format=webp";
    // @ts-ignore
    import BackgroundImageSM from "$lib/background/illia-plakhuta-n8St7X9HgLA-unsplash.jpg?w=900&h=1600&format=webp";
</script>

<Section id="lead">
    <img class="hidden lg:flex absolute -z-10" src={BackgroundImageLG} alt="Lead Background">
    <img class="flex lg:hidden absolute -z-10" src={BackgroundImageSM} alt="Lead Background">
    <div class="h-screen w-screen flex flex-col justify-center items-center text-white">
        <h1 class="m-2 pt-8 h-fit w-fit lg:text-8xl text-5xl font-semibold text-center animate-fade-up animate-delay-100 animate-ease-out">Steven Castro</h1>
        <h2 class="m-2 h-fit w-fit lg:text-2xl text-2xl animate-fade-up animate-delay-[250ms] animate-ease-out">Programmer</h2>
        <Button title="Download Resume"/>
    </div>
</Section>