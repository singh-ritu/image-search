import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getImages = () => {
    console.log(input);
    fetch(
      `https://pixabay.com/api/?key=39975685-7f0a147f2a480877e9b622d71&q=${input}&image_type=photo`
    )
      .then((res) => res.json())

      .then((data) => {
        setResponse(data);
        console.log(data);
      });
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
        <button className="btn" onClick={() => getImages()}>
          Get Images
        </button>
        <h3>{input + " " + "Images are:"} </h3>
      </div>
    </div>
  );
}

export default App;
