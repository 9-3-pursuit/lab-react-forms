import React from "react";
import "./Form.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setUserInput] = useState("")
  let [operation, setOperation] = useState("")
  let [result, setResult] = useState("")
  
  function handleUserInput(event) {
    setUserInput(event.target.value) 
  }

  function handleOperation(event) {
    setOperation(event.target.value)
  }

  function handleCalculation(event) {
    event.preventDefault();
      
    const inputArr = input.split(",");
    
    if (operation === 'sum') {
      setResult(inputArr.map((num) => Number(num)).reduce((a,b) => a + b, 0))
    }

    if (operation === 'average') {
      setResult(inputArr.map((num) => Number(num)).reduce((a,b) => a + b, 0) / inputArr.length)
    }

    if (operation === 'mode') {
      const numCount = {};
      inputArr.forEach(num => { numCount[num] = (numCount[num] || 0) + 1 })
      const valueArr = Object.values(numCount)
      const highestCount = Math.max(...valueArr)
      const modeIndex = valueArr.indexOf(highestCount)
      const numMode = inputArr[modeIndex]

      setResult(numMode)
    }
  
    if (!input) {
       setResult("Invalid input.")
    }

    if(!operation) {
      setResult("Invalid input.")
    }


 
}

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <form>
        <input id="values" name="values" type="text" onChange={handleUserInput} />
        <select id="operation" name="operation" onChange={handleOperation}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={handleCalculation}>Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </main>
  );
}

export default App;
