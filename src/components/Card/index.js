import React , { useContext } from "react";
import "./Card.css";
import { themeContext } from "../../Context";

const Card = ({icon, heading, detail}) => {  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card" style={{background: darkMode ?  "var(--black)" : ""}}> 
      <img src={icon} alt="" />
      <span>{heading}</span>
      <span style={{color: darkMode ?  "white" : ""}}>{detail}</span>
    </div>
  );
};

export default Card;
