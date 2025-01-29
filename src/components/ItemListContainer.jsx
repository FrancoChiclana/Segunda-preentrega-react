import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

const mockItems = [
  { id: "1", name: "Nissan Skyline R34", category: "deportivos" },
  { id: "2", name: "Mazda RX-7", category: "deportivos" },
  { id: "3", name: "Toyota Supra", category: "clasicos" },
];

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(mockItems.filter((item) => item.category === categoryId));
        } else {
          resolve(mockItems);
        }
      }, 1000);
    });

    fetchItems.then((data) => setItems(data));
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <div className="item-list">
        {items.length > 0 ? (
          items.map((item) => <Item key={item.id} id={item.id} name={item.name} />)
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
