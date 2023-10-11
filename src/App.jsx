import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter image name"
          className="input"
          onChange={handleInput}
          value={input}
        ></input>
        <button className="btn">Get Images</button>
        <h3>{input + " " + "Images are:"} </h3>
      </div>
    </div>
  );
}

export default App;
