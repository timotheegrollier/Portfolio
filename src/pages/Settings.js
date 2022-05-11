import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';

const Settings = () => {


    
    const block = React.createRef();
    let theme

    // récupère le thème si il y en a un en local storage
    if (localStorage){
        theme = localStorage.getItem("theme")
    }

    // DarkMODE
      const setDarkTheme = (e)=>{
        e.preventDefault();
        const nav = document.getElementById("nav")
        block.current.classList.add("dark-theme")
        localStorage.setItem("theme", "settingsBlock dark-theme")
        nav.classList.add("dark-theme-nav")
    }
    // DefaultMode
   const defaultTheme = (e)=>{
       e.preventDefault();
       const nav = document.getElementById("nav")
    nav.classList.remove("dark-theme-nav")
       block.current.classList.remove("dark-theme") 
       localStorage.setItem("theme","settingsBlock")
       
   }
// 


  
    return (
        <div className="settings">
            <Navigation id="nav" />
         <div className={theme === "settingsBlock dark-theme" ? "settingsBlock dark-theme" : "settingsBlock"} ref={block} >
             <h3>Settings</h3>
             <div className= "changeTheme">
                 <h4>Change theme</h4>
                 <div className ="lightTheme" onClick={defaultTheme}>
                 </div>
                 <div className="darkTheme" onClick={setDarkTheme} ></div>
             </div>
         </div>
        </div>
    );
};

export default Settings;