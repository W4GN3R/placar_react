import React from 'react';

export default class Contador extends React.Component {
	constructor() {
		super();
		this.state = {
			contador: 0
		}
	}
	decrementar() {
		this.setState({
			contador: this.state.contador - 1,
		})
	}
	ecrementar() {
		this.setState({
			contador: this.state.contador + 1,
		})
	}
	render() {
		return (
			<div>
				<h1>{this.state.contador}</h1>
				<div>
					<button onClick={this.decrementar.bind(this)}>-</button>
					<button onClick={this.ecrementar.bind(this)}>+</button>
				</div>
			</div>
		);
	}
}