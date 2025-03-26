import React from "react";

export default function Task({
  text,
  id,
  deleteTask,
  editTask,
  markAsComplete,
  checked,
}) {
  return (
    <li
      className={`bg-blue-950 list-none my-2 rounded-lg text-white ${
        checked ? "opacity-30" : ""
      }`}
    >
      <div className="flex justify-between px-4 py-3 items-center">
        <div className="flex items-center gap-10">
          <input
            type="checkbox"
            name="completed"
            id="mark-as-completed"
            className="h-6 w-6 rounded-lg"
            onChange={() => {
              markAsComplete(id);
            }}
            checked={checked}
          />
          <p className={`text-xl ${checked ? "line-through" : ""}`}>
            {text.charAt(0).toUpperCase() + text.slice(1)}
          </p>
        </div>
        <div className="space-x-4">
          <button
            className={`hover:text-yellow-200 px-6 py-1 rounded-lg transition-all ease-in duration-100 ${
              checked ? "hidden" : ""
            }`}
            onClick={() => editTask(id)}
          >
            edit
          </button>
          <button
            className="bg-blue-800 border border-blue-900 px-6 py-2 rounded-lg hover:bg-red-500  hover:border-red-500 transition-all ease-in duration-200"
            onClick={() => deleteTask(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
