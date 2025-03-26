import { useState, useEffect } from "react";
import GetTask from "./Components/GetTask";
import TaskList from "./Components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("to-do-list")) || [];
    setTaskList(savedTasks);
  }, []);

  const deleteTask = (taskId) => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    const updatedTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTasks);

    localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));
  };

  const editTask = (taskId) => {
    const editedTaskText = prompt("Edit your task");
    if (!editedTaskText) return;
    const updatedTasks = taskList.map((task) =>
      taskId == task.id ? { ...task, text: editedTaskText } : task
    );
    setTaskList(updatedTasks);
    localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));
  };

  const markAsComplete = (taskId) => {
    const updatedTasks = taskList.map((task) =>
      taskId == task.id ? { ...task, Checked: !task.Checked } : task
    );
    setTaskList(updatedTasks);
    localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));
  };

  return (
    <>
      <GetTask taskList={taskList} setTaskList={setTaskList} />
      <TaskList
        taskList={taskList}
        deleteTask={deleteTask}
        editTask={editTask}
        markAsComplete={markAsComplete}
      />
    </>
  );
}

export default App;
