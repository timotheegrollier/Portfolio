import React from "react";

const OtherSkills = () => {
  let theme = localStorage.getItem("theme");

  return (
    <div className={theme === "settingsBlock dark-theme" ? "otherSkills dark-theme" : "otherSkills"} id="oth">
      <h3>Autres compétences</h3>
      <div className="list">
        <ul>
          <li>
            <i className="fas fa-check-square"></i>
            Anglais courant
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            Méthodes agiles
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            UI/UX design
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
