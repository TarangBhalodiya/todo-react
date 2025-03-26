import Task from "./Task";
export default function TaskList({ taskList, deleteTask, editTask }) {
  return (
    <div className="custom-container">
      <div className="mt-24">
        {taskList?.map((item) => (
          <Task
            text={item.text}
            id={item.id}
            key={item.id}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
}
