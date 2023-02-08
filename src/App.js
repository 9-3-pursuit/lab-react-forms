import React from "react";
import "./App.css";
import {useState} from "react";


function App() {
  let [numInput, setNumInput] = useState(null);
  let [operation, setOpertation] = useState(null);
  let [result, setResult] = useState("")
  
  function handleNumInput (event) {
    setNumInput(numInput = event.target.value);
    console.log(numInput);
  }
  function handleOperation (event) {
    setOpertation(operation= event.target.value)
   
   
  }
  function calculateInput (event) {
    event.preventDefault()
    
    if (!numInput) {
    setResult(result = "Invalid input.")
    return
    }
    
    const inputArr = numInput.split(",");
    const numArr = inputArr.map(num => Number(num))
    
    if (numArr.some(num => isNaN(num))) {
      setResult(result = "Invalid input.")
    return
    } else {
      switch (operation) {
       case 'sum':
         getSum(numArr);
         break;
        case 'average':
         getAverage(numArr);
         break;
        case 'mode':
         getMode(numArr);
         break;
        default:
         setResult(result = "Invalid input.")
         break;
       }
   }
  } 
        
     
  function getSum (numArr) {

    const sum = numArr.reduce((total, num) => {
      return total + Number(num)
    }, 0)
    setResult(result = sum)
  }
  
  function getAverage(numArr) {

    const numSum = numArr.reduce((total, num) => {
      return total + Number(num)
      },0)
         const numAvg = numSum/numArr.length
          setResult(result = numAvg);
    
  }
  function getMode (numArr) {
    const numCount = {};
        numArr.forEach(num => { numCount[num] = (numCount[num] || 0) + 1 })
        const valuesArr = Object.values(numCount)
        const highestCount = Math.max(...valuesArr)
        const modeIndex =  valuesArr.indexOf(highestCount)  
        const numMode = numArr[modeIndex]
       setResult(result = numMode)
   }
 
  
  
    

  
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <form onSubmit={calculateInput}>
      <input id="values" name="values" type="text" onChange={handleNumInput}/>
      <select id="operation" name="operation" onChange={handleOperation}>
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