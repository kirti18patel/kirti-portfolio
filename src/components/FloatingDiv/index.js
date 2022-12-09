import React from "react";
import './FloatingDiv.css'

const FloatinDiv = ({img, text1}) => {
  return (
    <div className="floatingDiv">
      <span>
        Montreal,
        <br />
        {text1}
      </span>
      <img src={img} alt="" />
    </div>
  );
};

export default FloatinDiv;
