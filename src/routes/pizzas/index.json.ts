import type { EndpointOutput } from '@sveltejs/kit/types/endpoint';
import { PIZZAS } from '$lib/pizzas';

export type PizzaListItem = {
	name: string;
	url: string;
	imgSrc: string;
};

export function get(): EndpointOutput<{ pizzas: PizzaListItem[] }> {
	return {
		body: {
			pizzas: PIZZAS.map((p) => ({
				name: p.name,
				url: p.url,
				imgSrc: p.imgSrc,
			})),
		},
	};
}
