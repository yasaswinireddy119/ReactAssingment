import { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [counter, setCounter] = useState(0);

  // Large product list (simulated)
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
  ];

  /* ---------------- useMemo ---------------- */
  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  /* ---------------- useCallback ---------------- */
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

export default App;
