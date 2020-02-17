import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../Header.js';

describe('Header', () => {
	test('renders without crashing', () => {
		render(<Header />);
	});

	test('it renders World Cup', () => {
		const display = render(<Header />);
		display.getByText(/World Cup/);
	});
});
