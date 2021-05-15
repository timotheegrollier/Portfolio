import React, { useEffect } from "react";
import Experience from "../components/knowledges/Experience";
import Hobbies from "../components/knowledges/Hobbies";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";
import Navigation from "../components/Navigation";

const Knowledges = () => {
  let theme = localStorage.getItem("theme");
  useEffect(() => {
    let lang = document.getElementById("lang");
    let otherSkills = document.getElementById("oth");
    let experiences = document.getElementById("xp");
    let hobbies = document.getElementById("hob");

    if (theme === "settingsBlock dark-theme") {
      experiences.classList.add("dark-theme");
      lang.classList.add("dark-theme");
      hobbies.classList.add("dark-theme");
      otherSkills.classList.add("dark-theme");
    }
  });

  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent" id="knowledges">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
