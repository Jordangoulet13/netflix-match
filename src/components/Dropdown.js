import React, { useState, useRef } from "react";
import "./Dropdown.css";
const Dropdown = () => {
  const [menu, setMenu] = useState(false);
  let dropdownMenu = useRef(null);
  console.log(dropdownMenu);

  const showMenu = (event) => {
    event.preventDefault();

    setMenu(true);
    document.addEventListener("click", closeMenu);
  };

  //   showMenu = (event) => {
  //     event.preventDefault();

  //     setMenu(true), () => {
  //       document.addEventListener("click", this.closeMenu);
  //     };
  //   };

  const closeMenu = (event) => {
    if (dropdownMenu !== event.target) {
      setMenu(false);
      document.removeEventListener("click", closeMenu);
    }
  };

  return (
    <div>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      <a class="nav-link dropdown-toggle" onClick={showMenu}>
        Show menu
      </a>

      {menu ? (
        <div
          class="dropdown"
          //   ref={(element) => {
          //     dropdownMenu = element;
          //   }}
          ref={dropdownMenu}
        >
          <div className="dropdown-content">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
