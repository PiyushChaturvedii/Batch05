import { useState, useRef } from "react";
import "./AddTask.css";
export const AddTask = ({ tasks, setTasks }) => {
  // const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
  const taskRef = useRef("");

  // const handleChange = (event) => {
  //   // setTaskValue(event.target.value);
  //   console.log(taskRef.current.value);
  // };

  const handleReset = () => {
    // setTaskValue("");
    setProgress(false);
    taskRef.current.value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    handleReset();
    setTasks([...tasks, task]);
    setProgress(false);
    console.log(task);
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="task">Task Name:</label> */}
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          ref={taskRef}
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
      <p>{taskRef.current.value}</p>
      {/* <p>{taskValue.length}</p> */}
    </section>
  );
};
