import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {

  return (
    <form>
      <input id="values" name="values" type="text" onChange={handleInput}/>
      <select id="operation" name="operation" onChange={handleSelectChange}>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit" onSubmit={handleSubmit}>Calculate</button>
    </form>
  );
}

export default Form;
