export const TaskCard = ({ task, handleDelete, xyz }) => {
  return (
    <li className={task.completed ? "completed" : "incomplete"}>
      <span>
        {task.id} - {task.name} - {xyz}
      </span>
      <button onClick={() => handleDelete(task.id)} className="delete">
        Delete
      </button>
    </li>
  );
};
