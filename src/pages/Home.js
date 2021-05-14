import React, { useEffect } from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  // FUNCTIONS

  let theme = localStorage.getItem("theme");

  useEffect(() => {
    let home = document.getElementById("home");
    if (theme === "settingsBlock dark-theme") {
      home.classList.add("dark-theme");
    }
  });

  //
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent" id="home">
        <div className="content">
          <h1>Timothée Grollier</h1>
          <h2>Développeur Full-Stack</h2>
          <div className="pdf">
            <a href="./media/TimotheeGROLLIER(4).pdf" target="_blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
