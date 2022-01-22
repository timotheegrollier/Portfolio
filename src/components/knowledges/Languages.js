import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.2 },
      { id: 2, value: "Css", xp: 1.5 },
      { id: 3, value: "Php", xp: 1 },
      { id: 4, value: "Java", xp: 0.2 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1 },
      { id: 2, value: "Express", xp: 0.8 },
      { id: 3, value: "Symfony", xp: 0.8 },
      { id: 4, value: "Spring", xp: 0.2 },
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
          title="frameworks & Librairies"
        />
      </div>
    );
  }
}

export default Languages;
