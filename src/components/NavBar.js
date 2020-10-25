import React from "react";
import Dropdown from "./Dropdown";
import "./NavBar.css";
import SearchBar from "./SearchBar";
const NavBar = ({ onFormSubmit }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png"
            alt="Netflix"
            width="112"
            height="28"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <SearchBar onFormSubmit={onFormSubmit} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>

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
            <div>
              <Dropdown />
            </div>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <a className="nav-link disabled" href="#">
              Log-in
            </a>
          </ul>
          <SearchBar onFormSubmit={onFormSubmit} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
