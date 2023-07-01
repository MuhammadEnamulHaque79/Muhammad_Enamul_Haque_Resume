import React from 'react';
import html from "../../../src/assets/icons/html.png";
import css from "../../../src/assets/icons/css-3.png";
import js from "../../../src/assets/icons/js.png";
import bootstrap from "../../../src/assets/icons/bootstrap.png";
import tailwind from "../../../src/assets/icons/tailwind.png";
import react from "../../../src/assets/icons/react.png";
import node from "../../../src/assets/icons/nodejs.png";
import github from "../../../src/assets/icons/github.png";
import mongodb from "../../../src/assets/icons/mongodb.png";
import express from "../../../src/assets/icons/js.png";
import firebase from "../../../src/assets/icons/firebase.png";
import netlify from "../../../src/assets/icons/netlify.png";
import enamul from "../../../src/assets/icons/enmul.jpg";
import { Fade } from "react-awesome-reveal";
import LazyLoad from "react-lazy-load";



const About = () => {
    return (
        <div className="mx-5 my-10" id="about">
            <h2 className="text-center text-2xl font-thin font-mono">
                About Me
            </h2>
            
            <div className="lg:flex gap-16 items-center my-5">
                <div className="lg:w-1/2">
                    <Fade direction="right" duration={2000} delay={1000}>
                        <LazyLoad>
                            
                            <img src={enamul} alt="" className="rounded-2xl lg:w-full" />
                        </LazyLoad>
                    </Fade>
                </div>
                <div className="lg:w-1/2 mt-4">
                    <Fade direction="right" duration={3000}>
                        <p className="lg:text-xl font-thin font-mono">
                        As a Full Stack Developer, proficient in multiple aspects of web development, encompassing both front-end technologies. With expertise in MERN stack, JavaScript, HTML, CSS, Tailwinds Css and React to create dynamic, interactive, user friendly, robust and scalable web applications that ensure visually appealing and responsive and that attract the attention of my clients.
                        </p>
                    </Fade>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-thin font-mono font-semibold">Tech Fields:</h2> <br />
                <p className="text-xl font-thin font-mono">
                    Using a combination of cutting-edge technologies and reliable
                    open-source software I build user-focused, performant apps and
                    websites for smartphones, tablets, and desktops.
                </p>
                <div className="my-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-3">
                        <Fade direction="up" duration={1000} damping={0.1}>
                            <div className="flex bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl gap-3 items-center">
                                <img src={html} alt="" className="w-14" />
                                <p>HTML</p>
                            </div>
                               
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={css} alt="" className="w-14" />
                                <p>CSS</p>
                            </div>
                                
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={js} alt="" className="w-14" />
                                <p>JavaScript</p>
                            </div>
                               
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={bootstrap} alt="" className="w-14" />
                                <p>Bootstrap</p>
                            </div>
                                
                        </Fade>
                        <Fade direction="up" delay={1} duration={1000} damping={0.1}>
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={tailwind} alt="" className="w-14" />
                                <p>Tailwind CSS</p>
                            </div>
                                
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={react} alt="" className="w-14" />
                                <p>React</p>
                            </div>
                                
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={node} alt="" className="w-14" />
                                <p>Node.js</p>
                            </div>
                                
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={github} alt="" className="w-14" />
                                <p>Github</p>
                            </div>
                                
                        </Fade>
                        <Fade direction="up" duration={1000} damping={0.1}>
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={mongodb} alt="" className="w-14 h-14" />
                                <p>MongoDB</p>
                            </div>
                                
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={express} alt="" className="w-14 h-14 bg-white" />
                                <p>Express.js</p>
                            </div>
                               
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={firebase} alt="" className="w-14" />
                                <p>Firebase</p>
                            </div>
                            <div className="flex gap-3 bg-slate-50 shadow-2xl mx-auto w-36 py-2 rounded-xl items-center">
                                <img src={netlify} alt="" className="w-14" />
                                <p>Netlify</p>
                            </div>
                                
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;