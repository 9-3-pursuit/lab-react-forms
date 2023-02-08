import React from "react";
// import Form from "./Form";
import "./App.css";
import {useState} from "react";

function App() {

  const [numbersInput, setNumbersInput] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  
  function handleTextChange(event) {
    setNumbersInput(event.target.value);
    // console.log(numbersInput);
  }

  function handleSelectOperation(event) {
    setOperation(event.target.value);
    // console.log(operation);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let numbersArray = numbersInput.split(",").map(number => Number(number));
    
    if (numbersInput === "") {
      setResult("Invalid input.")
    } else if (operation === "") {
      setResult("Invalid input.")
    } else if (numbersArray.every(element => typeof element === "number") && operation === "sum") {
      let sum = 0;
      for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
      }
      setResult(sum);
    } else if (numbersArray.every(element => typeof element === "number") && operation === "average") {
      let sum = 0;
      let average = 0;
      for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
      }
       average = sum / numbersArray.length;
       setResult(average);
    } else if (numbersArray.every(element => typeof element === "number") && operation === "mode") {
      let count = {};
      numbersArray.forEach(num => count[num] = (count[num] || 0) + 1);
      let maxCount = Math.max(...Object.values(count));
      let mode = Object.keys(count).filter(key => count[key] === maxCount);
      setResult(mode);
    }
  }

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <form onSubmit={handleFormSubmit}>
      <input id="values" name="values" type="text" value={numbersInput} onChange={handleTextChange} />
      <select id="operation" name="operation" onChange={handleSelectOperation}>
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
