import React, { Component } from "react";

class Project extends Component {
state = {
  showInfo: false,
  theme:localStorage.getItem("theme"),
  // modal est la class de la modal elle est dynamique selon le theme
  modal:"infosContent",
  body:document.body,
}

handleInfo = ()=> {
  this.setState({
    showInfo:!this.state.showInfo,
  })
}


render() {

  
  let {modal,theme,body} = this.state 
  
 

  if (theme === "settingsBlock dark-theme"){
    modal = "infosContent modal"
  }
 
  if(this.state.showInfo){
    body.style.overflow="hidden";

    // Pour remettre le scroll si on quitte avec le bouton retour
    window.onhashchange = ()=>{
    body.style.overflow="initial"
    }
  }else{
    body.style.overflow="initial"
  }
   
    console.log(this.props);
    let { name, languagesIcons, source, info, picture,lien } = this.props.item;
    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="projectImg" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>
        {
          this.state.showInfo && (
            <div className="showInfos">
              <div className={modal}>
                <div className="head">
                  <h2 id="mod-name">{name}</h2>
                  <div className="sourceCode">
                  <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                  </div>
                </div>
<a href={lien}><img src={picture} alt="See the project" /></a>
<p className="text">{info}</p>



                <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
              </div>
            </div>
          )
        }
        
      </div>
    );
  }
}

export default Project;
