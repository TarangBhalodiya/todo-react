import React from "react";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

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
      className={`bg-amber-400 list-none my-2 rounded-lg text-white ${
        checked ? "bg-green-500" : ""
      }`}
    >
      <div className="flex justify-between px-4 py-3 items-center">
        <div className="flex items-center gap-10">
          <input
            type="checkbox"
            name="completed"
            id="mark-as-completed"
            className="h-6 w-6 rounded-lg bg-transparent"
            onChange={() => {
              markAsComplete(id);
            }}
            checked={checked}
          />
          <p className={`text-xl text-black ${checked ? "line-through" : ""}`}>
            {text.charAt(0).toUpperCase() + text.slice(1)}
          </p>
        </div>
        <div className="space-x-4">
          <button
            className={`text-black hover:text-red-500 hover:font-bold px-6 py-1 rounded-lg transition-all ease-in duration-100 ${
              checked ? "hidden" : ""
            }`}
            onClick={() => editTask(id)}
          >
            <img src={editIcon} alt="Edit" />
          </button>
          <button
            className="text-black bg-orange-400 border border-orange-400 px-6 py-2 rounded-lg hover:bg-red-500  hover:border-red-500 transition-all ease-in duration-200"
            onClick={() => deleteTask(id)}
          >
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      </div>
    </li>
  );
}
