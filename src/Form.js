import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [result, setResult] = useState();
  const [input, setInput] = useState();
  const [operation, setOp] = useState();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleOp = (e) => {
    setOp(e.target.value);
  };
  const sum = (array) => array.reduce((a, b) => a + b);
  const average = (array) => array.reduce((a, b) => a + b) / array.length;
  const mode = (array) => {
    let resObject = {};
    let finalArray = [];
    array.forEach((a) => {
      if (!resObject[a]) {
        resObject[a] = 1;
      } else {
        resObject[a] += 1;
      }
    });
    let highest = 0;
    for (let property in resObject) {
      console.log(resObject[property]);
      if (resObject[property] > highest) {
        finalArray = [property];
        highest = resObject[property];
      } else if (resObject[property] == highest) {
        finalArray.push(property);
      }
    }
    if (highest <= 1) {
      setResult("No mode.");
    } else {
      console.log("UPDATED!");
      setResult(finalArray);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let op = document.querySelector("#operation");
    if (input && operation) {
      let nums = input.split(",");
      nums = nums.map((x) => parseInt(x));
      console.log(operation);
      if (operation == "sum") {
        if (!Number.isNaN(sum(nums))) {
          setResult(sum(nums));
        } else {
          setResult("Invalid input.");
        }
      } else if (operation == "average") {
        if (!Number.isNaN(average(nums))) {
          setResult(average(nums));
        } else {
          setResult("Invalid input.");
        }
      } else {
        if (!Number.isNaN(sum(nums))) {
          mode(nums);
        } else {
          setResult("Invalid input.");
        }
      }
    } else {
      setResult("Invalid input.");
    }
  };
  return (
    <div>
      <form>
        <input id="values" name="values" type="text" onChange={handleInput} />
        <select id="operation" name="operation" onChange={handleOp}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Calculate
        </button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </div>
  );
}

export default Form;
