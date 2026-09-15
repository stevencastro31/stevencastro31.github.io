<script>
    import { onMount } from 'svelte'
    import { PROJECT_WORK_DATA } from '../objects/ProjectWorkData';   
	import SourceButton from './SourceButton.svelte';

    let isActive = $state();
    const images = $derived(PROJECT_WORK_DATA.map((data) => data.background));
    let items = ['idx0', 'idx1', 'idx2', 'idx3', 'idx4']

    onMount(() => { isActive = items[0] });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

{#each PROJECT_WORK_DATA as info, index (index)}
	<div class="panel" class:active={isActive === items[index]} style="background-image: url({images[index]})" onclick={() => isActive = items[index]}>
		<h3 class="bg-white h-fit overflow-hidden text-left text-lg md:text-2xl text-black px-6 py-1">{info.name}</h3>
        <div class="source">
            <SourceButton source={info.source}/>
        </div>
    </div>
{/each}

<style>
    .panel {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 24rem;
        border-radius: 32px;
        border: solid 2px white;
        color: #fff;
        cursor: pointer;
        flex: 0.5;
        margin: 10px;
        padding: 1rem;
        position: relative;
        -webkit-transition: all 700ms ease-in;
    }

    .panel.active {
        flex: 4;    
        right: -1px;
        bottom: -1px;
    }

    .panel h3 {
        position: absolute;
        border-bottom-left-radius: 32px;
        border-top-right-radius: 32px;
        border-bottom-right-radius: 20px;
        bottom: -1px;
        left: -1px;
        margin: 0;
        opacity: 0;
        font-weight: 500;
        width: 0%;
    }

    .panel.active h3 {
        width: fit-content;
        opacity: 1;
        transition: opacity 0.3s ease-in 0.4s;
        transition-delay: 0.7s;
    }

    .source {
        position: absolute;
        opacity: 0;
        top: 16px;
        right: 16px;
    }

    .panel.active div.source {
        opacity: 1;
        transition: opacity 0.3s ease-in 0.4s;
    }

    @media (max-width: 480px) {
        .panel:nth-of-type(4),
        .panel:nth-of-type(5) {
            display: none;
        }
    }
</style>