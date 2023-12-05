import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Product from "./Product";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./cart.css";

const App = () => {
  const [product, setproduct] = useState([]);

  const cart = useSelector((state) => state.cart);
  const totalItems = (cart || []).reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => setproduct(json));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <div className="nav_bar">
            <span style={{ fontSize: "20px" }}>Redux Shopping Cart</span>
            <span className="cart">
              <Link to="/cart">
                <span className="text_color">
                  Go to Cart
                  {totalItems > 0 && (
                    <span
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "50%",
                        padding: "0.2em 0.5em",
                      }}
                    >
                      {totalItems}
                    </span>
                  )}
                </span>
              </Link>
            </span>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto auto auto",
                  }}
                >
                  {product.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
