import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <button className="btn btn-primary" onClick={() => addToCart(item, quantity)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
