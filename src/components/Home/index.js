import React, { useContext } from "react";
import "./Home.css";
import pic from "../../img/pic.png"
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import At from "@iconscout/react-unicons/icons/uil-at";
import Github from "@iconscout/react-unicons/icons/uil-github";


const Home = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}><span className="i-h">H</span>i,</span>
          <span>I am <span>K</span>irti,</span>
          <span>
            {/* status - pr and basic questions while applying*/}
            Full Stack Developer with high level of experience in web designing
            and development, producing the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/kirtipatel18/" target="_blank" rel="noreferrer"><Linkedin color="var(--secondary)" size={"2rem"} /></a>
          <a href="https://github.com/kirti18patel" target="_blank" rel="noreferrer"><Github color="var(--secondary)" size={"2rem"} /></a>
          <a href="mailto:kirti18patel@yahoo.com" rel="noreferrer"><At color="var(--secondary)" size={"2rem"} /></a>
        </div>
      </div>
      <div className="i-right">
        <motion.div
          initial={{ top: "-4%", left: "15%" }}
          whileInView={{ left: "4%" }}
          transition={transition}
        >
          <img src={pic} alt="" className="pic"/>
        </motion.div>
        <motion.div
          initial={{ top: "70%", left: "84%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        <div className="o-blur" style={{ background: "var(--purple)" }}></div>
        <div
          className="o-blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
