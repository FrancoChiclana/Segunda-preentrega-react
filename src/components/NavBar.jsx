import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="contenedor-nav">
      <Link to="/">
        <img className='logo-nav-drift' src="../img/logo-drift.png" alt="Logo" />
      </Link>
      <Link to="/category/deportivos" className="brand-nav">Deportivos</Link>
      <Link to="/category/clasicos" className="brand-nav">Clásicos</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
