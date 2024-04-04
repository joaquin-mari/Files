import Tasks from "./Components/Tasks";
import "./App.css";

//This is the main App function, it only contains the Tasks component
function App() {
  return (
    <div className="container">
      <h1>My Tasks</h1>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
