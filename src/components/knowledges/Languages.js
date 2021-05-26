import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.8 },
      { id: 2, value: "Css", xp: 1.2 },
      { id: 3, value: "Php", xp: 0.6 },
      { id: 4, value: "Python", xp: 0.2 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.6 },
      { id: 2, value: "Bootstrap", xp: 1 },
      { id: 3, value: "Sass", xp: 1 },
      { id: 4, value: "Symfony", xp: 0.2 },
    ],
  };

  render() {
    // State cache de fonctions rcc
    // Transform le this.state.languages en languages

    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks" id="lang">
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
    );
  }
}

export default Languages;
