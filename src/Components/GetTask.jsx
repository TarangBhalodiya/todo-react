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

    const newTask = { id: "task_" + Date.now(), text: task, checked: false };
    const updatedTasks = [...taskList, newTask];

    setTaskList(updatedTasks);
    localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));

    setTask("");
  }

  return (
    <div className="custom-container relative">
      <form onSubmit={handleSubmitFrom} className="text-center mx-auto my-24">
        <input
          value={task}
          placeholder="Task"
          onChange={handleInputChange}
          className="px-4 py-2 text-amber-400 rounded-bl-md rounded-tl-md w-1/2 text-2xl border border-amber-400 bg-transparent"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 text-black rounded-tr-md rounded-br-md bg-amber-400 text-2xl border border-amber-400 hover:border-orange-400 hover:bg-orange-400 transition-all ease-in duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
}
