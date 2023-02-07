import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [select, setSelect] = useState("");
  const [numberArray, setNumberArray] = useState();
  const [result, setResult] = useState()


  function handleSelectChange(event){
    setSelect(event.target.value)
  }
  
  
  function handleNumberArray(event){
    setNumberArray(event.target.value.split(",").map((num)=>{return parseInt(num)}));
  }

  function handleFormSubmit(event){
    event.preventDefault();
    if (select === ""){
      setResult("Invalid input.")
     }
     if (select === "sum"){
      let sum = 0;
      numberArray.map((num)=>{ return sum+=num});
      setResult(sum);
     }
     if (select === "average"){
      let average = 0;
      numberArray.map((num)=>{return average+=num})
      average=average/numberArray.length;
      setResult(average)
     }
     if (select === "mode"){
      let modeObj = {};
      let mode = numberArray[0]
      let maxCount = 1;
      
      for(let i = 0; i < numberArray.length; i++){
         let num = numberArray[i];
  
          if(modeObj[num] == null){
              modeObj[num] = 1;
          }else{
              modeObj[num]++;
          }  
          if(modeObj[num] > maxCount){
              mode = num;
              maxCount = modeObj[num];
          }
      }
      setResult(mode)
    }
    console.log(result)
  }
  


  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <input id="values" name="values" type="text" onChange={handleNumberArray}/>
      <select id="operation" name="operation" onChange={handleSelectChange}>
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
  </>
  );
}

export default Form;
