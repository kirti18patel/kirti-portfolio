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

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="awesome width-half">
        <div className=""></div>
        <span style={{ color: darkMode ? "white" : "black" }} className="span-skills"><span className="span-S">S</span>kills</span>
        <div className="skills flex-space-between">
          <div className="skills-description">
            <p>I started my professional journey in web development with startups and collaborated with talented people to create web products with creative and smart thinking. 
              <br></br><br></br>
              I can efficiently work on the front-end and on the back-end both along with maintaining databases using reliable web technologies. Experienced in deploying web products on Vercel, Heroku and Netlify. In the rear, I possess Full-stack development skills and experiences.
              <br></br><br></br>I have experience of working in agile development and value customer needs. Visit my <a href="https://www.linkedin.com/in/kirtipatel18/" className="link-skills">LinkedIn</a> profile for more details or just <a href="mailto:kirti18patel@yahoo.com" className="link-skills">contact</a> me.
            </p>
          </div>
        </div>
        <a href={Resume} download="kirti-patel-resume.docx">
          <button className="button s-button">Download CV</button>
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
            detail={"JavaScript, HTML5, CSS3, SCSS, React.js, Next.js, Material UI, Tailwind, Bootstrap, Figma"}
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
            detail={"JavaScript, HTML5, CSS3, SCSS, React.js, Next.js, Material UI, Tailwind,  jQuery, Bootstrap"}
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
