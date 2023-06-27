import React from 'react';
// import picture from "../../assets/1653032964872-01.jpg";
// import html from "../../assets/html.png";
// import css from "../../assets/css-3.png";
// import javascript from "../../assets/java-script.png";
// import bootstrap from "../../assets/bootstrap.png";
// import tailwind from "../../assets/tailwind-css-icon.png";
// import mongodb from "../../assets/mongodb-icon.png";
// import node from "../../assets/node-js.png";
// import express from "../../assets/express-js-icon.png";
// import react from "../../assets/physics.png";
// import firebase from "../../assets/google-firebase-icon.png";
// import git from "../../assets/git-icon.png";
import { Fade } from "react-awesome-reveal";
// import { BrowserRouter } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const About = () => {
    return (
        <div className="mx-5 my-20" id="about">
            <h2 className="text-center text-3xl font-semibold">About Me</h2>
            <div className="lg:flex gap-16 items-center my-5">
                <div className="lg:w-1/2">
                    <Fade direction="right" duration={2000} delay={1000}>
                        <LazyLoad>
                            {/* <img src={picture} alt="" className="rounded-2xl lg:w-full" /> */}
                            <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="rounded-2xl lg:w-full" />
                        </LazyLoad>
                    </Fade>
                </div>
                <div className="lg:w-1/2 mt-4">
                    <Fade direction="right" duration={3000}>
                        <p className="lg:text-xl">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod incidunt soluta harum? Magni aut atque fugit unde repellendus totam autem? Aliquam a dolorum eum inventore omnis iste, necessitatibus quae ea excepturi. Voluptatibus et labore doloribus inventore. Iusto est asperiores fugiat at enim corrupti dignissimos sequi ab eos, cum tenetur.
                        </p>
                    </Fade>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl">Tech Stack:</h2> <br />
                <p className="text-xl">
                    Using a combination of cutting-edge technologies and reliable
                    open-source software I build user-focused, performant apps and
                    websites for smartphones, tablets, and desktops.
                </p>
                <div className="my-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-3">
                        <Fade direction="up" duration={1000} damping={0.1}>
                            <div className="flex bg-slate-700 mx-auto w-36 py-2 rounded-xl gap-3 items-center">
                                {/* <img src={html} alt="" className="w-14" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-14" />
                                <p>HTML</p>
                            </div>
                            <div className="flex gap-3 bg-slate-700 mx-auto w-36 py-2 rounded-xl items-center">
                                {/* <img src={css} alt="" className="w-14" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-14" />
                                <p>CSS</p>
                            </div>
                            <div className="flex gap-3 bg-slate-700 mx-auto w-36 py-2 rounded-xl items-center">
                                {/* <img src={javascript} alt="" className="w-14" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-14" />
                                <p>JavaScript</p>
                            </div>
                            <div className="flex gap-3 bg-slate-700 mx-auto w-36 py-2 rounded-xl items-center">
                                {/* <img src={bootstrap} alt="" className="w-14" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-14" />
                                <p>Bootstrap</p>
                            </div>
                        </Fade>
                        <Fade direction="up" delay={1} duration={1000} damping={0.1}>
                            <div className="flex gap-3 bg-slate-700 mx-auto w-36 py-2 rounded-xl items-center">
                                {/* <img src={tailwind} alt="" className="w-14" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-14" />
                                <p>Tailwind CSS</p>
                            </div>
                            <div className="flex gap-3 bg-slate-700 mx-auto w-36 py-2 rounded-xl items-center">
                                {/* <img src={react} alt="" className="w-14" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-14" />
                                <p>React</p>
                            </div>
                            <div className="flex gap-3 bg-slate-700 mx-auto w-36 py-2 rounded-xl items-center">
                                {/* <img src={node} alt="" className="w-14" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-14" />
                                <p>Node.js</p>
                            </div>
                            <div className="flex gap-3 bg-slate-700 mx-auto w-36 py-2 rounded-xl items-center">
                                {/* <img src={git} alt="" className="w-14" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-14" />
                                <p>Git</p>
                            </div>
                        </Fade>
                        <Fade direction="up" duration={1000} damping={0.1}>
                            <div className="flex gap-3 bg-slate-700 mx-auto w-36 py-2 rounded-xl items-center">
                                {/* <img src={mongodb} alt="" className="w-14 h-14" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-14 h-14" />
                                <p>MongoDB</p>
                            </div>
                            <div className="flex gap-3 bg-slate-700 mx-auto w-36 py-2 rounded-xl items-center">
                                {/* <img src={express} alt="" className="w-12 h-14 bg-white" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-12 h-14 bg-white" />
                                <p>Express.js</p>
                            </div>
                            <div className="flex gap-3 bg-slate-700 mx-auto w-36 py-2 rounded-xl items-center">
                                {/* <img src={firebase} alt="" className="w-10" /> */}
                                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="" className="w-10" />
                                <p>Firebase</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;