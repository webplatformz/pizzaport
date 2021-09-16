import type { EndpointOutput } from '@sveltejs/kit/types/endpoint';

export async function get(): Promise<EndpointOutput<string>> {
	const ye = await fetch('https://api.kanye.rest/')
		.then((r) => r.json())
		.then((r) => r.quote);
	return {
		body: ye,
	};
}
