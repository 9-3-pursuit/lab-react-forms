import React from "react";
// import Form from "./Form";
import "./App.css";
import { useState } from "react"

function App() {
  const [input, setInput] = useState("") // * user input
  const [answer, setAnswer] = useState("") // * results/answer
  const [validInput, setValidInput] = useState("") // * valid input; place alert for invalid input in condition
  const [operations, setOpt] = useState("") // * input of sum /avg/ mode

  function handleSubmit(event) { // * function to handle submit form
    event.preventDefault()
    validAns()
  }
  function handleSelectChange(event) { // * function to handle operation changes
    setOpt({ ...operations, [event.target.id]: event.target.value })
  
  }

  function validAns() { // * if valid ans return ans, if invaild ans return alert

    if (!validInput === "") {
      setValidInput(validInput)

    }
    alert("Invalid input.")


  }

  // function optionChange (options,optionAns ){
  //   const sumTotal =  optionAns.reduce((prevNum, changeNum) => prevNum +changeNum,0)
    
  //   if (options === "sum" ) { // ? total of all numbers together
  //    return sumTotal
  //   }
  //   if (options === "average") { // ? avg of numbers given
  //     // const avgNum =
  //     return avgNum
  //   }
  //   if(options === "mode") { // ? repeating number -> loop through for same number(?)
  //     // const repeatNum =
  //     return repeatNum
  //   }
  // }



  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text"  />
        <select id="operation" name="operation" onChange={handleSelectChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit ">Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </main>
  );
}

export default App;
