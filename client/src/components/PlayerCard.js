import React from 'react';
import Emoji from 'a11y-react-emoji';

export const PlayerCard = ({ player }) => {
	// console.log(player);

	return (
		<div className='playerContainers'>
			<div className='playerCards'>
				<div className='playerStats'>
					<div className='playerCardHead'>
						{' '}
						<h1 className='playerID'>
							{' '}
							<Emoji className='cardFootball' symbol=' ⚽ ' /> {player.id + 1}{' '}
						</h1>
						<h1 className='playerName'>{player.name}</h1>
					</div>
					<h2>Trending Score: {player.searches}</h2>
					<h3> {player.country}</h3>
				</div>
			</div>
		</div>
	);
};
