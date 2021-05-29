import React,{useEffect} from "react";
import Navigation from "../components/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard";

const Contact = () => {

  let theme = localStorage.getItem("theme");

  useEffect(()=>{
    let contact = document.querySelector(".contactBox");
    let header = document.querySelector(".header");
    let content = document.querySelector(".contactContent");
    let network = document.querySelectorAll(".socialBlock");
    if(theme === "settingsBlock dark-theme"){
      contact.classList.add("modal");
      contact.style.color = "white"
      header.classList.add('dark-theme');
      content.classList.add("dark-theme");
      network[0].classList.add("modal");
      network[1].classList.add("modal");
      // Je modifie une variable css pour atteindre le ::after et faire disparaitre le svg
      header.style.setProperty('--none',"none")
    }
  })
  
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
      <div className="header"></div>
<div className="contactBox">
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
    <a className="socialBlock" href="https://www.linkedin.com/in/timoth%C3%A9e-grollier-dev/" target="_blank" rel="noopener noreferrer"><h4>LinkedIn</h4><i className="fab fa-linkedin"></i></a>
    <a className="socialBlock" href="https://github.com/timotheegrollier" target="_blank" rel="noopener noreferrer"><h4>Github</h4><i className="fab fa-github"></i></a>
  </ul>
</div>
      </div>
          </div>
  );
};

export default Contact;
