import React from "react";
import { Link, NavLink } from "react-router-dom";
import reactLogo from "../../assets/react.svg";

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={reactLogo} alt="reactLogo" />
          </Link>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `${isActive ? "active" : ""}`}
              >
                Example 1
              </NavLink>
            </li>
            <li>
              <NavLink to="example2">Example 2</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
