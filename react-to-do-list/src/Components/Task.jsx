/* eslint-disable react/prop-types */
import "./Task.css";
import { useEffect, useState } from "react";

function Task({ deleteTask, task, index }) {
  const [isBinShown, setIsBinShown] = useState(false);

  useEffect(() => {
    if (
      task.priority &&
      new Date(task.priority).getDate() === new Date().getDate()
    ) {
      document.getElementById(index).style.backgroundColor = "#f8d3c5";
    } else {
      document.getElementById(index).style.backgroundColor = "#a3b899";
    }
  });

  function handleMouseEnter() {
    setIsBinShown(true);
  }

  function handleMouseLeave() {
    setIsBinShown(false);
  }

  return (
    <div
      className="task"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: "yellow" }}
      id={index}
    >
      <h3> {task.text}</h3>
      <h3 className="priority">{task.priority}</h3>
      <div
        className="bin"
        onClick={() => deleteTask(index)}
        style={
          isBinShown ? { visibility: "visible" } : { visibility: "hidden" }
        }
      >
        <img src="../../public/trashcan.png" alt="trashcan" />
      </div>
    </div>
  );
}

export default Task;
