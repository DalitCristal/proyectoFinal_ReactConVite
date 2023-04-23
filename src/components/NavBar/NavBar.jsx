//COMPONENTS
import NavLogo from "../NavLogo/NavLogo";
import CartWidget from "../CartWidget/CartWidget";
//REACT ROUTER DOM
import { NavLink, Link } from "react-router-dom";
//STYLES
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <Link to={"/"}>
          <NavLogo />
        </Link>

        <ul className="buttons">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            home
          </NavLink>

          <NavLink
            to={`/category/coats`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            coats
          </NavLink>
          <NavLink
            to={`/category/pants`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            pants
          </NavLink>
          <NavLink
            to={`/category/t-shirts`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            t-shirt
          </NavLink>

          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Contact
          </NavLink>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};

export default NavBar;
