import React from 'react';
import { render } from '@testing-library/react';
import { Nav } from '../Nav.js';

describe('Nav', () => {
	test('renders without crashing', () => {
		render(<Nav />);
	});
});
