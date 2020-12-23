import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import EmailIcon from '@material-ui/icons/Email';
import "./Header.css"

function Header() {
    return (
        <div className="header">
          
        <div className="header__routers">
      
        <div className="header__elements">
        <a href="#about" className="header__icon header__elements" >
            About
        </a>
        </div>
        
        
        
        <div className="header__elements" >
        <a href="#skills" className="header__icon header__elements">
            Skills
        </a>
        </div>

        <div className="header__elements">
        <a href="#projects" className="header__icon header__elements">
            Projects
        </a>
        </div>
       
        <div className="header__elements">
        <a href="mailto:cooldudejbrayansh@gmail.com">
           <EmailIcon className="header__icon" />
        </a>
        </div>
       
        
        </div>
        
        </div>
    )
}

export default Header
