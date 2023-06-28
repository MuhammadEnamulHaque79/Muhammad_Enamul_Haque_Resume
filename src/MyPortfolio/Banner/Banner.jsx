import React from 'react';
// import Type from "./TypeAnimation/TypeAnimation";
// import { TypeAnimation } from 'react-type-animation';
// import BannerImage from "./BannerImage/BannerImage";
// import github from "../../assets/github.png";
import { HashLink as Link } from "react-router-hash-link";
// import linkedin from "../../assets/linkedin.png";
// import showwcase from "../../assets/152037815-1ba1ba6e-7f3a-455e-a51e-7fb2619ea519.png";
// import LazyLoad from "react-lazy-load";
import BannerImage from './BannerImage/BannerImage';
import Type from './TypeAnimation';

const Banner = () => {
    return (
        <div className="lg:flex mt-20 justify-center mx-auto items-center gap-16">
            <div className="lg:w-2/3 mx-auto lg:mx-0 text-white">
                <h2 className="lg:text-3xl">Hi, This is,MUHAMMAD ENAMUL HAQUE</h2>
                <div className="lg:text-3xl lg:my-5">
                <Type></Type>
                    
                </div>
                <p className="lg:text-xl my-10">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque debitis eveniet reprehenderit odit quo ipsam minus officiis nisi iure. Nostrum, vero aliquid voluptate magni blanditiis beatae ipsam sunt fuga corrupti maiores aperiam enim excepturi dolor molestiae ea quidem doloribus impedit doloremque eius saepe reprehenderit sed. Adipisci id ducimus ea?
                </p>

                <div className="flex gap-5 justify-center items-center mt-5">
                  
                    <a href="https://github.com/MuhammadEnamulHaque79">
                        <img
                            src="https://i.ibb.co/1mkMvDb/SC8.png"
                            alt=""
                            className=" w-10  rounded-full hover:ring-teal-400 hover:ring-2 bg-white"
                        />
                    </a>
                    {/* <a href="https://www.showwcase.com/abubokorprog">
                        <img
                            src={showwcase}
                            alt=""
                            className=" w-10  rounded-full bg-white hover:ring-teal-400 hover:ring-2"
                        />
                    </a> */}

                    <a href="https://github.com/MuhammadEnamulHaque79">
                        <img
                            // src={showwcase}
                            src="https://i.ibb.co/1mkMvDb/SC8.png"
                            alt=""
                            className=" w-10  rounded-full bg-white hover:ring-teal-400 hover:ring-2"
                        />
                    </a>

                    {/* <a href="https://www.linkedin.com/in/md-abu-bokor/">
                        <img
                            src={linkedin}
                            alt=""
                            className=" w-10 rounded-full bg-white hover:ring-teal-400 hover:ring-2"
                        />
                    </a> */}
                    <a href="https://github.com/MuhammadEnamulHaque79">
                        <img
                            src="https://i.ibb.co/1mkMvDb/SC8.png"
                            alt=""
                            className=" w-10 rounded-full bg-white hover:ring-teal-400 hover:ring-2"
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
                {/* <BannerImage></BannerImage> */}
                <BannerImage></BannerImage>
                
            </div>
        </div>
    );
};

export default Banner;