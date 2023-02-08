import React from "react";
// import Form from "./Form";
import "./App.css";
import {useState} from "react"

function App() {

const [number, setNumber] = useState("")
const [typeOf, setTypeOf] = useState("")
const [result, setResult] = useState("")




function handleSubmit(event) {
 event.preventDefault()


 if (typeOf === "") {
  setResult("Invalid input.")
 }

if (typeOf === "sum") {
setResult (number.split(",").map((num)=> Number(num)).reduce((a,b)=> a+b,0)) //split to seperate the , the array from the strings. .map is an array and for the numbe, and the reduce is used to make it from string to just number
}

if (typeOf === "average"){
setResult(number.split(",").map((num)=> Number(num)).reduce((a,b)=> a+b,0) / number.split(",").length)

}
  if(typeOf === "mode"){
    let ourarray = number.split(",").map((num)=> Number(num))
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

}





function handleSelectChange(event) {
  setNumber(event.target.value)

}

function handleChangeSelect(event) {
  setTypeOf(event.target.value)
}

  return (
    <main>
      
      <p>Enter each number in the array, separated by a ','</p>
      
      <form onSubmit= {handleSubmit}>
        <input id="values" name="values" type="text" onChange={handleSelectChange} />
              <select id="operation" name="operation" onChange= {handleChangeSelect}>
              <option value=""></option>
              <option value="sum">sum</option>
              <option value="average">average</option>
              <option value="mode">mode</option>
        </select>
          <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p> {result}</p>
      </section>
    </main>
  );
}

export default App;
