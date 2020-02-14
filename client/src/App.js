import React, { Component } from 'react';
import { PlayerCard } from './components/PlayerCard.js';
import { Header } from './components/Header.js';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/api/players`)
			.then(res => {
				console.log(res.data);
				console.table(res.data);
				this.setState({ players: res.data });
				console.log(Array.isArray(this.state.players));
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className='App'>
				<Header className='mainHeader' />
				{this.state.players.map(player => (
					<PlayerCard key={player.id} player={player} />
				))}
			</div>
		);
	}
}

export default App;
