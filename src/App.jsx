import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  let addValue = () => {
    setCounter(counter + 1);
  };

  let removeValue = () => {
    setCounter(counter - 1);
  };

  let restartValue = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>Pronoy</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Incress Counter + </button>
      <button onClick={removeValue}>Remove Counter - </button> <br></br> <br></br>
      <button onClick={restartValue}>Restart Counter</button>
    </>
  );
}

export default App;
