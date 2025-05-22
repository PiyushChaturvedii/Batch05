import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");
  const { data: products } = useFetch(url);

  // const fetchProducts = useCallback(async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setProducts(data);
  // }, [url]);

  // useEffect(() => {
  //   fetchProducts();
  //   console.log("$");
  // }, [fetchProducts]);

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
