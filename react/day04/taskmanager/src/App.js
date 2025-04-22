import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./App.css";

function App() {
  let title = "Random";
  let info = "Information";
  return (
    <div className="App">
      <Header />
      <TaskList information={info} title={title} subtitle="subtitle" />
    </div>
  );
}

export default App;
