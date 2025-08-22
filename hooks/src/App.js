import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCount] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCount(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCount(counter - 1);
    }
  };

  const resetValue = () => {
    setCount(0);
  };

  const doubleValue = () => {
    if (counter * 2 <= 20) {
      setCount(counter * 2);
    } else {
      setCount(20); // limit max to 20
    }
  };

  const halfValue = () => {
    setCount(Math.floor(counter / 2));
  };

  const randomValue = () => {
    const rand = Math.floor(Math.random() * 21); // 0-20
    setCount(rand);
  };

  const setCustomValue = () => {
    const val = parseInt(prompt("Enter a number (0–20):"), 10);
    if (!isNaN(val) && val >= 0 && val <= 20) {
      setCount(val);
    } else {
      alert("Please enter a valid number between 0 and 20");
    }
  };

  return (
    <div>
      <h1>✨ Count The Value ✨</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue} disabled={counter >= 20}>
        ➕ Add
      </button>

      <button onClick={removeValue} disabled={counter <= 0}>
        ➖ Remove
      </button>

      <button onClick={resetValue}>🔄 Reset</button>
      <button onClick={doubleValue}>✖️ Double</button>
      <button onClick={halfValue}>➗ Half</button>
      <button onClick={randomValue}>🎲 Random</button>
      <button onClick={setCustomValue}>⌨️ Set Custom</button>
    </div>
  );
}

export default App;
