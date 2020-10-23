import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div id="app">
        <nav
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img
                  src="https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png"
                  alt="Netflix"
                  width="112"
                  height="28"
                />
              </a>
              <div className="navbar-menu">
                <div className="navbar-end"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
