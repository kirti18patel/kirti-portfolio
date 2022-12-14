import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import At from "@iconscout/react-unicons/icons/uil-at";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} loading="lazy"/>
      <div className="f-content">
        {i18n.language === "en" && <span className="m-hidden">Lets connect</span>}
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/kirtipatel18/" target="_blank" rel="noreferrer"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://github.com/kirti18patel" target="_blank" rel="noreferrer"><Github color="white" size={"3rem"} /></a>
          <a href="mailto:kirti18patel@yahoo.com" rel="noreferrer"><At color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
