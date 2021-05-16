import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import ProjectList from "../components/portfolio/ProjectList";

const Portfolio = () => {
  let theme = localStorage.getItem("theme");
  useEffect(() => {
    let radioDisplay = document.querySelector(".radioDisplay");

    if (theme === "settingsBlock dark-theme") {
      radioDisplay.classList.add("modal");
    }
  });

  return (
    <div className="portfolio">
      <Navigation />
      <ProjectList />
    </div>
  );
};

export default Portfolio;
