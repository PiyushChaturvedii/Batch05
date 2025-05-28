import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "../assets/loader.gif";

export const ProductList = () => {
  const [url, setUrl] = useState("http://localhost:8000/products");
  const {
    data: products,
    loading,
    error,
  } = useFetch(url, { content: "Shree Ram" });

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          In Stock
        </button>
      </div>
      <br></br>
      {loading && (
        <p className="loading">
          <img src={Loading} alt="Loading sppinner" />
        </p>
      )}
      {error && <p>{error}</p>}

      {products &&
        products.map((p) => (
          <div className="card" key={p.id}>
            <p className="id">{p.id}</p>
            <p className="name">{p.title}</p>
            <p className="info">
              <span>${p.price}</span>
              <span className={p.in_stock ? "instock" : "unavailable"}>
                {p.in_stock ? "In Stock" : "Unavaiable"}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};
