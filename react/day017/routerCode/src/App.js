// import { Home } from "./components/Home";
// import { ProductList } from "./components/ProductList";
// import { ProductDetail } from "./components/ProductDetail";
// import { Contact } from "./components/Contact";
// import { ContactIn } from "./components/ContactIn";
// import { ContactEu } from "./components/ContactEu";
// import { ContactUs } from "./components/ContactUs";
// import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
// import { PageNotFound } from "./components/PageNotFound";
// import { Admin } from "./components/Admin";
import { Header, Footer } from "./components";
import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
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
