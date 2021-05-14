import React from "react";

const Hobbies = () => {
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
