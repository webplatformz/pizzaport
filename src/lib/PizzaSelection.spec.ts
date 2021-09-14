import {fireEvent, render} from '@testing-library/svelte';
import PizzaSelection from './PizzaSelection.svelte';

it('should add pizza to selection', async () => {
    const pizzas = ['a', 'b', 'c'];
    const selectedPizzas = [];
    const {getByText, component} = render(PizzaSelection, {pizzas, selectedPizzas});

    await fireEvent.click(getByText('a'));

    expect(component.selectedPizzas).toEqual(['a']);
});

it('should remove pizza from selection', async () => {
    const pizzas = ['a', 'b', 'c'];
    const selectedPizzas = ['a'];
    const {getByText, component} = render(PizzaSelection, {pizzas, selectedPizzas});

    await fireEvent.click(getByText('a'));

    expect(component.selectedPizzas).toEqual([]);
});

it('should have all pizzas displayed', () => {
    const pizzas = ['a', 'b', 'c'];

    const {container} = render(PizzaSelection, {pizzas});

    expect(container.querySelectorAll('figure').length).toEqual(pizzas.length);
});
