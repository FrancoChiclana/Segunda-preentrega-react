import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart size={24} color="white" />
      <span className="badge bg-danger ms-1">{cart.length}</span>
    </Link>
  );
};

export default CartWidget;
