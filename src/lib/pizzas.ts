const KNOWN_PIZZA_NAMES = ['BACON', 'DIAVOLA', 'FUNGHI', 'GAMBERONI', 'HAWAII', 'MARGHERITA', 'MILLENIAL', 'SALAMI', 'VEGETARIANA', 'VERDE'];

export const PIZZAS = KNOWN_PIZZA_NAMES.map(p => ({
        id: p,
        name: p[0].toUpperCase() + p.substring(1).toLowerCase(),
        url: `/pizzas/${p.toLowerCase()}`,
        pathSegment: p.toLowerCase(),
        imgSrc: `/pizzas/pizza-${p.toLowerCase()}.png`,
        endOfLife: p === 'MILLENIAL'
    })
);