import { useState } from "react";
import "./AddTask.css";

//This component contains the banner where tasks are created
function AddTask({ setTasks, tasks, deleteTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");
  const [done, setDone] = useState(false);

  //Functions for setting the text and due date of the tasks
  function handleText(event) {
    setText(event.target.value);
  }

  function handlePriority(event) {
    setPriority(event.target.value);
  }

  //The adding method which adds tasks if they are not empty (if they have a text and a date)
  //and it also sorts the tasks by date into a new variable sorted tasks and then this variable
  //is set as the new array of tasks with the setTasks method
  //setText and setPriority make the inputs elements be empty again after adding tasks
  function add() {
    if (text != "" && priority != 0) {
      const sortedTasks = [...tasks, { text, priority, done }].sort((a, b) =>
        a.priority.localeCompare(b.priority)
      );
      setTasks(sortedTasks);
      setText("");
      setPriority("");
    }
  }

  //Here is where the banner is created, this contains an input element for the text, and input for the date and an add button
  //with the add method
  return (
    <div className="addTask">
      <input
        type="text"
        placeholder="Please enter task"
        value={text}
        onChange={handleText}
      />
      <input
        type="date"
        className="date"
        value={priority}
        onChange={handlePriority}
      />
      <button onClick={add}>+</button>
    </div>
  );
}

export default AddTask;
