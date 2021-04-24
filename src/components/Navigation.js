import React from "react";
import { NavLink } from "react-router-dom";
import pic from "../media/timotek.jpg";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="id-content">
          <img src={pic} alt="profil-pic" />
          <h3>Timothée Grollier</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            {/* Local link  */}
            {/* <NavLink exact to="/" activeClassName="navActive"> */}
              {/* Github/Build link  */}
              <NavLink to="/newPortfolio" activeClassName="navActive">
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
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://github.com/timotheegrollier">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/timoth%C3%A9e-grollier-b95291204/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>

        <div className="signature">Timothée Grollier - 2021</div>
      </div>
    </div>
  );
};

export default Navigation;
