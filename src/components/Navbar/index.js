import React from "react";
import Toggle from "../Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import {useState, useContext, useEffect} from "react"
import { themeContext } from "../../Context";
const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [scrolled,setScrolled]= useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  let navbarClasses=['navbar'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
    if(darkMode){
      navbarClasses.push('scroll-dark');
    }

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="n-wrapper" id="Navbar">
        <div className="n-left">
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link to="intro" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
