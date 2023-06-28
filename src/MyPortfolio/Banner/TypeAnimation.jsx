import React from 'react';
import { TypeAnimation } from "react-type-animation";

const Type = () => {
  return (
    <div className="text-white">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "I'm a FUll STACK DEVELOPER",
          
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "I'm a WEB DEVELOPER",
          
          1000,
          "I'm a MERN STACK DEVELOPER",
          
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
        
    </div>
  );
};

export default Type;