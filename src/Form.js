import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [select, setSelect] = useState("");
  const [values, setValues] = useState("");
  const [result, setResult] = useState();
  const [inputClass, setInputClass] = useState();
  const [selectClass, setSelectClass] = useState();

  function handleSelectChange(event){
    setSelect(event.target.value)
  }
  
  
  function handleValues(event){
    setValues(event.target.value.split(","));
    //event.target.value.split(",").map((num)=>{return parseInt(num)})
  }

  function handleFormSubmit(event){
    event.preventDefault();
    // console.log(values)
    // console.log(isNaN(values[0]))
    // console.log(values.some((num)=>{return isNaN(num)}))

    if (select === "" || values.some((num)=>{return isNaN(num)})){
      setResult("Invalid input.")
      setInputClass("error");
      setSelectClass("error")
     } else {
      if (select === "sum"){
        let sum = 0;
        values.map((num)=>{ return sum+=parseInt(num)});
        setResult(sum);
        console.log("here1")
       }
       if (select === "average"){
        let average = 0;
        values.map((num)=>{return average+=parseInt(num)})
        average=average/values.length;
        setResult(average)
       }
       if (select === "mode"){
        let modeObj = {};
        let mode = parseInt(values[0])
        let maxCount = 1;
        
        for(let i = 0; i < values.length; i++){
           let num = parseInt(values[i]);
    
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
      setValues("");
      setSelect("");
      setInputClass("");
      setSelectClass("");
     }
     
  }
  


  return (
    <>
    <form onSubmit={handleFormSubmit} >
      <input class={inputClass} id="values" name="values" type="text" onChange={handleValues} value={values}/>
      <select class={selectClass} id="operation" name="operation" onChange={handleSelectChange} value={select}>
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
