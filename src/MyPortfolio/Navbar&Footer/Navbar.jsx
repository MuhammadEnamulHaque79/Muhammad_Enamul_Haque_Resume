import React from "react";
import { Fade } from "react-awesome-reveal";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {


  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link className="active:bg-red-400" to="#about">
          About
        </Link>
      </li>
      <li>
        <Link to="#services">Services</Link>
      </li>
      <li>
        <Link to="#projects">Projects</Link>
      </li>
      <li>
        <Link to="#contacts">Contacts</Link>
      </li>
    </>
  );

  return (
    <Fade direction="up" duration={2000}>
      <div className="navbar z-0 font-bold top-0 text-xl">
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
          <a className=" text-blue-600 normal-case text-xl">Enamul</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{nav}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-info">
            <a href="https://drive.google.com/file/d/1qW0R1IgmpPXcYUOQftRfKS0WItdxAENH/view?usp=sharing" download>
              Get Resume
            </a>
          </button>
            
        </div>
            
      </div>
    </Fade>
  );
};

export default Navbar;

//https://github.com/AbuBokorprog/abubokor-portfolio/blob/main/src/Layout/Main.jsx