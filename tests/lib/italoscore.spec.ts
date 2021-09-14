import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import App from '../../src/lib/ItaloScore.svelte';

it('should show italo score with mario as result', () => {
	const { getByText } = render(App, { scorePercent: 95 });

	expect(getByText('Super Mario')).toBeVisible();
	expect(getByText('95%')).toBeVisible();
});
