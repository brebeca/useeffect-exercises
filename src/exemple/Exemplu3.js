import "./style.css";
import { useState, useEffect } from "react";

// "https://fakestoreapi.com/products"
// GET POST PUT DELETE

function Example3() {
  const [loadProducts, setLoadProducts] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (loadProducts)
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((response2) => {
          setProducts(response2);
        });
  }, [loadProducts]);

  return (
    <main>
      <h1>Exemplul 2</h1>

      <button onClick={() => setLoadProducts(true)}>Load Products</button>

      {products.map((product) => {
        console.log(product);
        return (
          <section>
            <h3>nume produs</h3>
            <i>- pret produs</i>
          </section>
        );
      })}
    </main>
  );
}

export default Example3;
