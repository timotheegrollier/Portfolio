import React,{useEffect} from "react";
import Navigation from "../components/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard";

const Contact = () => {

  let theme = localStorage.getItem("theme");

  useEffect(()=>{
    let header = document.querySelector(".header");
    let icons = document.querySelectorAll(".contact-fab")
    if(theme === "settingsBlock dark-theme"){
      icons.forEach(el=>{
        el.style.color = "#a8a9cb"
      })
      // Je modifie une variable css pour atteindre le ::after et faire disparaitre le svg
      header.style.setProperty("--shape","url(../../media/shape-dark.svg) no-repeat center / cover")
    }
  })
  
  return (
    <div className="contact">
      <Navigation />
      <div className={theme === "settingsBlock dark-theme" ? "contactContent dark-theme" : "contactContent"}>
      <div className={theme === "settingsBlock dark-theme" ? "header dark-theme" : "header"}></div>
<div className= {theme === "settingsBlock dark-theme" ? "contactBox modal" :  "contactBox"}>
  <h1>Contactez-moi</h1>
  <ul>
    <li>
      <i className="fas fa-map-marker-alt"></i>
      <span>Bordeaux</span>
    </li>
    <li>
      <i className="fas fa-mobile-alt"></i>
      <CopyToClipboard text="0695024008">
        <span className="clickInput" onClick={()=>{
          alert("Téléphone copié !");
        }}>06 95 02 40 08</span>
      </CopyToClipboard>
    </li>
    <li>
      <i className="far fa-envelope"></i>
      <CopyToClipboard text="timotheegrollier@gmail.com">
        <span className="clickInput" onClick={()=>{
          alert("E-mail copié !");
        }}>timotheegrollier@gmail.com</span>
      </CopyToClipboard>
    </li>
  </ul>
</div>
<div className="socialNetwork">
  <ul>
    <a className={theme === "settingsBlock dark-theme" ? "socialBlock dark-theme" : "socialBlock"} href="https://www.linkedin.com/in/timoth%C3%A9e-grollier-dev/" target="_blank" rel="noopener noreferrer"><h4>LinkedIn</h4><i className="fab fa-linkedin contact-fab"></i></a>
    <a className={theme === "settingsBlock dark-theme" ? "socialBlock dark-theme" : "socialBlock"} href="https://github.com/timotheegrollier" target="_blank" rel="noopener noreferrer"><h4>Github</h4><i className="fab fa-github contact-fab"></i></a>
  </ul>
</div>
      </div>
          </div>
  );
};

export default Contact;
