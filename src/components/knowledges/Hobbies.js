import React from "react";

const Hobbies = () => {
  let theme = localStorage.getItem("theme");

  return (
    <div className={theme === "settingsBlock dark-theme" ? "hobbies dark-theme" : "hobbies"} id="hob">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-music">
          </i>
            <span>Guitare/M.A.O</span>
        </li>
        <li className="hobby">
          <i className="fas fa-water">
          </i>
            <span>Bodyboard</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hat-wizard">
          </i>
            <span>Jeux-vidéo</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
