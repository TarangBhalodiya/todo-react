import React from "react";

export default function Task({ text, id, deleteTask, editTask }) {
  return (
    <li className="bg-blue-950 list-none my-2 rounded-lg text-white">
      <div className="flex justify-between px-4 py-3 items-center">
        <p className="text-xl">
          {text.charAt(0).toUpperCase() + text.slice(1)}
        </p>
        <div className="space-x-4">
          <button
            className="hover:text-yellow-200 px-6 py-2 rounded-lg transition-all ease-in duration-100"
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
