import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const mockItems = [
      { id: 1, name: "Nissan 240SX", description: "Perfecto para drift, motor SR20DET", price: 25000 },
      { id: 2, name: "Ford Mustang GT", description: "V8 potente, ideal para derrapes", price: 35000 },
    ];
    setItem(mockItems.find(i => i.id === parseInt(itemId)));
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
