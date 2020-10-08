import React from "react";
//
import "../styles/products.css";

export default function Products(props) {
  const { products } = props;
  return (
    <div className="products">
      {products.length > 0
        ? products.map((product) => (
            <div className="product-cards" key={product.id}>
              <div className="product-title">
                <h2>{product.title}</h2>
              </div>
              <div className="product-description">
                <p>{product.description}</p>
              </div>
              <div className="product-price">
                <h3> {product.price}</h3>

                <button>Add to cart</button>
              </div>
            </div>
          ))
        : "There is no products"}
    </div>
  );
}
