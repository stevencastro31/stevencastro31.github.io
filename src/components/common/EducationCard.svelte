<script lang="ts">
	import type { EducationInfo } from "../types/EducationInfo";
    let { info }: { info: EducationInfo } = $props();
</script>

<!-- credit: https://uiverse.io/vamsidevendrakumar/soft-shrimp-94 -->

<div class="card">
    <div class="card-inner">
        <div class="card-front rounded-tl-4xl rounded-br-3xl flex flex-col place-content-evenly" style={`border: 10px solid #${info.color};`}>
            <span>
                <div class="flex flex-row place-content-between items-center">
                    <div>
                        <h3 class="text-xl font-medium">{info.school}</h3>
                        <p class="text-medium">{info.duration}</p>
                    </div>
                    <img src={info.icon} alt="school icon" class="size-16  object-contain"/>
                </div>
            </span>
            <span class="mb-2">
                <p class="text-lg">{info.course}</p>
                <p class="text-medium">{info.subtitle}</p>
            </span>
        </div>
        <div class="card-back rounded-tr-4xl rounded-bl-3xl place-content-evenly" style={`border: 10px solid #${info.color};`}>
            <span>
                <h3 class="text-lg">Address</h3>
                <p>{info.address}</p>
            </span>
            <span>
                <h3>Website</h3>
                <p>{info.website}</p>
            </span>
        </div>
    </div>
</div>

<style>
    h3 {
        font-size: var(--text-xl) /* 1.25rem = 20px */;
        line-height: var(--tw-leading, var(--text-xl--line-height) /* calc(1.75 / 1.25) ≈ 1.4 */);
    }

    p {
        color: var(--color-gray-700);
    }

    img {
        user-select: none;
    }

    .card {
        height: 200px;
        perspective: 1000px;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.999s;
    }

    .card:hover .card-inner {
        transform: rotateY(180deg);
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        padding: 1rem;
    }

    .card-front {
        transform: rotateY(0deg);
    }

    .card-back {
        transform: rotateY(180deg);
    }
</style>
