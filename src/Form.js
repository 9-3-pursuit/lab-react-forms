import  {useState} from "react";
import React from "react";

import "./Form.css";

function Form({setResult}) {
  const [numbers, setNumbers] = useState("");
  const [operation, setOperation] = useState("");
  const [error, setError] = useState(false);

  function handelSubmit(event) {
    event.preventDefault();

    let sumNum = numbers.split(",").reduce((total, current) => (total += Number(current)), 0)

    function modeArr(numbers){
      console.log(numbers)
      let mode = 0;
      let occurrence = 1;
      
      numbers.split(",").forEach((num) => {
       if(numbers.split(num).length > occurrence){
        mode = num;

       } 
  
    })
    return mode;
  }

  if(!operation || !numbers || isNaN(sumNum)){
    setError(true)
    setResult("Invalid input.")
  }else{
    setError(false)
    setNumbers("")
    setOperation("")
    if(operation === "sum"){
      setResult(sumNum);

    }else if(operation === "average"){
      setResult(sumNum / numbers.split(",").length)
    }else {
      setResult(modeArr(numbers))
    }
  }

  
  
        
      
    
  }
  return (
    <form onSubmit = {handelSubmit}>
      <input
      onChange = {(event) => setNumbers(event.target.value)}
      id="values"
      name="values"
      type="text"
      value={numbers}
      className= {error? "error" : ""}
      />
      <select
      onChange={(event)=> setOperation(event.target.value)}
      id="operation"
      name="operation"
      value={operation}
      className={error?"error" : ""}
      >



      {/* <input id="values" name="values" type="text" /> */}
      {/* <select id="operation" name="operation"> */}
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
