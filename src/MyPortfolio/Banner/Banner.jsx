import React from 'react';
import Type from "./TypeAnimation/TypeAnimation";
import BannerImage from "./BannerImage/BannerImage";
import github from "../../assets/github.png";
import { HashLink as Link } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.png";
import showwcase from "../../assets/152037815-1ba1ba6e-7f3a-455e-a51e-7fb2619ea519.png";
import LazyLoad from "react-lazy-load";

const Banner = () => {
    return (
        <div className="lg:flex mt-20 justify-center mx-auto items-center gap-16">
            <div className="lg:w-2/3 mx-auto lg:mx-0 text-white">
                <h2 className="lg:text-3xl">Hi, I'm Abu Bokor!</h2>
                <div className="lg:text-3xl lg:my-5">
                    <Type></Type>
                </div>
                <p className="lg:text-xl">
                    Passionate and self-taught front-end developer with expertise in HTML,
                    CSS, and JavaScript. Committed to creating visually appealing,
                    user-friendly websites that deliver seamless and engaging experiences.
                    Continuously learning and implementing the latest design principles
                    and techniques to drive innovation.
                </p>
                <div className="flex gap-5 justify-center items-center mt-5">
                    <a href="https://github.com/AbuBokorprog">
                        <img
                            src={github}
                            alt=""
                            className=" w-10  rounded-full hover:ring-teal-400 hover:ring-2 bg-white"
                        />
                    </a>
                    <a href="https://www.showwcase.com/abubokorprog">
                        <img
                            src={showwcase}
                            alt=""
                            className=" w-10  rounded-full bg-white hover:ring-teal-400 hover:ring-2"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/md-abu-bokor/">
                        <img
                            src={linkedin}
                            alt=""
                            className=" w-10 rounded-full bg-white hover:ring-teal-400 hover:ring-2"
                        />
                    </a>
                </div>
                <div className="text-center mx-auto">
                    <button className="btn text-white mt-5 bg-gradient-to-r from-red-400 to-blue-500 hover:from-pink-500 hover:to-yellow-400">
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