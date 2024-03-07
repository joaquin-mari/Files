/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AddTask.css";

function AddTask({ setTasks, tasks, deleteTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");
  const [done, setDone] = useState(false);

  function handleText(event) {
    setText(event.target.value);
  }

  function handlePriority(event) {
    setPriority(event.target.value);
  }

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
