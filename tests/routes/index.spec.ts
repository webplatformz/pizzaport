import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import App from '../../src/routes/index.svelte';

it('should show the hello text', () => {
	const { getByText } = render(App, { name: 'Test' });

	expect(getByText('Hello Test')).toBeVisible();
});
