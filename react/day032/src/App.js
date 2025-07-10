import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header} from "./components/Layouts/Header";
import { Footer } from "./components/Layouts/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
