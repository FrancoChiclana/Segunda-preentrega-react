import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const mockItems = [
  { id: "1", name: "Nissan Skyline R34", description: "Un clásico de Tokyo Drift", price: "$50,000" },
  { id: "2", name: "Mazda RX-7", description: "Famoso por su motor rotativo", price: "$40,000" }
];

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockItems.find((product) => product.id === itemId));
      }, 1000);
    });

    fetchItem.then((data) => setItem(data));
  }, [itemId]);

  if (!item) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: {item.price}</p>
    </div>
  );
};

export default ItemDetailContainer;
