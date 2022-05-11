import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  // FUNCTIONS

  let theme = localStorage.getItem("theme");



  //
  return (
    <div className="home">
      <Navigation />
      <div className={theme === "settingsBlock dark-theme" ? "homeContent dark-theme" : "homeContent"} id="home">
        <div className="content">
          <h1>Timothée Grollier</h1>
          <h2>Développeur Full-Stack</h2>
          <div className="pdf">
            <a href="./media/TimotheeGROLLIERCV.pdf" target="_blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
