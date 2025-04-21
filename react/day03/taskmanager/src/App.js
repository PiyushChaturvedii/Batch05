import { useState } from "react";
import "./App.css";

function App() {
  let [tasks, setTasks] = useState([
    { id: 787, name: "Watch Lectures", completed: false },
    { id: 783, name: "Watch Movies", completed: true },
    { id: 784, name: "Watch News", completed: false },
  ]);

  const [show, setShow] = useState(false);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <h1> Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <li key={task.id}>
              <span>
                {task.id} - {task.name}
              </span>
              <button className="delete" onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
