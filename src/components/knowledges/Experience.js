import React, { useEffect } from "react";

const Experience = () => {
  let theme = localStorage.getItem("theme");

  useEffect(() => {
    let experiences = document.getElementById("xp");
    if (theme === "settingsBlock dark-theme") {
      experiences.classList.add("dark-theme");
    }
  });
  return (
    <div className="experience" id="xp">
      <h3>Expérience</h3>
      <div className="exp1">
        <h4>Caissier - Super U Lacanau</h4>
        <h5>2017-2019</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          debitis ipsam soluta quaerat modi assumenda?
        </p>
      </div>
    </div>
  );
};

export default Experience;
