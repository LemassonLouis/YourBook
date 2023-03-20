import { NavLink } from "react-router-dom"

export default function MainNavigation() {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/notes">My notes</NavLink>
        </li>
      </ul>
    </nav>
  )
}