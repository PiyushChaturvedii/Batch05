// import logo from "../src/assets/images/logo.jpg";
import "./App.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <ShowTask />
    </div>
  );
}

export default App;
