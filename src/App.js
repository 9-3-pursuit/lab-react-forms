import React from "react";
//import Form from "./Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState('');
  const [type, setType] = useState('');
  const [answer,setAnswer] = useState(null);


function handleChange(event) {
  const setMethod = event.target.id === 'operation' ? setType : setNumbers;
  setMethod(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  const mappedNumbers = numbers.split(',').map((num) => Number(num));

  let textIsValid = mappedNumbers.every((num) => Number.isFinite(num));
  let typeIsValid = type !== '';

  if(!textIsValid || !typeIsValid) {
    setAnswer('Invalid input.');
  }

  if(textIsValid && typeIsValid) {
    if(type === 'sum') {
      let sumAnswer = mappedNumbers.reduce((first, second) => {
        return first + second;
      }, 0);
      setAnswer(sumAnswer);
    }

    if(type === 'average') {
      let sumAnswer = mappedNumbers.reduce((first, second) => {
        return (first + second / mappedNumbers.length);
      }, 0);
      setAnswer(sumAnswer);
    }

    if(type === 'mode') {
      // count amount of occurrences of each number
      let sumAnswer = mappedNumbers.reduce((first, second) => {
          // create object
          const obj = {};
          //loop over array(mappedNumbers)
          mappedNumbers.forEach(number => {
            // for each number in array
            // if it doesn't exist as a key on the object,
            // create one and set its value to 1.
            if (!obj[number]) {
              obj[number] = 1;
            } else {
              // if it already exists as key on the object,
              // increment its corresponding value.
              obj[number] += 1;
            }
          });

          console.log(obj);

          //return object key with highest value.
          let highestValue = 0;
          let highestValueKey = -Infinity;

          for (let key in obj) {
            const value = obj[key];
            if (value >= highestValue && Number(key) > highestValueKey) {
              highestValue = value;
              highestValueKey = key;
            }
          }
        //convert key back to number 
        return (highestValueKey);
      }, 0);
      setAnswer(sumAnswer);
    }
  }
}


  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <form onSubmit={handleSubmit}>
      <input id="values" 
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
