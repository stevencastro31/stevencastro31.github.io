<script>
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
</script>

<div class="font-lato">
    <NavBar/>
    <slot></slot>
    <footer>
        <h1>Footer</h1>
    </footer>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');                /* Remove? */
    @import url('https://fonts.googleapis.com/css2?family=Lato&family=Prompt&display=swap');
</style>