import React, { useEffect } from "react";

const Hobbies = () => {
  let theme = localStorage.getItem("theme");
  useEffect(() => {
    let hobbies = document.getElementById("hob");
    if (theme === "settingsBlock dark-theme") {
      hobbies.classList.add("dark-theme");
    }
  });

  return (
    <div className="hobbies" id="hob">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-music">
            <span>Guitare/M.A.O</span>
          </i>
        </li>
        <li className="hobby">
          <i className="fas fa-water">
            <span>Bodyboard</span>
          </i>
        </li>
        <li className="hobby">
          <i className="fas fa-hat-wizard">
            <span>Jeux-vidéo</span>
          </i>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
