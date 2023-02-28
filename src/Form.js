import React from 'react';
import './Form.css';

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			error: '',
			numberInput: '',
			total: '',
			operation: '',
		};
	}

	handleFormSubmit = (event) => {
		const { operation, numberInput } = this.state;
		event.preventDefault();

		let arrOfNums = this.state.numberInput.split(',').map((i) => Number(i));

		if (numberInput === '' || numberInput !== Number) {
			this.setState({
				error: 'Invalid input.',
			});
		}

		if (operation === 'sum') {
			this.setState({
				error: '',
				total: arrOfNums.reduce((a, b) => {
					return a + b;
				}),
			});
		}

		if (operation === 'average') {
			this.setState({
				error: '',
				total: arrOfNums.reduce((a, b) => a + b) / arrOfNums.length,
			});
		}

		const mode = (a) =>
			Object.values(
				arrOfNums.reduce((count, element) => {
					if (!(element in count)) {
						count[element] = [0, element];
					}
					count[element][0]++;
					return count;
				}, {})
			).reduce((a, c) => (c[0] < a[0] ? a : c), [0, null])[1];

		if (operation === 'mode') {
			this.setState({
				error: '',
				total: mode(arrOfNums),
			});
		}
	};

	handleNumberInput = (event) => {
		this.setState({
			numberInput: event.target.value,
		});
	};

	chosenOperation = (event) => {
		console.log('Solved!');
		this.setState({
			operation: event.target.value,
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<input
						id="values"
						name="values"
						type="text"
						onChange={this.handleNumberInput}
					/>
					<select
						id="operation"
						name="operation"
						value={this.state.operation}
						onChange={this.chosenOperation}
					>
						<option value=""></option>
						<option value="sum">sum</option>
						<option value="average">average</option>
						<option value="mode">mode</option>
					</select>

					<button type="submit">Calculate</button>
				</form>
				<div>{this.state.total}</div>
				<div>{this.state.error}</div>
			</div>
		);
	}
}

export default Form;
