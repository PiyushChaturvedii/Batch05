import { useEffect, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
    
  }, [url]);

  useEffect(()=>{
    console.log(counter);
  },[counter])

  return (
    <section>
      <div className="filter">
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          In Stock
        </button>
      </div>
      {products.map((p) => (
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
