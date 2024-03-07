/* eslint-disable react/prop-types */
import "./Task.css";
import { useEffect, useState } from "react";

function Task({ deleteTask, task, index }) {
  const [isBinShown, setIsBinShown] = useState(false);

  useEffect(() => {
    if (task.date.getDay == new Date().getDay) {
      document.getElementsByClassName("task").backgroundColor = "red";
    } else {
      document.getElementsByClassName("task").backgroundColor = "blue";
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
