import React from 'react';
import BotaoGol from './BotaoGol'


export default class Time extends React.Component {
	handleClick(event) {
		event.preventDefault();
		this.props.marcarGol();
	}
	render() {
		return  (
			<button onClick={this.handleClick.bind(this)}>Gol!</button>
		)
	}
}