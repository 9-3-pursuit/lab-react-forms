import React, { useState } from "react";
import "./Form.css";


const Form = ({setResult}) => {
  const [inputValue, setInputValue] = useState("");

  const [select, setSelect] = useState("");
  const [name, setErrorname] = useState("");

  const handleInputValue = (event) => {
    const { value } = event.target;
    setInputValue(value); 
  };
  const handleSelect = (event) => {
    const { value } = event.target;
    setSelect(value);   
  };
  const reset = () => {
    setErrorname("");
    setInputValue("");
    setSelect("");

  }

  const handleSubmit = (event) => {   
    event.preventDefault();
    const toSumArray = inputValue.split(",").map(i => Number(i));
    const sumTotal = toSumArray.reduce((a,b) => (a + b));
    const average = Math.floor(sumTotal / toSumArray.length);
    const mode = getMode(toSumArray);


    if (!inputValue || !select || Number.isNaN(toSumArray[0])) {
     setResult("Invalid input.");
     setInputValue(inputValue);
     setErrorname('error');
    } else if ((inputValue) && (select === "sum")) {
     setResult(sumTotal);
     reset();
    } else if (inputValue && select === "average") { 
      setResult(average);
      reset();
    } else {
      setResult(mode);
      reset();
    } 
  };
  const getMode = (array) => {
    const freq = {}
    array.forEach((all) => {
      if (freq[all]) {
        freq[all] += 1
      } else {
        freq[all] = 1
      }
    })
    const differentValue = Object.entries(freq).sort((a, b) => {
      return b[1] - a[1]
    }) 
    return differentValue[0][0]
  }

  return (
    <form onSubmit = { handleSubmit }>
      <input
        onChange={handleInputValue}
        value={inputValue}
        className={name}
        id="values"
        name="values"
        type="text"
      />
      <select
        onChange={handleSelect}
        value={select}
        className = {name}
        id="operation"
        name="operation"
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
};


export default Form;
