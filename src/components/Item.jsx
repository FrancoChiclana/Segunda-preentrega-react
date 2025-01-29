import { Link } from "react-router-dom";

const Item = ({ id, name }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <Link to={`/item/${id}`}>Ver más</Link>
    </div>
  );
};

export default Item;
