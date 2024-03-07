import { useState } from "react";
import "./App.css";

function App() {
  function changeColor(event) {
    setColor(event.target.value);
  }
  const [color, setColor] = useState();
  return (
    <div className="container">
      <h1>Color Picker</h1>
      <div style={{ backgroundColor: color }} className="colorSquare">
        <h3>Selected Color {color}</h3>
      </div>
      <h2>Select a Color</h2>
      <input type="color" value={color} onChange={changeColor} />
    </div>
  );
}

export default App;
