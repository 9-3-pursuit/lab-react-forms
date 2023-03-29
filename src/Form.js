import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Split input into array of numbers
    const valuesArray = values.split(",").map((value) => Number(value.trim()));

    // Validate input
    if (valuesArray.every((value) => !isNaN(value)) && operation !== "") {
      let calculatedResult;
      // Calculate result based on operation
      switch (operation) {
        case "sum":
          calculatedResult = valuesArray.reduce((acc, cur) => acc + cur, 0);
          break;
        case "average":
          calculatedResult = valuesArray.reduce((acc, cur) => acc + cur, 0) / valuesArray.length;
          break;
        case "mode":
          const frequency = valuesArray.reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
          }, {});
          let maxFrequency = 0;
          for (const key in frequency) {
            if (frequency[key] > maxFrequency) {
              calculatedResult = key;
              maxFrequency = frequency[key];
            }
          }
          break;
        default:
          break;
      }
      setResult(calculatedResult);
      // Clear input fields
      setValues("");
      setOperation("");
      setHasError(false);
    } else {
      setResult("Invalid input.");
      setHasError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" className={hasError ? "error" : ""} value={values} onChange={(event) => setValues(event.target.value)} />
        <select id="operation" name="operation" className={hasError ? "error" : ""} value={operation} onChange={(event) => setOperation(event.target.value)}>
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
    </div>
  );
}

export default Form;
