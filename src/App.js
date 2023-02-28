import React from 'react';
import Form from './Form';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<main>
				<p>Enter each number in the array, separated by a ','</p>
				<Form />
			</main>
		);
	}
}

export default App;
