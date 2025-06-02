import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Admin } from "./components/Admin";

function App() {
  const user = true;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/101" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
