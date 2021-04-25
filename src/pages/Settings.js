import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';

const Settings = () => {

    
    //   FUNCTIONS 
    // ref comme queryselector mais pour react chelou

    
    const block = React.createRef();
    let theme

    // récupère le thème si il y en a un en local storage
    if (localStorage){
        theme = localStorage.getItem("theme")
    }

    // Vérifie le theme en localStorage et le change si
    useEffect(()=>{
        if (theme === "settingsBlock dark-theme"){
            block.current.classList.add("dark-theme")
        }
    })

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
         <div className="settingsBlock" ref={block} >
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