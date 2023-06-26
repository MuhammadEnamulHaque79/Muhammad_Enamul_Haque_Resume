import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../MyPortfolio/Navbar&Footer/Navbar';
import Footer from '../MyPortfolio/Navbar&Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;