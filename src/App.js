import React from "react";
// import Form from "./Form";
import { useState } from "react";

import "./App.css";


function App() {
  let [userInput, setuserInput] = useState("");
  let [operation, setOperation] = useState("")
  let [result, setResult] = useState("")

  function handleUserInput(event) {
    setuserInput(userInput = event.target.value)

  }
  // updating state
  function handleOperation(event) {
    setOperation(operation = event.target.value)
  }

  function calculateOption(event) {
    event.preventDefault()
    event.target.reset()

    if (!userInput) {
      setResult(result = "Invalid input.")
      return
    }
    const inputArray = userInput.split(",")
    const numArray = inputArray.map(num => Number(num))

    if (numArray.some(num => isNaN(num))) {
      setResult(result = "Invalid input.")
      return
    } else {
      switch (operation) {
        case 'sum':
          getSum(numArray);
          break;
        case "average":
          getAverage(numArray);
          break;
        case "mode":
          getMode(numArray);
          break;
        default:
          setResult(result = "Invalid input.")
      }
    }
  }
  function getSum(numArray) {
    const sum = numArray.reduce((total, num) => {
      return total + num
    }, 0)
    setResult(result = sum)
  }

  function getAverage(numArray) {
    const numSum = numArray.reduce((total, num) => {
      return total + Number(num)
    }, 0)
    const numAverage = numSum / numArray.length

    setResult(result = numAverage)
  }

  function getMode(numArray) {
    const numCount = {};
    numArray.forEach(num => { numCount[num] = (numCount[num] || 0) + 1
  })
  const valuesArray = Object.values(numCount)
  const highestCount = Math.max(...valuesArray)
  const modeIndex = valuesArray.indexOf(highestCount)
  const numMode = numArray[modeIndex]

  setResult(result = numMode)
}

return (
  <main>
    <p>Enter each number in the array, separated by a ','</p>
    <form onSubmit={calculateOption}>
      <input id="values" name="values" type="text" onChange={handleUserInput} />
      <select id="operation" name="operation" onChange={handleOperation}>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
    <section id="result">
      <p>
        {result}
      </p>
    </section>
  </main>
);
}


export default App;
