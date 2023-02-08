import React from "react";
import "./Form.css";
import {useState} from "react";

function Form() {
  const [numInput, setNumInput] = useState(0)

  return (
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
  );
}

export default Form;
