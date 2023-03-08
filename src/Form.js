import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      selectChange: "",
      userInput: "",
    };
  }
  // event listener for userInput
  handleUserInput = (event) => {
    this.setState({ userInput: event.target.value });
  };

  // select change function method
  selectChange = (event) => {
    this.setState({ selectChange: event.target.value });
  };

  // stop reload
  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.userInput.length === 0 ||
      !Number(this.state.userInput.split(",").join(""))
    ) {
      this.props.fun.setState({ result: "Invalid input." });
    }

    // function for dropDown
    else {
      if (this.state.selectChange === "sum") {
        const sum = this.state.userInput.split(",").reduce((a, b) => {
          return Number(a) + Number(b);
        });
        this.props.fun.setState({ result: sum });
      }

      if (this.state.selectChange === "average") {
        const average =
          this.state.userInput.split(",").reduce((a, b) => {
            return Number(a) + Number(b);
          }) / this.state.userInput.split(",").length;
        this.props.fun.setState({ result: average });
      }

      if (this.state.selectChange === "mode") {
        const obj = {};
        for (const element of this.state.userInput.split(",")) {
          if (obj[element]) {
            obj[element] = ++obj[element];
          } else {
            obj[element] = 1;
          }
        }
        let mode;
        for (const key in obj) {
          if (obj[key] > obj[mode] || !obj[mode]) {
            mode = key;
          }
        }
        this.props.fun.setState({ result: mode });
      }
    }
  };

  // onSubmit allows access to
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          onChange={this.handleUserInput}
        />

        <select onChange={this.selectChange} id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
