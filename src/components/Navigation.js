import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import pic from "../media/timotek.jpg";

const Navigation = () => {
  // FUNCTIONS
  let theme = localStorage.getItem("theme");
  let year = new Date().getFullYear()

  useEffect(() => {
    let nav = document.getElementById("nav");
    if (theme === "settingsBlock dark-theme") {
      nav.classList.add("dark-theme-nav");
    } else {
      nav.classList.remove("dark-theme-nav");
    }
  });
  //

  return (
    <div className="sidebar" id="nav">
      <div className="id">
        <div className="id-content">
          <img src={pic} alt="profil-pic" />
          <h3>Timothée Grollier</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            {/* Local link
             */}
            {/* <NavLink exact to="/" activeClassName="navActive"> */}
            {/* Github/Build link
             */}
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/settings" activeClassName="navActive">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://github.com/timotheegrollier"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/timoth%C3%A9e-grollier-b95291204/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>

        <div className="signature">Timothée Grollier - {year}</div>
      </div>
    </div>
  );
};

export default Navigation;
