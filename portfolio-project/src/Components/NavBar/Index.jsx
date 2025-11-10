import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";

//Create Data to render links
const data = [
  {
    label: "HOME",
    to: "/",
  },

  {
    label: "ABOUT ME",
    to: "/About",
  },

  {
    label: "SKILLS",
    to: "/skills",
  },

  {
    label: "RESUME",
    to: "/Resume",
  },

  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },

  {
    label: "CONTACT",
    to: "/contact",
  },
];

//Create NavBar Component
const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navBar">
        <div className="navbar-Container">
          <Link to={"/"} className="navbar-Container-Logo">
            <FaReact size={30} />
          </Link>
        </div>

        <ul className={`navbar-Container-menu ${toggleIcon ? "active" : ""} `}>
          {data.map((item, key) => {
            return (
              <li key={key} className="navbar-container-menu-item">
                <Link className="navbar-container-menu-item-links" to={item.to}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="navBar-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
