import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <img src="./media/404.gif" alt="404" />
        <h3>Désolé cette page n'existe pas !</h3>
        <NavLink exact to="/newPortfolio">
          <i className="fas fa-home"></i>
          <span>Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
