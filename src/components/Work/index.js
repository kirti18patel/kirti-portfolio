import React, { useContext } from "react";
import "./Work.css";
import AT from "../../img/at.png";
import IOS from "../../img/ios.png";
import Maket from "../../img/maket.png";
import desk from "../../img/desk.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from '../../img/resume-kirti-developer.docx';
import VerticalLinearStepper from "./stepper.js"
const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome w-auto">
          <span style={{ color: darkMode ? "white" : "" }}>
            Work
          </span>
          <span>History</span>
          <VerticalLinearStepper />
          <a href={Resume} download="kirti-patel-resume.docx">
            <button className="button s-button">Download CV</button>
          </a>
          <div
            className="o-blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Maket} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={IOS} alt="" />
          </div>
          <div className="working">
            <img src={desk} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={AT} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle greenCircle"></div>
      </div>
    </div>
  );
};

export default Work;
