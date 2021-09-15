import { fireEvent, render } from '@testing-library/svelte';
import PizzaSelection from './PizzaSelection.svelte';
import type {PizzaListItem} from '../../routes/pizzas/index.json';

it('should add pizza to selection', async () => {
	const pizzas: PizzaListItem[] = ['a', 'b', 'c'].map(n => ({name: n, url: n, imgSrc: n}));
	const selectedPizzaNames: string[] = [];
	const { getByText, component } = render(PizzaSelection, { pizzas, selectedPizzaNames });

	await fireEvent.click(getByText('a'));

	expect(component.selectedPizzaNames).toEqual(['a']);
});

it('should remove pizza from selection', async () => {
	const pizzas: PizzaListItem[] = ['a', 'b', 'c'].map(n => ({name: n, url: n, imgSrc: n}));
	const selectedPizzaNames = ['a'];
	const { getByText, component } = render(PizzaSelection, { pizzas, selectedPizzaNames });

	await fireEvent.click(getByText('a'));

	expect(component.selectedPizzaNames).toEqual([]);
});

it('should have all pizzas displayed', () => {
	const pizzas: PizzaListItem[] = ['a', 'b', 'c'].map(n => ({name: n, url: n, imgSrc: n}));

	const { container } = render(PizzaSelection, { pizzas });

	expect(container.querySelectorAll('figure').length).toEqual(pizzas.length);
});
