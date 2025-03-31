import { useState } from "react";
import Task from "./Task";
export default function TaskList({
  taskList,
  deleteTask,
  editTask,
  markAsComplete,
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  let searchTaskList = taskList.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  searchTaskList = searchTaskList.filter((task) => {
    if (filter === "remaining") return task.checked === false;
    if (filter === "completed")  return task.checked === true;
    return true; 
  });

  
  return (
    <div className="custom-container mt-24">
      <div>
        <h2 className="text-center text-4xl mt-24 text-white mb-10">Tasks</h2>
        <div className="flex justify-end gap-10 mb-10">
          <input
            placeholder="search"
            value={search}
            onChange={handleChange}
            className="px-4 py-2 text-black rounded-md text-lg"
          />
          <select
            name="state"
            id="state"
            value={filter}
            onChange={handleFilterChange}
            className="px-3 py-2 text-black rounded-md text-lg"
          >
            <option value="all">All</option>
            <option value="remaining">Remaining</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div>
        {searchTaskList?.map((item) => (
          <Task
            text={item.text}
            id={item.id}
            key={item.id}
            checked={item.checked}
            deleteTask={deleteTask}
            editTask={editTask}
            markAsComplete={markAsComplete}
          />
        ))}
      </div>
    </div>
  );
}
