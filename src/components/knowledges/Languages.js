import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class componentName extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.8 },
      { id: 2, value: "Css", xp: 2 },
      { id: 3, value: "Php", xp: 0.7 },
      { id: 4, value: "Python", xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.4 },
      { id: 2, value: "Bootstrap", xp: 2 },
      { id: 3, value: "Sass", xp: 1.5 },
      { id: 4, value: "Tailwind", xp: 0.5 },
    ],
  };

  render() {
    // State cache de fonctions rcc
    // Transform le this.state.languages en languages
    let { languages, frameworks } = this.state;

    return (
      <div>
        <div className="languagesFrameworks">
          <ProgressBar
            languages={languages}
            className="languagesDisplay"
            title="languages"
          />
          <ProgressBar
            languages={frameworks}
            className="frameworkDisplay"
            title="frameworks & bibliothèques"
          />
        </div>
      </div>
    );
  }
}

export default componentName;
