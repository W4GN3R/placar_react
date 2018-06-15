import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Maracanã/RJ",
		data: "01/06/2018",
		horario: "19h",
	},
	casa: {
		nome: "vasco",
	},
	visitante: {
		nome: "Flamengo",
	}

};

export default class App extends React.Component {
	render() {
		return <PlacarContainer {...dados} />
	}
}

