import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      <ul className="nav navbar-expand bg-primary">
        <li className="nav-navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/bbsWrite" className="nav-link">
            BBs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            로그인
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
