import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import github from "../../assets/icons/github.png";
import linkedIn from "../../assets/icons/linkedin.png";
import BannerImage from './BannerImage/BannerImage';
import Type from './TypeAnimation';

const Banner = () => {
    return (
        <div className="lg:flex mt-20 justify-center mx-auto items-center gap-16">
            <div className="lg:w-2/3 mx-auto lg:mx-0">
                <h2 className="lg:text-2xl text-blue-400 font-mono font-semibold">Hello, This is, MUHAMMAD ENAMUL HAQUE</h2>
                <div className="lg:text-2xl lg:my-5">
                <Type></Type>
                    
                </div>
                <p className="lg:text-xl my-10 font-thin font-mono">
                Proficient in multiple aspects of web development, encompassing both front-end technologies. With expertise in MERN stack, JavaScript, HTML, CSS, Tailwinds Css and React to create dynamic, interactive, user friendly, robust and scalable web applications that ensure visually appealing and responsive and that attract the attention of my clients.
                </p>

                <div className="flex gap-5 justify-center items-center mt-5">
                  
                    <a href="https://github.com/MuhammadEnamulHaque79">
                        <img
                            src={github}
                            alt="photo"
                            className=" w-10  rounded-full hover:ring-teal-400 hover:ring-2 bg-white"
                        />
                    </a>
                   
                    <a href="https://www.linkedin.com/in/enahaque79/">
                        <img
                            src={linkedIn}
                            alt="photo"
                            className=" w-10  rounded-full bg-white hover:ring-teal-400 hover:ring-2"
                        />
                    </a>

                </div>

                <div className="text-center mx-auto">
                    <button className="btn text-white mt-5 bg-gradient-to-r from-gray-400 to-blue-500 hover:from-pink-500 hover:to-yellow-400">
                        <Link to="#contacts">Hire Me</Link>
                    </button>
                </div>
            </div>
            <div>
                <BannerImage></BannerImage>
                
            </div>
        </div>
    );
};

export default Banner;