import React from 'react';
import { render } from '@testing-library/react';
import { PlayerCard } from '../PlayerCard.js';

describe('PlayerCard', () => {
	test('renders without crashing', () => {
		render(<PlayerCard />);
	});

	test('renders Name, Total, and Country', () => {
		const display = render(<PlayerCard />);
		display.getByText(/Name, Total, Country/);
	});
});
