import "./Task.css";
import { useEffect, useState } from "react";

//This is the Task component which translates to each one of the tasks in my websites front-end
function Task({ deleteTask, task, index }) {
  //This useState will be used later to check if a mouse cursor is over it
  const [isBinShown, setIsBinShown] = useState(false);

  //This is the useEffect that is used to check which color the tasks should have when the task is created
  //remember that tasks are red if they are due today and green if not

  useEffect(() => {
    if (
      task.priority &&
      new Date(task.priority).getDate() === new Date().getDate()
    ) {
      document.getElementById(index).style.backgroundColor = "#ED3224";
    } else {
      document.getElementById(index).style.backgroundColor = "#4C8055";
    }
  });

  //These two methods handle if there is a cursor over the task or not to set the useState to true or false
  function handleMouseEnter() {
    setIsBinShown(true);
  }

  function handleMouseLeave() {
    setIsBinShown(false);
  }

  //Here is where the component is created, it has a text describing the task, a priority which is basically the due date
  //of the task and then an image of a trashcan emoji which will be shown only if the cursor is over the task
  //when pressing on the trash the deleteTask method from the parameters is run and the task is deleted
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
