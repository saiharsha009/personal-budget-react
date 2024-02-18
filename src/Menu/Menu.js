import React from 'react';
import {Link} from "react-router-dom";



function Menu() {
  return (
    <div className="menu"
     role="navigation"
     aria-label="Main Menu"
     itemScope
     itemType="https://schema.org/SiteNavigationElement"
     >
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
          
            <li><a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
        </ul>
    </div>
  );
}

export default Menu;
