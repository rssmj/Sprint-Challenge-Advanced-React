import React from 'react';

export const PlayerCard = props => {
	return (
		<div>
			<h1>{props.player.name}</h1>
			<h2>Search Total {props.player.searches}</h2>
			<h4> Country </h4>
			{props.player.country}
		</div>
	);
};
