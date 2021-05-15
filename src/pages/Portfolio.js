import React , { useEffect } from "react";
import Navigation from "../components/Navigation";
import ProjectList from "../components/portfolio/ProjectList";

const Portfolio = () => {
let theme = localStorage.getItem("theme")
useEffect(()=>{
  let works = document.getElementsByClassName("project")
  if (theme === "settingsBlock dark-theme") {
    works[0].classList.add("dark-theme")
    works[1].classList.add("dark-theme")
    works[2].classList.add("dark-theme")
    works[3].classList.add("dark-theme")
    works[4].classList.add("dark-theme")
    works[5].classList.add("dark-theme")
  }
})


  return (
    <div className="portfolio">
      <Navigation />
      <ProjectList />
    </div>
  );
};

export default Portfolio;
