import React from 'react';
import Emoji from 'a11y-react-emoji';

export const Header = props => {
	return (
		<div className='playerHeader'>
			<h1>
				<Emoji className='footBall' symbol='⚽' /> Women's World Cup {''}
				<Emoji className='footBall' symbol='⚽' />{' '}
			</h1>
			<h2>Player Rank</h2>
		</div>
	);
};
