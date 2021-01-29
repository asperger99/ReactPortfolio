import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import "./Header.css";
import { IconButton } from "@material-ui/core";

function Header() {
  const [change, handleChange] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleChange(true);
      } else {
        handleChange(false);
      }
    });
  }, []);
  return (
    <div className={`navbar ${change && "navbar__black"}`}>
      <div className="header__routers">
        <div
          onClick={() => {
            setCurrentSection("about");
          }}
          className={`header__elements ${
            currentSection === "about" && "active"
          }`}
        >
          <a href="#about" className="header__icon header__elements">
            About
          </a>
        </div>

        <div
          onClick={() => {
            setCurrentSection("skills");
          }}
          className={`header__elements ${
            currentSection === "skills" && "active"
          }`}
        >
          <a href="#skills" className="header__icon header__elements">
            Skills
          </a>
        </div>

        <div
          onClick={() => {
            setCurrentSection("projects");
          }}
          className={`header__elements ${
            currentSection === "projects" && "active"
          }`}
        >
          <a href="#projects" className="header__icon header__elements">
            Projects
          </a>
        </div>

        <div className="header__elements">
          <a href="mailto:cooldudejbrayansh@gmail.com" target="_top">
            <IconButton>
              <EmailIcon className="header__icon" />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
