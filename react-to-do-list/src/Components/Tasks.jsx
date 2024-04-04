import AddTask from "./AddTask";
import Task from "./Task";
import { useState } from "react";
import "./Tasks.css";

function Tasks() {
  //Use states so that React re-renders the component every time they are changed
  const [tasks, setTasks] = useState([]);
  const [checkedtasks, setCheckedTasks] = useState([]);

  //This method deletes the tasks, so whenever a task is clicked to be deleted, this method will run with the
  //index to be deleted and this task is filtered out of the tasks array
  function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  }
  return (
    <div className="tasks">
      {
        //This is where all of the tasks get maped, so a Task component is created for every task with
        //an index, a deleteTask method and an AddTask method
      }
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
      {
        //This is Component contains the banner for creating new Tasks,
        //The setTask, tasks and deleteTasks methods are also passed as paramters
      }
      <AddTask
        setTasks={setTasks}
        tasks={tasks}
        deleteTask={deleteTask}
      ></AddTask>
    </div>
  );
}
export default Tasks;
