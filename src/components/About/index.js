import React from "react";
import "./About.css";
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t, i18n } = useTranslation();  
  const getCurrentDay = () =>{
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = i18n.language === "en" ? "Sunday" : "Dimanche";
    weekday[1] = i18n.language === "en" ? "Monday" : "Lundi";
    weekday[2] = i18n.language === "en" ? "Tuesday" : "Mardi";
    weekday[3] = i18n.language === "en" ? "Wednesday" : "Mercredi";
    weekday[4] = i18n.language === "en" ? "Thursday" : "Jeudi";
    weekday[5] = i18n.language === "en" ? "Friday" : "Vendredi";
    weekday[6] = i18n.language === "en" ? "Saturday" : "Samedi";
    return date.getDay() === 6 || date.getDay() === 0 ? "Weekend" : weekday[date.getDay()];
  }
  return (
    <div className="t-wrapper" id="about">
      <div className="t-heading">
        <span>{t('about.0')},</span> <br></br>
        <span>{t('about.1')},</span>
      </div>
      <div className="about-description">
        <p>{t('about.2')}</p>
        <p>{t('about.3')}</p>
        <p>{t('about.4')}</p>
      </div>
      <div className="slogan">
        <h3>{t('about.5')} <span>{t('about.6')}</span></h3>
        <h3>{t('about.7')} {getCurrentDay()}! </h3>
      </div>
      <div className="o-blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="o-blur t-blur2" style={{ background: "skyblue" }}></div>
    </div>
  );
};

export default About;
