import React from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./action";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalItems = cart.reduce((total) => total + 1, 0);

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div style={{ display: "flex" }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <Card
              style={{
                padding: "10px",
                margin: "20px",
                border: "2px solid grey ",
              }}
            >
              <div key={index}>
                <img
                  style={{ height: "100px" }}
                  src={item.image}
                  alt="movie_poster"
                />
                {item.title} - ${item.price}
                <span>
                  <button
                    style={{
                      border: "2px solid pink",
                      backgroundColor: "pink",
                    }}
                    onClick={() => handleRemoveItem(item)}
                  >
                    Remove
                  </button>
                </span>
              </div>
            </Card>
          ))}
        </ul>
      )}
      <div>
        <h5>Total Items: {totalItems}</h5>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
