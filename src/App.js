import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputNumbers, setInputNumbers] = useState(""); //user input
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(""); //valid input; please alert for invalid answer

  function handleTextChange(event) {
    setInputNumbers(event.target.value);
  }

  function handleSelectOperation(event) {
    setOperation(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const numbers = inputNumbers.split(",").map((number) => Number(number));

    if (inputNumbers === "") {
      setResult("Invalid input.");
    } else if (operation === "") {
      setResult("Invalid input.");
    } else if (
      numbers.every((element) => typeof element === "number") &&
      operation === "sum"
    ) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
      }
      setResult(sum);
    } else if (
      numbers.every((element) => typeof element === "number") &&
      operation === "average"
    ) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
      }
      let average = sum / numbers.length;
      setResult(average);
    } else if (
      numbers.every((element) => typeof element === "number") &&
      operation === "mode"
    ) {
      let mode = 0;
      let maxCount = 0;
      for (let i = 0; i < numbers.length; i++) {
        let count = 0;
        for (let j = 0; j < numbers.length; j++) {
          if (numbers[j] === numbers[i]) {
            count++;
          }
        }
        if (count > maxCount) {
          mode = numbers[i];
          maxCount = count;
        }
      }
      setResult(mode);
    }
  }
  return (
    <main>
         <p>Enter each number in the array, separated by a ','</p>
      <form onSubmit={handleFormSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          values={inputNumbers}
          onChange={handleTextChange}
        />
        <select
          id="operation"
          name="operation"
          onChange={handleSelectOperation}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </main>
  );
}

export default App;
