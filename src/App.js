import React from "react";
// import Form from "./Form";
import "./App.css";
import { useState } from "react"

function App() {
  const [input, setInput] = useState("") // * user input
  const [answer, setAnswer] = useState("") // * results/answer
  const [operations, setOpt] = useState("") // * input of sum /avg/ mode

  function handleSubmit(event) { // * function to handle submit form
    event.preventDefault()

    if (!input || !operations) {
      setAnswer(true)
      return setAnswer(`Invaild input.`)

  }
  if (operations === "sum") { // ? total of all numbers together
    setAnswer(input.split(",").map((number) => Number(number)).reduce((prevNum, changeNum) => prevNum + changeNum, 0))

  }
  if (operations === "average") { // ? avg of numbers given
    setAnswer((input.split(",").map((number) => Number(number)).reduce((prevNum, changeNum) => prevNum + changeNum, 0)) /
      input.split(",").length)
  }
  if (operations === "mode") { // ? finds mode;number repeating
    setAnswer(input.reduce((prevNum, changeNum) => {
      if (prevNum[changeNum]) {
        prevNum[changeNum]++
      } else {
        prevNum[changeNum] = 1
      }
      return prevNum
    }, []
    ))
  }
  // if (operations === "") {
  //   setAnswer("Invaild input.")
  }
  function handleSelectChangeInput(event) { // * function to handle user input changes
    setInput(event.target.value)
  }

  function handleSelectChangeOpt(event) { // * function to handle operation add-on changes
    setOpt(event.target.value)
  }


  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" onChange={handleSelectChangeInput} />
        <select id="operation" name="operation" onChange={handleSelectChangeOpt}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" >Calculate</button>
      </form>
      <section id="result">
        <p> {answer} </p>
      </section>
    </main>
  );
}

export default App;
