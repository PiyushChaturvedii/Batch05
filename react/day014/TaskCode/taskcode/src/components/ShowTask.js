import React from "react";

export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleEdit = (id) => {
    const seletedTask = tasklist.find((todo) => todo.id === id);
    // console.log(seletedTask);
    setTask(seletedTask);
  };
  const handleDelete = (id) => {
    const updateTasklist = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updateTasklist);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name"> {todo.name}</span>
              <span className="time"> {todo.time}</span>
            </p>
            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
