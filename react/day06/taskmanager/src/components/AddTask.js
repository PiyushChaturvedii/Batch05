import { useState } from "react";
import "./AddTask.css";
export const AddTask = () => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  const handleChange = (event) => {
    setTaskValue(event.target.value);
  };

  const handleReset = () => {
    setTaskValue("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(progress),
    };
    handleReset();
    setProgress(false);
    console.log(task);
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="task">Task Name:</label> */}
        <input
          onChange={handleChange}
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          value={taskValue}
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>

        <button type="submit">Add Task</button>
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </form>
      <p>{taskValue}</p>
      <p>{taskValue.length}</p>
    </section>
  );
};
