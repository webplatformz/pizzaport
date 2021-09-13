import type {EndpointOutput} from '@sveltejs/kit/types/endpoint';
import {PIZZAS} from '$lib/pizzas';

export function get(): EndpointOutput<{ pizzas: { name: string, url: string }[] }> {
    return {
        body: {
            pizzas: PIZZAS.map(p => ({
                name: p.name,
                url: p.url
            })),
        }
    };
}
