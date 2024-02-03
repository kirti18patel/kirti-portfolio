import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const { t } = useTranslation();

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--primary)':''}}>4+</div>
        <span  style={{color: darkMode?'white':''}}>{t('experience.years')} </span>
        <span>{t('experience.experience')}</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--primary)':''}}>9+</div>
        <span  style={{color: darkMode?'white':''}}>{t('experience.complete')} </span>
        <span>{t('experience.project')}</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--primary)':''}}>3</div>
        <span  style={{color: darkMode?'white':''}}>{t('experience.company')} </span>
        <span>{t('experience.work')}</span>
      </div>
    </div>
  );
};

export default Experience;
