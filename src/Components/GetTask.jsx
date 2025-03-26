import React from "react";
import { useState } from "react";

export default function GetTask({ taskList, setTaskList }) {
  const [task, setTask] = useState("");

  function handleInputChange(event) {
    setTask(event.target.value);
  }

  function handleSubmitFrom(event) {
    event.preventDefault();
    if (!task.trim()) return;

    const newTask = { id: "task_" + Date.now(), text: task, Checked: false };
    const updatedTasks = [...taskList, newTask];

    setTaskList(updatedTasks);
    localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));

    setTask("");
  }

  return (
    <div className="custom-container relative">
      <h1>Add your task</h1>
      <form onSubmit={handleSubmitFrom} className="text-center mx-auto my-24">
        <input
          value={task}
          placeholder="Task"
          onChange={handleInputChange}
          className="px-4 py-2 text-black rounded-bl-md rounded-tl-md w-1/2 text-2xl"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 text-black rounded-tr-md rounded-br-md bg-yellow-500 text-2xl"
        >
          Add
        </button>
      </form>
    </div>
  );
}
