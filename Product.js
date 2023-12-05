import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./action";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Card style={{ border: "5px solid pink", height: "270px" }}>
        <h3>{product.name}</h3>
        <img
          variant="top"
          className="row_poster"
          src={product.image}
          alt="movie_poster"
          width={"140px"}
          style={{ height: "130px" }}
        />
        <p>price - ${product.price}</p>

        <button
          onClick={handleAddToCart}
          style={{
            backgroundColor: "#FFB6C1",
            border: "2px solid #FFB6C1 ",
          }}
        >
          Add to Cart{" "}
        </button>
        <Link to="/cart"></Link>
      </Card>
    </div>
  );
};

export default Product;
