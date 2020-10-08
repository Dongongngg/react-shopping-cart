import React, { useState } from "react";
import data from "./data.json";
//components
import Products from "./components/Products";

const App = () => {
  const [products, setProducts] = useState(data.products);

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="main-box">
          <div className="products-box">
            <Products products={products} />
          </div>
          <div className="cart-box">
            dsf sd asd sd
            {console.log(products)}
          </div>
        </div>
      </main>
      <footer>this is a footer</footer>
    </div>
  );
};

export default App;
