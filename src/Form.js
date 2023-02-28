import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [input, setUserInput] = useState("");
  // first param says "what is the thing" second says "what to do"
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function handleUserInput(event) {
    setUserInput(event.target.value);
  }

  function handleOperation(event) {
    setOperation(event.target.value);
  }

  // function calculateOption(event) {
  //   event.preventDefault();
  //   event.target.reset();
  // }

  // if (!input) {
  //   setResult("Invalid input.");
  // }
  const inputArray = input.split(",");
  const numArray = inputArray.map((num) => Number(num));

  const calculateNumArray = (operation) => {
    // if (numArray.some((num) => isNaN(num))) {
    //   setResult((result = "Invalid input."));
    //   return;
    // } else {
    switch (operation) {
      case "sum":
        getSum(numArray);
        break;
      case "average":
        getAverage(numArray);
        break;
      case "mode":
        getMode(numArray);
        break;
      default:
        setResult("Invalid input.");
        break;
      // }
    }

    function getSum(numArray) {
      const sum = numArray.reduce((total, num) => {
        return total + num;
      }, 0);
      setResult(sum);
    }

    function getAverage(numArray) {
      const numSum = numArray.reduce((total, num) => {
        return total + Number(num);
      }, 0);
      const numAverage = numSum / numArray.length;
      setResult(numAverage);
    }

    function getMode(numArray) {
      const numCount = {};
      numArray.forEach((num) => {
        numCount[num] = (numCount[num] || 0) + 1;
      });
      const valuesArray = Object.values(numCount);
      const highestCount = Math.max(...valuesArray);
      const modeIndex = valuesArray.indexOf(highestCount);
      const numMode = numArray[modeIndex];
      setResult(numMode);

      // setResult((result = numMode));
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    calculateNumArray(operation);
  }

  return (
    <main>
      <p> Enter each number in the array, seperated by a ','</p>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          // value={input}
          onChange={handleUserInput}
        />
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

export default Form;
