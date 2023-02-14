import { React, useState } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState("");
  const [type, setType] = useState("");
  const [answer, setAnswer] = useState(null);

  function handleChange(e) {
    const setMethod = e.target.id === "operation" ? setType : setNumbers;
    setMethod(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const mappedNumbers = numbers.split(",").map((num) => Number(num));

    let textIsValid = mappedNumbers.every((num) => Number.isFinite(num));

    if (!textIsValid || type === "") {
      setAnswer("Invalid input.");
    }

    if (type !== "mode") {
      const sum = mappedNumbers.reduce((first, second) => {
        return first + second;
      }, 0);

      type === "sum" ? setAnswer(sum) : setAnswer(sum / mappedNumbers.length);
    }

    if (type === "mode") {
      let modeObj = mappedNumbers.reduce((first, second) => {
        first.hasOwnProperty(second)
          ? (first[second] += 1)
          : (first[second] = 1);
        return first;
      }, {});

      setAnswer("");
    }
  }

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={numbers}
          onChange={handleChange}
        />
        <select id="operation" name="operation" onChange={handleChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{answer}</p>
      </section>
    </main>
  );
}

export default App;
