import React from "react";
import img1 from "../../assets/icons/img1.png";
import img2 from "../../assets/icons/img2.png";
import img3 from "../../assets/icons/img3.png";
import img4 from "../../assets/icons/img4.png";

const Services = () => {
  return (
    <div className="mx-5 my-20" id="services">
      <h2 className="mb-5 text-center text-2xl font-thin font-mono">
        Services
      </h2>
      <div className="lg:grid w-full lg:grid-cols-3 gap-8 mt-10">
        <div className="card hover:border-b-2 border-blue-600 lg:w-96 bg-base-100 shadow-2xl">
          <img src={img3} alt="image1" className="lg:w-80  rounded-xl" />
          

          <div className="card-body">
            <h1 className="card-title">Responsive Design</h1>
            <p>
              Responsive web design creates adaptable websites that seamlessly
              adjust their layout and content to fit different devices, ensuring
              an optimal user experience across screens of all sizes.
            </p>
          </div>
        </div>
        <div className="card hover:border-b-2 border-blue-600  lg:w-96 bg-base-100 shadow-2xl">
          <img src={img1} alt="photo" className="lg:w-80 rounded-xl" />
          

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
        <div className="card hover:border-b-2 border-blue-600 lg:w-96 bg-base-100 shadow-2xl">
          <img src={img2} alt="photo" className="lg:w-80 rounded-xl" />
          

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
        <div className="card hover:border-b-2 border-blue-600 lg:w-96 bg-base-100 shadow-2xl">
          <img src={img4} alt="photo" className="lg:w-80 rounded-xl" />
    

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