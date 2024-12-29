import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 45;

  const addValue = () => {
    // counter += 1;
    if (counter >= 20) {
      return;
    } else {
      setCounter(counter + 1);
    }
  };
  const remValue = () => {
    // counter -= 1;
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter Value : {counter}</h2>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={remValue}>Remove {counter}</button>
      <p>{counter}</p>
    </>
  );
}

export default App;
