import React from "react";
//
import "../styles/filter.css";

export default function Filter(props) {
  const { count, sort, size, sortProducts, filterProducts } = props;

  return (
    <div className="filter">
      <div className="filter-result">{count} products</div>
      <div className="filter-sort">
        Order by
        <select value={sort} onChange={sortProducts}>
          <option value=""></option>
          <option value="Latest">Latest</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Size
        <select value={size} onChange={filterProducts}>
          <option value="">ALL</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>
    </div>
  );
}
