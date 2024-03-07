/* eslint-disable react-hooks/rules-of-hooks */
import AddTask from "./AddTask";
import Task from "./Task";
import { useState } from "react";
import "./Tasks.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [checkedtasks, setCheckedTasks] = useState([]);
  function deleteTask(indexToDelete) {
    // Changed the deleteTask function to accept an index parameter
    const updatedTasks = tasks.filter((task, index) => index !== indexToDelete); // Filter out the task with the provided index
    setTasks(updatedTasks); // Update the tasks state with the filtered tasks
  }
  return (
    <div className="tasks">
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task
              task={task}
              deleteTask={deleteTask}
              index={index}
              AddTask={AddTask}
            ></Task>
          </li>
        ))}
      </ul>
      <AddTask
        setTasks={setTasks}
        tasks={tasks}
        deleteTask={deleteTask}
      ></AddTask>
    </div>
  );
}
export default Tasks;
