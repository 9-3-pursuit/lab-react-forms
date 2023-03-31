import React, {useState} from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [result, setResult] = useState("")
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
     <Form />
     <Form setResult = {setResult}/>
     <section id="result">
      <p></p>
      <p>{result}</p>
     </section>
     </main>
  );
}

export default App;
