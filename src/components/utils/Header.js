import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './Header.scss';
  
class Header extends Component{

    render()
    {
        return(
            
        <div className="NavBar">
            <NavLink className="NavLink" to="/">Sākums</NavLink>
            <NavLink className="NavLink" to="/studijas">Studiju info</NavLink>
            <NavLink className="NavLink" to="/aktualitates">Aktualitātes</NavLink>
        </div>
        );
    }
}

export default Header;
