import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";
export const TaskList = (props) => {
  let [tasks, setTasks] = useState([
    { id: 787, name: "Watch Lectures", completed: true },
    { id: 783, name: "Watch Movies", completed: true },
    { id: 784, name: "Watch News", completed: false },
  ]);

  const [show, setShow] = useState(false);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <h1>
        {" "}
        Task List - {props.title} - {props.subtitle}
      </h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard
              xyz={props.information}
              key={task.id}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>

      <BoxCard result="success">
        <p className="title"> Adipisicing eiusmod do veniam dolore. </p>
        <p className="description">
          {" "}
          Pariatur commodo ea ea mollit commodo do ad dolore nulla occaecat.
          Irure occaecat cupidatat commodo consequat eu velit adipisicing
          deserunt velit. Pariatur qui fugiat magna ea. Ipsum aute qui
          consectetur dolore aliqua.{" "}
        </p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title"> Adipisicing eiusmod do veniam dolore. </p>
        <p className="description">
          {" "}
          Pariatur commodo ea ea mollit commodo do ad dolore nulla occaecat.
          Irure occaecat cupidatat commodo consequat eu velit adipisicing
          deserunt velit. Pariatur qui fugiat magna ea. Ipsum aute qui
          consectetur dolore aliqua.{" "}
        </p>
      </BoxCard>

      <BoxCard result="alert">
        <p className="title"> Adipisicing eiusmod do veniam dolore. </p>
        <p className="description">
          {" "}
          Pariatur commodo ea ea mollit commodo do ad dolore nulla occaecat.
          Irure occaecat cupidatat commodo consequat eu velit adipisicing
          deserunt velit. Pariatur qui fugiat magna ea. Ipsum aute qui
          consectetur dolore aliqua.{" "}
        </p>
      </BoxCard>
    </div>
  );
};
