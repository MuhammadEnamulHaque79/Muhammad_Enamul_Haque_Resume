import React from "react";
// import lyric from "../../assets/lyriclab.png";
// import lyric2 from "../../assets/lyriclab2.png";
// import lyric3 from "../../assets/lyriclab3.png";
// import lyric4 from "../../assets/lyriclab4.png";
// import kidzoo from "../../assets/kidzoo.png";
// import kidzoo2 from "../../assets/kidzoo2.png";
// import kidzoo3 from "../../assets/kidzoo3.png";
// import kidzoo4 from "../../assets/kidzoo4.png";
// import chef from "../../assets/chef.png";
// import chef2 from "../../assets/chef2.png";
// import chef3 from "../../assets/chef3.png";
// import chef4 from "../../assets/chef4.png";
import LazyLoad from "react-lazy-load";

const Projects = () => {
  return (
    <div className="my-20" id="projects">
      <>
        <h2 className="text-2xl mb-5 text-center font-semibold text-red-400">
          My Projects
        </h2>
      </>
      <div className="lg:grid lg:grid-cols-3">
        <>
          <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <LazyLoad>
              {/* <img src={lyric} alt="lyric website image" /> */}
              <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
            </LazyLoad>

            <div className="card-body">
              <h2 className="card-title">LyricLAB || Educational Website</h2>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Buy Now</button>
                <button
                  className="btn btn-primary"
                  onClick={() => window.my_modal_4.showModal()}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box lg:w-11/12 max-w-5xl">
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <LazyLoad>
                    {/* <img src={lyric} className="w-full" /> */}
                    <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
                  </LazyLoad>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <LazyLoad>
                    {/* <img src={lyric2} className="w-full" /> */}
                    <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
                  </LazyLoad>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <LazyLoad>
                    {/* <img src={lyric3} className="w-full" /> */}
                    <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
                  </LazyLoad>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <LazyLoad>
                    {/* <img src={lyric4} className="w-full" /> */}
                    <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
                  </LazyLoad>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg">
                LyricLAB ||
                <span className=""> Educational Website</span>
              </h3>
              <p>
                Technology:
                <span className="text-red-400">
                  HTML || Tailwind CSS || REACT || Firebase
                </span>
              </p>
              <h4 className="font-semibold">Featured:</h4>
              <ul className="list-disc">
                <li>
                  Create a dedicated section to showcase the best educational
                  products based on their quality and design.
                </li>
                <li>
                  Ensure each product page displays comprehensive details about
                  the product.
                </li>
                <li>
                  Design the dashboard interface to have a clear sidebar that
                  displays different sections based on the user's role.
                </li>
              </ul>
              <div className="lg:flex mt-5 gap-5">
                <button className="btn btn-error btn-outline">
                  <a href="https://lyriclab-17c8b.web.app/">Preview</a>
                </button>
                <button className="btn btn-error btn-outline">
                  <a href="https://github.com/AbuBokorprog/lyriclab-project-client-side">
                    Client side
                  </a>
                </button>
                <button className="btn btn-error btn-outline">
                  <a href="https://github.com/AbuBokorprog/lyriclab-project-server-side">
                    Server side
                  </a>
                </button>
              </div>
              <div className="modal-action">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </>
        <div>
          <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <LazyLoad>
              {/* <img src={kidzoo} alt="Kidzoo" /> */}
              <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
            </LazyLoad>
            <div className="card-body">
              <h2 className="card-title">Kidzoo || E-commerce website</h2>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Buy Now</button>
                <button
                  className="btn btn-primary"
                  onClick={() => window.my_modal_2.showModal()}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <LazyLoad>
                    {/* <img src={kidzoo} className="w-full" /> */}
                    <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
                  </LazyLoad>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <LazyLoad>
                    {/* <img src={kidzoo2} className="w-full" /> */}
                    <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
                  </LazyLoad>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <LazyLoad>
                    {/* <img src={kidzoo3} className="w-full" /> */}
                    <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
                  </LazyLoad>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <LazyLoad>
                    {/* <img src={kidzoo4} className="w-full" /> */}
                    <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
                  </LazyLoad>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg">
                KidZoo ||
                <span className=""> E-commerce Website</span>
              </h3>
              <p>
                Technology:
                <span className="text-red-400">
                  HTML || Tailwind CSS || REACT || Firebase
                </span>
              </p>
              <h4 className="font-semibold">Featured:</h4>
              <ul className="list-disc">
                <li>Personalized recommendations based on user preferences.</li>
                <li>
                  Streamline the checkout process to ensure a smooth and
                  hassle-free experience for customers.
                </li>
                <li>
                  Each product's details will display the seller's name and
                  contact email.
                </li>
              </ul>
              <div className="lg:flex mt-5 gap-5">
                <button className="btn btn-error btn-outline">
                  <a href="https://kidzoo-cb3d2.web.app/">Preview</a>
                </button>
                <button className="btn btn-error btn-outline">
                  <a href="https://github.com/AbuBokorprog/kidzoo-project-client-side">
                    Client side
                  </a>
                </button>
                <button className="btn btn-error btn-outline">
                  <a href="https://github.com/AbuBokorprog/kidzoo-project-server-side">
                    Server side
                  </a>
                </button>
              </div>
              <div className="modal-action">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
        <div>
          <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <LazyLoad>
              {/* <img src={chef} alt="chef" /> */}
              <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
            </LazyLoad>
            <div className="card-body">
              <h2 className="card-title">Bite my Kitchen || Restaurant</h2>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Buy Now</button>
                <button
                  className="btn btn-primary"
                  onClick={() => window.my_modal_3.showModal()}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box lg:w-11/12 max-w-5xl">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <LazyLoad>
                {/* <img src={chef} alt="chef" className="w-full" /> */}
                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
              </LazyLoad>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <LazyLoad>
                {/* <img src={chef2} alt="chef" className="w-full" /> */}
                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
              </LazyLoad>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <LazyLoad>
                {/* <img src={chef3} alt="chef" className="w-full" /> */}
                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
              </LazyLoad>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <LazyLoad>
                {/* <img src={chef4} alt="chef" className="w-full" /> */}
                <img src="https://i.ibb.co/PYPj1G5/portfolio.png" alt="lyric website image" />
              </LazyLoad>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <h3 className="font-bold text-lg">
            Bite my kitchen ||
            <span className=""> Restaurant Website</span>
          </h3>
          <p>
            Technology:
            <span className="text-red-400">
              HTML || Tailwind CSS || REACT || Firebase
            </span>
          </p>
          <h4 className="font-semibold">Featured:</h4>
          <ul className="list-disc">
            <li>
              Create a dedicated section to showcase the best educational
              products based on their quality and design.
            </li>
            <li>
              Ensure each product page displays comprehensive details about the
              product.
            </li>
            <li>
              Design the dashboard interface to have a clear sidebar that
              displays different sections based on the user's role.
            </li>
          </ul>
          <div className="lg:flex mt-5 gap-10">
            <button className="btn btn-error mx-2 btn-outline">
              <a href="https://chef-savvy-project.web.app/">Preview</a>
            </button>
            <button className="btn btn-error btn-outline">
              <a href="https://github.com/AbuBokorprog/chef-savvy-project-client-side">
                Client side
              </a>
            </button>
            <button className="btn btn-error btn-outline">
              <a href="https://github.com/AbuBokorprog/chef-savvy-project-server-side">
                Server side
              </a>
            </button>
          </div>
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Projects;