import React, { useState } from "react";
import data from "./data.json";
//components
import Products from "./components/Products";
import Filter from "./components/Filter";

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const sortProducts = (event) => {
    setSort(event.target.value);

    setProducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "Lowest"
            ? b.price - a.price
            : sort === "Highest"
            ? a.price - b.price
            : a.id - b.id
        )
    );
  };

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setProducts(data.products);
    } else {
      setSize(event.target.value);
      setProducts(
        data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        )
      );
    }
  };

  return (
    <div className="grid-container">
      {console.log(products)}
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="main-box">
          <div className="products-box">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products products={products} />
          </div>
          <div className="cart-box">dsf sd asd sd</div>
        </div>
      </main>
      <footer>this is a footer</footer>
    </div>
  );
};

export default App;
