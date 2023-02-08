import Form from "./Form";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [numbers, setNumbers] = useState("");
  const [operation, setOperation] = useState("sum");
  const [result, setResult] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleNumbersChange = (event) => {
    setNumbers(event.target.value);
  };

  const handleSelectChange = (e) => {
    setOperation(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedNumbers = numbers
      .split(",")
      .map((num) => parseFloat(num, 10))
      .filter((num) => !isNaN(num));

      if (parsedNumbers.length === 0) {
        setResult("Invalid input.");
        setHasError(true);
        return;
    }

    switch (operation) {
      case "sum":
        setResult(parsedNumbers.reduce((a, b) => a + b, 0));
        break;
      case "average":
        setResult(parsedNumbers.reduce((a, b) => a + b, 0) / parsedNumbers.length);
        break;
      case "mode":

        const frequencyMap = {};
        parsedNumbers.forEach((number) => {
          if (frequencyMap[number]) {
            frequencyMap[number] += 1;
          } else {
            frequencyMap[number] = 1;
          }
        });

        let mode = null;
        let maxFrequency = 0;
        Object.keys(frequencyMap).forEach((number) => {
          if (frequencyMap[number] > maxFrequency) {
            maxFrequency = frequencyMap[number];
            mode = number;
          }
        });

        setResult(mode || "Invalid input.");
        break;
      default:
        setResult("Invalid input.");
        break;
    }
    setNumbers("");
    setHasError(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={numbers}
          onChange={handleNumbersChange}
          className={hasError ? "error" : ""}
        />
        <select value={operation} onChange={handleSelectChange} id="operation" name="operation">
          <option value=""></option>
          <option value="sum">Sum</option>
          <option value="average">Average</option>
          <option value="mode">Mode</option>
        </select>
        <button type="submit" onclick={handleSubmit}>Calculate</button>
      </form>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <main>
//       <p>Enter each number in the array, separated by a ','</p>
//       <form>
//       <input id="values" name="values" type="text" />
//       <select id="operation" name="operation">
//         <option value=""></option>
//         <option value="sum">sum</option>
//         <option value="average">average</option>
//         <option value="mode">mode</option>
//       </select>
//       <button type="submit">Calculate</button>
//     </form>
//       <section id="result">
//         <p></p>
//       </section>
//     </main>
//   );
// }

// export default App;
