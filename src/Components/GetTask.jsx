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

    const newTask = { id: "task_" + Date.now(), text: task };
    const updatedTasks = [...taskList, newTask];

    setTaskList(updatedTasks);
    localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));

    setTask("");
  }

  return (
    <div className="custom-container ">
      <form onSubmit={handleSubmitFrom} className="text-center mx-auto mt-24">
        <input
          value={task}
          placeholder="Task"
          onChange={handleInputChange}
          className="px-4 py-2 text-black rounded-bl-md rounded-tl-md w-1/2"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 text-black rounded-tr-md rounded-br-md bg-yellow-500"
        >
          Add
        </button>
      </form>
    </div>
  );
}

// import React from "react";
// import { useState } from "react";

// export default function GetTask() {
//   const [task, setTask] = useState("");
//   // Move taskArr into component state instead of redeclaring it
//   const [taskArr, setTaskArr] = useState(() => {
//     // Initialize from localStorage if it exists
//     const savedTasks = localStorage.getItem("to-do-list");
//     return savedTasks ? JSON.parse(savedTasks) : [];
//   });

//   function handleInputChange(event) {
//     setTask(event.target.value);
//   }

//   function handleSubmitFrom(event) {
//     event.preventDefault();
//     const newTask = { id: "task_" + Date.now(), taskText: task };
//     // Update the array using the previous state
//     setTaskArr((prevTasks) => {
//       const updatedTasks = [...prevTasks, newTask];
//       localStorage.setItem("to-do-list", JSON.stringify(updatedTasks));
//       console.log(updatedTasks);
//       return updatedTasks;
//     });
//     setTask("");
//   }

//   return (
//     <div className="custom-container">
//       <form onSubmit={handleSubmitFrom} className="text-center mx-auto mt-24">
//         <input
//           value={task}
//           placeholder="Task"
//           onChange={handleInputChange}
//           className="px-4 py-2 text-black rounded-bl-md rounded-tl-md w-1/2"
//           required
//         />
//         <button
//           type="submit"
//           className="px-6 py-2 text-black rounded-tr-md rounded-br-md bg-yellow-500"
//         >
//           Add
//         </button>
//       </form>
//     </div>
//   );
// }
