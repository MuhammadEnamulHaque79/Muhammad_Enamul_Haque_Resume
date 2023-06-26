import React from 'react';
// import image from "../../../assets/Untitled design (1).png";
import { Zoom } from "react-awesome-reveal";
import LazyLoad from 'react-lazy-load';
// import LazyLoad from "react-lazy-load";

const BannerImage = () => {
    return (
        <>
            <div className="lg:w-full mx-auto">
                <Zoom>
                    {/* <LazyLoad>
                        <img
                            // src={image}
                            src="https://i.ibb.co/1mkMvDb/SC8.png"
                            alt="photo"
                            className="lg:w-80 lg:h-80 sm:mt-32 lg:mt-0 mb-10 ring-teal-400 hover:ring-red-600 ring-1 rounded-full"
                        />
                    </LazyLoad> */}

                    <LazyLoad>
                    <img
                            // src={image}
                            src="https://i.ibb.co/1mkMvDb/SC8.png"
                            alt="photo"
                            className="lg:w-80 lg:h-80 sm:mt-32 lg:mt-0 mb-10 ring-teal-400 hover:ring-red-600 ring-1 rounded-full"
                        />
                    </LazyLoad>

                </Zoom>
            </div>
        </>
    );
};

export default BannerImage;