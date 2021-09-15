import {elasticOut} from 'svelte/easing';
import type {TransitionConfig} from 'svelte/transition';

type SpinParams = {
    delay?: number;
    duration?: number;
}

export default function spin(_: Element, { duration, delay }: SpinParams): TransitionConfig {
    return {
        duration,
        delay,
        css: t => {
            const eased = elasticOut(t);
            return `transform: scale(${eased}) rotate(${eased * 360}deg);`;
        }
    };
}