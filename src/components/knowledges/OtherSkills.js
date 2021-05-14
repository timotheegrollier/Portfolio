import React, { useEffect } from "react";

const OtherSkills = () => {
  let theme = localStorage.getItem("theme");
  useEffect(() => {
    let otherSkills = document.getElementById("oth");
    if (theme === "settingsBlock dark-theme") {
      otherSkills.classList.add("dark-theme");
    }
  });

  return (
    <div className="otherSkills" id="oth">
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
