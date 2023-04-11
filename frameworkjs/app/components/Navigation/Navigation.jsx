import { Link } from "@remix-run/react";
import { NavLink } from "react-router-dom"

import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav id="navigation">
      <div id="nav-logo">
        <img src="./images/YourBook.png" />
      </div>
      <div id="nav-items">
        <div className="nav-item">
          <NavLink to="/">Livres</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/listes">Mes listes</NavLink>
        </div>
      </div>
      <div id="nav-connexion">
        <Link to="/login">Connexion</Link>
      </div>
    </nav>
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}