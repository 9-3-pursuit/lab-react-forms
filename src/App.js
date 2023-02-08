import React from "react";
//import Form from "./Form";
import "./App.css"
import { useState } from "react";


function App() {
  const [number, setNumber] = useState("");
  const [typef, setType] = useState("");
  const [result, setResult]= useState(0)
  
  const handleSelectedChange =(event)=>{
  setNumber(event.target.value.split(",").map((num)=>Number(num)

  ))
 
  }
//4,6,7,8,9
  const selectOption=(event)=>{
    setType(event.target.value)
    
    
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(typef === "sum"){
      setResult(number.reduce((a,b)=>a+b,0))
       console.log(result)
    }
    if(typef === "average"){
      setResult(number.reduce((a,b)=>a+b,0)/number.length)
    }
   
    if(typef === "mode"){
      let ourarray = number.map((num)=> Number(num))
      let obj = {}
      ourarray.forEach(numb => {
        if (!obj[numb]) {
          obj[numb] = 1
        } else {
          obj[numb] += 1
        }
      })
       let highestValue = 0;
       let highestValueKey = -10000;
       for (let key in obj) {
        const value = obj[key]
        if ((value >= highestValue) && (Number(key) > highestValueKey)) {
           highestValue = value
           highestValueKey = Number(key)
        }
       }
    setResult(highestValueKey)
      }
      if (typef === "") {
        setResult("Invalid input.")
       }
      }

  
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <form onSubmit={handleSubmit}>
      <input id="values" name="values" type="text" onChange={handleSelectedChange} />
      <select id="operation" name="operation" onChange={selectOption}>
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
