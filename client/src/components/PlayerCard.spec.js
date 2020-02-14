import React from 'react';
import { render } from '@testing-library/react';
import { PlayerCard } from './components/PlayerCard.js';

test('PlayerCard', () => {
	test('renders without crashing', () => {
		render(<PlayerCard />);
	});

	test('it renders Search', () => {
		const display = render(<PlayerCard />);
		display.getByText(/Search/);
	});
});
