import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [number,setNumber] = useState('')
  const [operation,setOperation] = useState('')
  let addition, averageNumbers, mode

  const handleSubmit = (event) => {
    event.preventDefault()
    const newObj = {number, operation}
    let splitNumber = number.split(',')
    let numbers = splitNumber.map(num => Number(num));
    console.log(numbers)
      // if (operation === 'sum'){
      //   addition = numbers.reduce((acc,current) => acc + current, 0)
      // } else if (operation === 'average') {
      //   averageNumbers = addition / (numbers.length)
      //  } 
      // else if (operation === 'mode'){
      //   mode = 
      // }
    // }
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
    </form>
  );
}
export default Form;