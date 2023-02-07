import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [number,setNumber] = useState('')
  const [operation,setOperation] = useState('')
  const [result, setResult] = useState('')

  let addition = 0, averageNumbers = 0, mode = {};
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let splitNumber = number.split(',')
    let numbers = splitNumber.map(num => Number(num));
     addition = numbers.reduce((acc,current) => acc + current, 0)
    
      if (operation === 'sum'){
        setResult("The sum of the numbers is " + addition);
      } else if (operation === 'average') {
          averageNumbers = addition / (numbers.length)
          setResult("The average of the numbers is " + averageNumbers) 
      } else if (operation === 'mode'){
        numbers.forEach(num => { mode[num] = (mode[num] || 0) + 1 });
        let modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
        setResult("The mode of the numbers is " + modeValue);
      }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        id="values"
        name="values"
        type="text"
        value = {number}
        onChange = {(event) => setNumber(event.target.value)}
      />
      <select 
        id="operation"
        name="operation"
        value = {operation}
        onChange = {(event) => setOperation(event.target.value)}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
      <p>{ number }</p>
      <p> { operation } </p>
      <p> {result} </p>
    </form>
  );
}
export default Form;