import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [numbersInput, setNumbersInput] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function handleTextChange(event) {
    setNumbersInput(event.target.value);
  }

  function handleSelectOperation(event) {
    setOperation(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let numberArray = numbersInput.split(",").map(number => Number(number));

    if (numbersInput === "") {
      setResult("Invalid input.")
    } else if (operation === "") {
      setResult("Invalid input.")
    } else if (numberArray.every(element => typeof element === "number") && operation === "sum") {
      let sum = 0;
      for (let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
      }
      setResult(sum);
    } else if (numberArray.every(element => typeof element === "number") && operation === "average") {
      let sum = 0;
      let average = 0;
      for (let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
      }
       average = sum / numberArray.length;
       setResult(average);
    } else if (numberArray.every(element => typeof element === "number") && operation === "mode") {
      let count = numberArray.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {});
      let maxCount = Math.max(...Object.values(count));
      let mode = Object.keys(count).filter(key => count[key] === maxCount);
      setResult(mode);
    }
  }


  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <form>
      <input id="values" name="values" type="text" onChange={handleTextChange}/>
      <select id="operation" name="operation" onChange={handleSelectOperation}>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit" onSubmit={handleFormSubmit}>Calculate</button>
    </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </main>
  );
}



export default App;
