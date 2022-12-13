import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card";
import Frontend from "../../img/frontend.png";
import Database from "../../img/database.png";
import Backend from "../../img/backend.png";
import Tools from "../../img/tools.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from '../../img/resume-kirti-developer.docx';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };
  const { t } = useTranslation();

  return (
    <div className="services" id="skills">
      <div className="awesome width-half">
        <div className=""></div>
        <span style={{ color: darkMode ? "white" : "black" }} className="span-skills"><span className="span-S">{t('skills.title.0')}</span>{t('skills.title.1')}</span>
        <div className="skills flex-space-between">
          <div className="skills-description">
            <p> 
              {t('skills.description.0')}
              <br></br><br></br>
              {t('skills.description.1')}
              <br></br><br></br>
              {t('skills.description.2')} <a href="https://www.linkedin.com/in/kirtipatel18/" className="link-skills">LinkedIn</a> {t('skills.description.3')} <a href="mailto:kirti18patel@yahoo.com" className="link-skills">contact</a> {t('skills.description.4')}.
            </p>
          </div>
        </div>
        <a href={Resume} download="kirti-patel-resume.docx">
          <button className="button s-button">{t('download')} CV</button>
        </a>
        <div className="o-blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      
      <div className="cards">
        <motion.div
          initial={{ left: "30rem", top: "2rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
        >
          <Card
            icon={Frontend}
            heading={"Frontend"}
            detail={"HTML, CSS, React.js, Next.js, Material UI, Tailwind, DaisyUI, Styled-component, Bootstrap"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "3rem", top: "2rem" }}
          whileInView={{ left: "8rem" }}
          transition={transition}
        >
          <Card
            icon={Backend}
            heading={"Backend"}
            detail={"JavaScript, Express.js, Redux, Node.js, RESTful API's, GraphQL, JWT, JSON, NPM"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "20rem", left: "30rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
        >
          <Card
            icon={Database}
            heading={"Database"}
            detail={"SQL, MySQL, NoSQL, MongoDB"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "20rem", left: "3rem" }}
          whileInView={{ left: "8rem" }}
          transition={transition}
        >
          <Card
            icon={Tools}
            heading={"Applications"}
            detail={"GitHub, Postman, Visual Studio, Sendgrid, Stripe, AWS, Firebase, Google Analytics"}
            
          />
        </motion.div>
        <div
          className="o-blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
