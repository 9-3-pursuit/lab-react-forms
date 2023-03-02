import React from "react";
//import Form from "./Form";
import "./App.css";
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [operation, setOperation] = useState('sum');
  const [result, setResult] = useState('');

  const calculate = () => {
    const numbers = input.split(',').map((n) => Number(n.trim()));

    if (numbers.some((n) => Number.isNaN(n))) {
      console.log("Invalid input detected");
      setResult('Invalid input.');
      return;
    }

    let output;

    switch (operation) {
      case 'sum':
        output = numbers.reduce((acc, n) => acc + n, 0);
        break;
      case 'average':
        output = numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
        break;
      case 'mode':
        const frequency = {};
        numbers.forEach((n) => {
          frequency[n] = frequency[n] || 0;
          frequency[n]++;
        });

        let max = -1;
        let mode;

        for (const key in frequency) {
          if (frequency[key] > max) {
            max = frequency[key];
            mode = key;
          }
        }

        output = mode;
        break;
      default:
        setResult('Invalid operation.');
        return;
    }

    setResult(output);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="sum">Sum</option>
        <option value="average">Average</option>
        <option value="mode">Mode</option>
      </select>

      <button onClick={calculate}>Calculate</button>

      <div>{result}</div>
    </div>
  );
}

export default App;
