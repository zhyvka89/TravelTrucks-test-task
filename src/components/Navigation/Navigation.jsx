import { NavLink } from "react-router-dom";
import { nav, link, activeLink } from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${link} ` + (isActive ? `${activeLink}` : "")
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          `${link} ` + (isActive ? `${activeLink}` : "")
        }
      >
        Catalog
      </NavLink>
    </nav>
  )
}

export default Navigation