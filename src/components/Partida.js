import React from 'react';
import BotaoGol from './BotaoGol'


export default class Partida extends React.Component {
	render() {
		return  (
			<div>
				<h2>{this.props.estadio}</h2>
				<div>
					<span>{this.props.data}</span>
					<span> - </span>
					<span>{this.props.hora}</span>
				</div>
			</div>
		)
	}
}