<script>
    /**
	 * @type {any}
	 */
     export let title;

    function hello() {
        alert("Hello World");
    }
</script>

<button on:click={hello}>{title}</button>

<style>
    button {
        background-color: #000000;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: .25rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
        box-sizing: border-box;  
        color: rgb(255, 255, 255);
        cursor: pointer;
        display: inline-flex;
        font-size: 16px;
        font-weight: 600;
        justify-content: center;
        line-height: 1.25;
        margin: 0;
        min-height: 3rem;
        padding: calc(.875rem - 1px) calc(1.5rem - 1px);
        position: relative;
        text-decoration: none;
        transition: all 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
        width: auto;
    }

    button:hover,
    button:focus {
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: rgb(255, 255, 255);
    }

    button:hover {
        transform: translateY(-1px);
    }

    button:active {
        background-color: #F0F0F1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgb(0, 0, 0);
        transform: translateY(0);
    }
</style>