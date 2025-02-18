import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const mockItems = [
      { id: 1, name: "Nissan 240SX", category: "jdm", price: 25000 },
      { id: 2, name: "Ford Mustang GT", category: "muscle", price: 35000 },
      { id: 3, name: "BMW M3 E46", category: "europeo", price: 40000 }
    ];
    setItems(categoryId ? mockItems.filter(i => i.category === categoryId) : mockItems);
  }, [categoryId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;

