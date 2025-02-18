import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Precio: ${item.price}</p>
          <Link to={`/item/${item.id}`} className="btn btn-primary">Ver Detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
