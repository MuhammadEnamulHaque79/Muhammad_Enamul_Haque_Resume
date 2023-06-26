import React from "react";
import image1 from "../../assets/resposive.jpg";
import image2 from "../../assets/Web development.jpg";
import image3 from "../../assets/programming-background-collage.jpg";
import image4 from "../../assets/Javascript.jpg";
import image5 from "../../assets/computer-screen-with-accessbility-word-graphic-popup.jpg";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="my-20" id="services">
      <h2 className="text-2xl mb-5 text-center font-semibold text-red-400">
        Services
      </h2>
      <div className="lg:grid w-full lg:grid-cols-3 gap-8 mt-10">
        <div className="card hover:border-b-2 border-red-600 lg:w-96 bg-base-100 shadow-2xl">
          <img src={image1} alt="image1" className="lg:w-80  rounded-xl" />

          <div className="card-body">
            <h1 className="card-title">Responsive Design</h1>
            <p>
              Responsive web design creates adaptable websites that seamlessly
              adjust their layout and content to fit different devices, ensuring
              an optimal user experience across screens of all sizes.
            </p>
          </div>
        </div>
        <div className="card hover:border-b-2 border-red-600  lg:w-96 bg-base-100 shadow-2xl">
          <img src={image3} alt="Shoes" className="lg:w-80 rounded-xl" />

          <div className="card-body">
            <h1 className="card-title">HTML/CSS development</h1>
            <p>
              Web development involves creating and maintaining websites using
              various programming languages, frameworks, and tools. It
              encompasses front-end development, back-end development, and
              database management to deliver functional and visually appealing
              online experiences.
            </p>
          </div>
        </div>
        <div className="card hover:border-b-2 border-red-600 lg:w-96 bg-base-100 shadow-2xl">
          <img src={image2} alt="Shoes" className="lg:w-80 rounded-xl" />

          <div className="card-body">
            <h1 className="card-title">Front End Development</h1>
            <p>
              Front-end development focuses on creating the user-facing portion
              of a website or application. It involves coding HTML, CSS, and
              JavaScript to design and implement visually appealing and
              interactive interfaces that enhance user engagement.
            </p>
          </div>
        </div>
        <div className="card hover:border-b-2 border-red-600 lg:w-96 bg-base-100 shadow-2xl">
          <img src={image5} alt="Shoes" className="lg:w-80 rounded-xl" />

          <div className="card-body">
            <h1 className="card-title">Website accessibility</h1>
            <p>
              Responsive web design creates adaptable websites that seamlessly
              adjust their layout and content to fit different devices, ensuring
              an optimal user experience across screens of all sizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;