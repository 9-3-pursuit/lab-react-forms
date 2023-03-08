import React from "react";
import Form from "./Form";
import "./App.css";

// to change userInput you can use setState OR use this.setState.userInput.value
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form fun={this} />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
