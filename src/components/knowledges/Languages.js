import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.2 },
      { id: 2, value: "Css", xp: 1.6 },
      { id: 3, value: "Php", xp: 1.2 },
      { id: 4, value: "Python", xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.1 },
      { id: 2, value: "Express", xp: 0.6 },
      { id: 3, value: "Symfony", xp: 1 },
      { id: 4, value: "Bootstrap", xp: 1.4 },
    ],
    theme : localStorage.getItem('theme')
  };

  render() {
    // State cache de fonctions rcc
    // Transform le this.state.languages en languages

    let { languages, frameworks, theme} = this.state;

    return (
      <div className={theme === "settingsBlock dark-theme" ? "languagesFrameworks dark-theme" : "languagesFrameworks"} id="lang">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworkDisplay"
          title="frameworks & Librairies"
        />
      </div>
    );
  }
}

export default Languages;
