import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Drift Cars Shop</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/category/jdm">JDM</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/muscle">Muscle</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/europeo">Europeos</Link></li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
