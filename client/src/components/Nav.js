import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js';

export const Nav = () => {
	const [deluminate, setDeluminate] = useDarkMode(false);
	const doNotPush = e => {
		e.preventDefault();
		setDeluminate(!deluminate);
	};
	return (
		<nav className='navBar'>
			<div className='navHeader'>
				<h1 className='worldCup'> Women's World Cup </h1>
				<h2 className='yearRank'> 2019 Rankings </h2>
			</div>
			<div className='darkness'>
				<div
					onClick={doNotPush}
					className={deluminate ? newFunction() : 'danger'}
				/>
			</div>
		</nav>
	);
};

function newFunction() {
	return 'danger selfDestruct';
}
