import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
// import Banner from "../Banner/Banner";
// import About from "../About/About";
// import Services from "../Services/Services";
// import Projects from "../Projects/Projects";
// import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div id="#" className="mx-auto overflow-hidden">
        {/* <Banner></Banner> */}
        <Banner></Banner>
        {/* <About></About> */}
        <About></About>
        {/* <Services></Services> */}
        <Services></Services>
        {/* <Projects></Projects> */}
        <Projects></Projects>
        {/* <Contact></Contact> */}
        <Contact></Contact>
      </div>
    );
};

export default Home;