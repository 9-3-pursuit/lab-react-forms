import React from "react";
// import Form from "./Form";
import "./App.css";
import {useState} from "react"


function App() {
  const [num, setNum] = useState("")
  const [typeOf,setTypeOf] = useState("")
  const[results,setResults] =useState("999")

  function handleSubmit(e){
    e.preventDefault()

    if(typeOf === "sum") {
      setResults(num.split(",").map((num)=> Number(num)).reduce((a,b)=> a+b,0) )
    }
    if(typeOf === "average") {
      setResults(num.split(",").map((num)=> Number(num)).reduce((a,b)=> a+b,0) / num.split(",").length)
    }
    if(typeOf === "mode"){
      let array =num.split(",").map((num)=> Number(num))

let object = []

      array.forEach(num => {
        if(!object[num]) {
          object[num] = 1

        }else{
          object[num]+= 1
        }
     
      })
let highestValue = 0
let highestValueKey = -10000
 for ( let key in object){
  const value = object[key]
  if ((value >= highestValue) && (Number(key)> highestValueKey)) {
    highestValue = value
    highestValueKey = Number(key)

  }
 }
 setResults(highestValueKey)
    }
    if(typeOf === "") {
      setResults("Invalid input.")
    }
  }
function handleSelectChange(e){
setNum(e.target.value)
}
function handleChangeSelect(e) {
  setTypeOf(e.target.value)

}
console.log("array")
return(
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      
      <form onSubmit = {handleSubmit}>
        <input
        id="values"
        name="values"
        type="text"
        onChange={handleSelectChange}
        />
        
          
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation" onChange={handleChangeSelect}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{results}</p>
      </section>
    

    </main>
  
)}

export default App;
