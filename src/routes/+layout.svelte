<script>
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="font-prompt">
    <NavBar/>
    <slot></slot>
    <Footer/>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
    /* @import url('https://fonts.googleapis.com/css2?family=Lato&family=Prompt&display=swap'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Unbounded&display=swap'); */
</style>