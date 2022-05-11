import React from "react";

const Experience = () => {

  let theme = localStorage.getItem("theme");

  return (
    <div className={theme === "settingsBlock dark-theme" ? "experience dark-theme" : "experience"} id="xp">
      <h3>Expérience</h3>
      <div className="exp1">
        <h4>Stage Developpeur Web agence: "NOUS:Ouvert,Utile et Simple" </h4>
        <h5>Juin/Septembre 2021</h5>
        <ul>
          <li>Création de bloc WordPress JSX</li>
          <li>Intégration Wordpress</li>
          <li>Mise a jour de plugins Wordpress Front/Back</li>
	        <li>Symfony</li>
        </ul>
      </div>
      <div className="exp2">
        <h4>Caissier - Super U Lacanau</h4>
        <h5>2017-2019</h5>
        <ul>
          <li>Gérer la caisse</li>
          <li>Accueil/Conseil</li>
          <li>Inventaire</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
