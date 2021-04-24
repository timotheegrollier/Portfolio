import React from 'react';
import Navigation from '../components/Navigation';

const Settings = () => {
    return (
        <div className="settings">
            <Navigation />
         <div className="settingsBlock" >
             <h3>Settings</h3>
             <div className= "changeTheme">
                 <div className="blueTheme"></div>
                 <div className ="lightTheme">
                 </div>
             </div>
         </div>
        </div>
    );
};

export default Settings;