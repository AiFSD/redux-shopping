import React, { useState } from "react";
import QuantityDropdown from "./QuantityDropdown";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const totalPrice = count * product.price;

  return (
    <div className="main">
      <div className="container">
        <div className="details">
          <div className="img">
            <img className="images" src={product.images} alt="" />
          </div>
          <div className="productdetails">
            <div className="productdes">
              <h1>{product.title}</h1>
            </div>
            <div className="brand">
              <h4>Brand: {product.brand}</h4>
            </div>
            <div className="des">
              <p>{product.description}</p>
            </div>
            <div className="price">
              <h2>$ {product.price} / -</h2>
            </div>
            <h4>Rating: {product.rating}</h4>
          </div>
        </div>
        <div className="summary">
          <div className="head">
            <div className="snag">
              <p>Snag Your Stash</p>
            </div>
            <div className="last">
              <QuantityDropdown
                count={count}
                increment={increment}
                decrement={decrement}
              />
            </div>
          </div>
          <h2 className="sum">Summary</h2>
          <h5>
            Sub-total
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ${totalPrice}
          </h5>
          <h5>
            Shipping
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {product.shipping}
          </h5>
          <h3>
            Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $
            {totalPrice}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
