import React from "react";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [number, setNumber] = useState('');
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')
  const [validInput, setValidInput] = useState(false)
 
  const handleInput = (event) => {
    setNumber(event.target.value);

  }


  const handleOperation = (event) => {
    setOperation(event.target.value);
    
  }

 


  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!operation) {
      setResult('Invalid input.')
      setValidInput('error')
      return 
    }
    
    if (!number) {
      setResult('Invalid input.')
      setValidInput('error')
      return
    }
    
    

    const onlyNumbers = number.split(',').map((num) => {
      return Number(num);

    });
    
    if (onlyNumbers.some(num => isNaN(num))) {
      setResult('Invalid input.')
      setValidInput('error')
      return
    }

    if (operation === 'sum') {
     
      let arrayOfNumbers = [...onlyNumbers]
      setResult(arrayOfNumbers.reduce((a, b) => a + b))
      setValidInput(false)
      event.target.reset()
      

    } else if (operation === 'average') {

      let arrayOfNumbers = [...onlyNumbers]
      setResult(arrayOfNumbers.reduce((a, b) => a + b) / arrayOfNumbers.length)
      setValidInput(false)
      event.target.reset()
      
    } else if (operation === 'mode') {

      let arrayOfNumbers = [...onlyNumbers]
      setResult(arrayOfNumbers.sort((a, b) =>
        arrayOfNumbers.filter(v => v === a).length
        - arrayOfNumbers.filter(v => v === b).length
      ).pop());
      setValidInput(false)
      event.target.reset()
      
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInput} className={validInput === "error" ? "error" : '' } id="values" name="values" type="text" />
      <select onChange={handleOperation} className={validInput === "error" ? "error" : '' } id="operation" name="operation">
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
      <p>{result}</p>
    </form>
  );
}

export default Form;

