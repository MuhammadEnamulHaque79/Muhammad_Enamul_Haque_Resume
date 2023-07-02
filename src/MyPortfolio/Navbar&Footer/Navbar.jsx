import React from "react";
import { Fade } from "react-awesome-reveal";
import { HashLink as Link } from "react-router-hash-link";
import web from "../../assets/icons/web.png";

const Navbar = () => {
  const handleDownload=()=>{
    window.open('https://drive.google.com/u/1/uc?id=1qW0R1IgmpPXcYUOQftRfKS0WItdxAENH&export=download')
  }
   


  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link target="_blank" to="/about"> About</Link>
      </li>
      <li>
        <Link target="_blank" to="/services">Services</Link>
      </li>
      <li>
        <Link target="_blank" to="/projects">Projects</Link>
      </li>
      <li>
        <Link target="_blank" to="/contacts">Contacts</Link>
      </li>
    </>
  );

  return (
    <Fade direction="up" duration={2000}>
      <div className="navbar fixed z-0 font-mono font-semibold uppercase text-3xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <Link to="https://drive.google.com/u/1/uc?id=1qW0R1IgmpPXcYUOQftRfKS0WItdxAENH"><img src={web} alt="web" className="w-10 h-10" /></Link>
        </div>
          
          
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{nav}</ul>
        </div>
        <div className="navbar-end">
          <button onClick={handleDownload} className="btn btn-outline btn-info">Get Resume</button>
        </div>
            
      </div>
    </Fade>
  );
};

export default Navbar;
        
            
//https://app.netlify.com/sites/unrivaled-youtiao-c03255/deploys
//48-10 (bonus) Deploy rest countries to surge
//