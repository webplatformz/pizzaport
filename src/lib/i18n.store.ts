import {derived, writable} from 'svelte/store';
import type {Readable, Writable} from 'svelte/store';

export const locale: Writable<string> = writable('en');

const dictionary: Readable<Record<string, string>> = derived(
	locale,
	(locale, set) => {
		import((`../../locales/${locale}.ts`)).then(r => set(r.default || r));
	},
	{}
);

export const _: Readable<(key: string) => string> = derived(
	dictionary,
	(dict) => (key: string): string => dict[key] || ''
);
