import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/svelte';
import PlanFrequency from './PlanFrequency.svelte';
import * as MockDate from 'mockdate';

it('should show a start date input with today as default value', () => {
	const today = '09/13/2021';
	MockDate.set(today);
	const { getByLabelText } = render(PlanFrequency);

	expect(getByLabelText('Start')).toHaveDisplayValue('2021-09-13');
});

it('should show an end date input with no default value', () => {
	const { getByLabelText } = render(PlanFrequency);

	expect(getByLabelText('End')).toHaveDisplayValue('');
});

it.each(['Daily', 'Weekly'])(`should show the frequency option '%s'`, (frequency) => {
	const { getByLabelText } = render(PlanFrequency);

	expect(getByLabelText(frequency)).toBeVisible();
});

it(`should have frequency option daily as default`, () => {
	const { getByLabelText } = render(PlanFrequency);

	expect(getByLabelText('Daily')).toBeChecked();
});

it.each(['Daily', 'Weekly'])(`should be able to check frequency option '%s'`, async (frequency) => {
	const { getByLabelText } = render(PlanFrequency);

	await fireEvent.click(getByLabelText(frequency));

	expect(getByLabelText(frequency)).toBeChecked();
});

it(`should show the correct dates when daily frequency is chosen`, async () => {
	const start = '09/13/2021';
	const end = '2021-09-15';
	MockDate.set(start);
	const { getByLabelText, getByText, getAllByRole } = render(PlanFrequency);

	await fireEvent.input(getByLabelText('End'), { target: { value: end } });
	await fireEvent.click(getByLabelText('Daily'));

	expect(getAllByRole('listitem')).toHaveLength(2);
	expect(getByText('09/14/2021')).toBeVisible();
	expect(getByText('09/15/2021')).toBeVisible();
});

it(`should show the correct dates when weekly frequency is chosen`, async () => {
	const start = '09/13/2021';
	const end = '2021-09-28';
	MockDate.set(start);
	const { getByLabelText, getByText, getAllByRole } = render(PlanFrequency);

	await fireEvent.input(getByLabelText('End'), { target: { value: end } });
	await fireEvent.click(getByLabelText('Weekly'));

	expect(getAllByRole('listitem')).toHaveLength(3);
	expect(getByText('09/14/2021')).toBeVisible();
	expect(getByText('09/21/2021')).toBeVisible();
	expect(getByText('09/28/2021')).toBeVisible();
});

it(`should not show any dates if an invalid interval is given where the end is before the start date`, async () => {
	const start = '09/13/2021';
	const end = '2021-09-10';
	MockDate.set(start);
	const { getByLabelText, queryAllByRole } = render(PlanFrequency);

	await fireEvent.input(getByLabelText('End'), { target: { value: end } });

	expect(queryAllByRole('listitem')).toHaveLength(0);
});
