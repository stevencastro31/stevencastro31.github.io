<script>
	import LeadSection from "$lib/components/LeadSection.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
    import EducationSection from "$lib/components/EducationSection.svelte";
    import SkillSection from "$lib/components/SkillSection.svelte";
    import ExperienceSection from "$lib/components/ExperienceSection.svelte";

    import { onMount } from 'svelte';

    function mouseEvent(e) { 
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };

    // Cursor Animation: https://www.youtube.com/watch?v=wG_5453Vq98
    // Positions, Angles, Settings
    const mouse = {x: 0, y: 0};
    const previousMouse = { x: 0, y: 0 }
    const circle = {x: 0, y: 0};

    let currentScale = 0;
    let currentAngle = 0; 

    const speed = 0.25; // (0 = smoother, 1 = instant)
    const squeeze = 0.6;

    onMount(() => {
        console.clear();
        const circleElement = document.querySelector('.circle');
        const tick = () => {
            // MOVE
            circle.x += (mouse.x - circle.x) * speed;
            circle.y += (mouse.y - circle.y) * speed;
            const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

            // SQUEEZE
            const deltaMouseX = mouse.x - previousMouse.x;
            const deltaMouseY = mouse.y - previousMouse.y;
            previousMouse.x = mouse.x;
            previousMouse.y = mouse.y;
            const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
            const scaleValue = (mouseVelocity / 150) * squeeze;
            currentScale += (scaleValue - currentScale) * speed;
            const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

            // ROTATE
            const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
            if (mouseVelocity > 20) {
                currentAngle = angle;
            }
            const rotateTransform = `rotate(${currentAngle}deg)`;

            // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
            circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

            // Request the next frame to continue the animation
            window.requestAnimationFrame(tick);
        }
        tick();
    });
</script>

<svelte:window on:mousemove={mouseEvent}/>
<div class="circle border-matisse-400"></div>  

<LeadSection/>
<AboutSection/>
<EducationSection/>
<SkillSection/>
<ExperienceSection/>

<style>
    .circle {
        --circle-size: 40px;
        position: fixed;
        height: var(--circle-size);
        width: var(--circle-size);
        border: 2px solid #0f96e8;;
        border-radius: 100%;
        top: calc(var(--circle-size) / 2 * -1);
        left: calc(var(--circle-size) / 2 * -1);
        pointer-events: none;
        z-index: 100;
    }
</style>