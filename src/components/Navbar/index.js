import React from "react";
import Toggle from "../Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import {useState, useContext, useEffect} from "react"
import { themeContext } from "../../Context";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const lngs = [
    { code: "en", native: "EN" },
    { code: "fr", native: "FR" },
  ];

  const { t, i18n } = useTranslation();

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

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="n-wrapper" id="Navbar">
        <div className="n-left">
          <Toggle />
          <ButtonGroup variant="text" sx={{marginLeft : "1rem"}} color = "inherit" aria-label="text button group">
            {lngs.map((lng, i) => {
              const { code, native } = lng;
              return <Button onClick={() => handleTrans(code)} sx={{color: i18n.language === native.toLocaleLowerCase() ? "#636363" : "#D4D4D4"}} key={i}>{native}</Button>;
            })}
          </ButtonGroup>
        </div>
        <div className="n-right">
          <div className="n-list m-hidden">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link to="home" spy={true} smooth={true}>
                  {t('navbar.home')}
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true}>
                  {t('navbar.about')}
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true}>
                  {t('navbar.work')}
                </Link>
              </li>
              <li>
                <Link to="skills" spy={true} smooth={true}>
                  {t('navbar.skills')}
                </Link>
              </li>
              <li>
                <Link to="project" spy={true} smooth={true}>
                  {t('navbar.project')}
                </Link>
              </li>
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">
              {t('navbar.contact')}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
