import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('renders App without crashing', () => {
	render(<App />);
});
