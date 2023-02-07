import React from "react";
import "./Form.css";
import { useState } from "react";

function Form({ onResultChange }) {
  const [number,setNumber] = useState('')
  const [operation,setOperation] = useState('')
  const [result, setResult] = useState('')
  const [inputValid, setInputValid] = useState(false)

  let addition = 0, averageNumbers = 0, frequency = {};
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!number){
      setResult("Invalid input. Enter numbers");
      setInputValid("error");
      onResultChange(result);
      return;
    }

    if (!operation){
      setResult("Invalid input. Choose an operation");
      setInputValid("error");
      onResultChange(result);
      return;
    }
    let splitNumber = number
                            .trim()                 //trim for space
                            .split(',')             //split for comma
                            .filter(str => str.trim().length > 0); // filter to remove comma if no number after comma
    if (splitNumber.join('').length === 0) {
      setResult("Invalid input. Enter numbers");
      setInputValid("error");
      onResultChange(result);
      return;
    }
    let numbers = splitNumber.map(num => Number(num));
    if (numbers.some(isNaN)) { // check if any alphabet 
      setResult("Invalid input.");
      setInputValid("error");
      onResultChange(result);
      return;
    }
    
     addition = numbers.reduce((acc,current) => acc + current, 0)
    
      if (operation === 'sum'){
        setInputValid(false);
        setResult("The sum of the numbers is: " + addition);
        onResultChange(result);
      } else if (operation === 'average') {
          averageNumbers = addition / (numbers.length)
          setInputValid(false);
          setResult("The average of the numbers is: " + averageNumbers.toFixed(2))
          onResultChange(result);
      } else if (operation === 'mode'){
          numbers.forEach(num => { frequency[num] = (frequency[num] || 0) + 1 });
          let entries = Object.entries(frequency);
          let sortedEntries = entries.sort((a, b) => b[1] - a[1]);
          let maxFrequency = sortedEntries[0][1];
          let modeValues = sortedEntries
                                    .filter(entry => entry[1] === maxFrequency)
                                    .map(entry => entry[0]);
          setInputValid(false);
          setResult("The mode (number occurred frequently) is: " + modeValues.join(', '));
          onResultChange(result);
      }
      setNumber('') // clear input after clicking calculate, as per cypress
      setOperation('') // clear operation after clicking calculate, as per cypress
      setInputValid(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        id="values"
        name="values"
        type="text"
        value = {number}
        autoFocus
        className={inputValid === "error" ? "error" : ""} //  as per cypress
        
        onChange = {(event) => setNumber(event.target.value)}
      />
      <select 
        id="operation"
        name="operation"
        value = {operation}
        className={inputValid === "error" ? "error" : ""} //  as per cypress
        onChange = {(event) => setOperation(event.target.value)}
      >
        <option value="">Select Operation</option>
        <option value="sum">Sum</option>
        <option value="average">Average</option>
        <option value="mode">Mode</option>
      </select>
      <button type="submit">Calculate</button>
      <p>{ number }</p>
      <p> { operation } </p>
      <p> { result } </p>
    </form>
  );
}
export default Form;