import React from 'react';
import { TypeAnimation } from "react-type-animation";

const Type = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "A FUll STACK WEB DEVELOPER",
          
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "A WEB DEVELOPER",
          
          1000,
          "A MERN STACK WEB DEVELOPER",
          
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1em", display: "inline-block",font:"thin"}}
        repeat={Infinity}
      />
        
    </div>
  );
};

export default Type;