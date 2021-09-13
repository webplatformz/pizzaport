import type {ServerRequest} from '@sveltejs/kit/types/hooks';
import type {EndpointOutput} from '@sveltejs/kit/types/endpoint';

const KNOWN_PIZZA_NAMES = ['BACON', 'DIAVOLA', 'FUNGHI', 'GAMBERONI', 'HAWAII', 'MARGHERITA', 'SALAMI', 'VEGETARIANA', 'VERDE'];

export async function get({ params }: ServerRequest): Promise<EndpointOutput<{name: string, imgSrc?: string}>> {
    const { name } = params;

    await sleep(2000); // random latency

    const matchingPizzaName = KNOWN_PIZZA_NAMES.find(n => name.toUpperCase() === n);

   if(matchingPizzaName) {
       return {
           body: {
               name: matchingPizzaName[0].toUpperCase() + matchingPizzaName.substring(1),
               imgSrc: `/pizzas/pizza-${matchingPizzaName}.png`
           }
       };
   }

   if(name.toUpperCase() === 'MILLENIAL') {
       return {
           status: 410, // this pizza is no longer served
           body: {
               name: name[0].toUpperCase() + name.substring(1).toLowerCase()
           }
       };
   }

    return {
        status: 404,
        body: {
            name: name[0].toUpperCase() + name.substring(1).toLowerCase()
        }
    };
}

async function sleep(duration: number) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, duration);
    })
}