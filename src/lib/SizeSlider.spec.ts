import { render } from '@testing-library/svelte';
import SizeSlider from './SizeSlider.svelte';

it('should have the correct amount of stops', () => {
	const min = 0;
	const max = 20;
	const step = 5;

	const { getAllByTestId } = render(SizeSlider, { min, max, step });

	expect(getAllByTestId('stop').length).toEqual(5);
});

it('should show stop labels with step as difference', () => {
	const min = 0;
	const max = 10;
	const step = 5;

	const { getAllByTestId } = render(SizeSlider, { min, max, step });

	const stops: string[] = getAllByTestId('stop').map((i) => i.textContent);

	expect(stops).toEqual(['0', '5', '10']);
});
