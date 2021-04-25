import React from 'react';
import Navigation from '../components/Navigation';









const Settings = () => {
    return (
        <div className="settings">
            <Navigation />
         <div className="settingsBlock" >
             <h3>Settings</h3>
             <div className= "changeTheme">
                 <h4>Change theme</h4>
                 <div className ="lightTheme">
                 </div>
                 <div className="darkTheme"></div>
             </div>
         </div>
        </div>
    );
};

export default Settings;