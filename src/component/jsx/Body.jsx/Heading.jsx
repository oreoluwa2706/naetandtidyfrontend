import React from "react";
import name from "../../assets/images/PNG/Neat And Tidy (3).png";
import "../../css/firstbody.css";
const Heading = () => {
  return (
    <div>
      <div className="first">
        <nav>
          <a href="#">
            <img src={name} alt="" />
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Heading;
