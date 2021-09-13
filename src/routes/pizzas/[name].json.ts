import type {ServerRequest} from '@sveltejs/kit/types/hooks';
import type {EndpointOutput} from '@sveltejs/kit/types/endpoint';
import {PIZZAS} from '$lib/pizzas';

export async function get({params}: ServerRequest): Promise<EndpointOutput<{ name: string, imgSrc?: string }>> {
    const {name} = params;

    await sleep(2000); // random latency

    const matchingPizza = PIZZAS.find(n => name === n.pathSegment);

    if (matchingPizza) {
        return {
            status: matchingPizza.endOfLife ? 410 : 200,
            body: {
                name: matchingPizza.name,
                imgSrc: matchingPizza.imgSrc
            },
        };
    }

    return {
        status: 404,
        body: {
            name: name
        }
    };
}

async function sleep(duration: number) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, duration);
    });
}