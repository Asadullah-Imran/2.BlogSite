import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="./logo.png" alt="" />
        </div>
        <div className="links">
          <Link to="/?cat=art" className="link">
            ART
          </Link>
          <Link to="/?cat=science" className="link">
            SCIENCE
          </Link>
          <Link to="/?cat=technology" className="link">
            TECHNOLOGY
          </Link>
          <Link to="/?cat=cinema" className="link">
            CINEMA
          </Link>
          <Link to="/?cat=design" className="link">
            DESIGN
          </Link>
          <Link to="/?cat=food" className="link">
            FOOD
          </Link>
          <span> John</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
