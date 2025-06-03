import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import { ContactIn } from "./components/ContactIn";
import { ContactEu } from "./components/ContactEu";
import { ContactUs } from "./components/ContactUs";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./components/PageNotFound";
import { Admin } from "./components/Admin";

function App() {
  const user = false;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
            <Route path="*" element={<ContactUs />} />
          </Route>
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="*" element={<PageNotFound title="404" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
