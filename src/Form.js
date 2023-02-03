import React from "react";
import "./Form.css";

import { useState } from "react";

function Form() {
  const [values, setValues] = useState("");
  const [result, setResult] = useState("");

  const [operation, setOperation] = useState("");
  const [validInput, setValidInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const inputValue = event.target.values.value;

      if (inputValue === "" || /[A-Za-z]/.test(inputValue)) {
        throw new Error("These are not number values.");
      }

      setValidInput(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" value={values} onChange={(event) => setValues(event.target.value)} className={validInput ? null : "error"} />
        <select id="operation" name="operation" value={operation} onChange={(event) => setOperation(event.target.value)} className={validInput ? null : "error"}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default Form;
