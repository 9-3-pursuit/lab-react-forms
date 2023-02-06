import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [number,setNumber] = useState('')
  const [operation,setOperation] = useState('sum')

  return (
    <form>
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
      <p> {operation} </p>
    </form>
  );
}
export default Form;