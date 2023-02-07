import React from "react";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <form>
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </main>
  );
}

export default App;
