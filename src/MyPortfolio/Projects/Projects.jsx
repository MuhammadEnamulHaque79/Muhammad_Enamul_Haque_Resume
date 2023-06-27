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
    <div className="mx-5 my-20" id="projects">
      <>
        <h2 className="text-2xl mb-5 text-center font-semibold text-red-400">
          My Projects
        </h2>
      </>
      <div className="lg:grid lg:grid-cols-3">
        <>
          <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <LazyLoad>
              
              <img src="https://i.ibb.co/NYvwjbj/ins8.png" alt="photo" />
            </LazyLoad>

            <div className="card-body">
              <h2 className="card-title">Yoga School || Educational Website</h2>
              <div className="card-actions justify-between">
                
                <button className="btn btn-primary">Enroll Now</button>
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
                    
                    <img src="https://i.ibb.co/NYvwjbj/ins8.png" alt="photo" />
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
                    
                    <img src="https://i.ibb.co/NYvwjbj/ins8.png" alt="photo" />
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
                  
                    <img src="https://i.ibb.co/NYvwjbj/ins8.png" alt="photo" />
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
                    <img src="https://i.ibb.co/NYvwjbj/ins8.png" alt="photo" />
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
                Yoga School ||
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui asperiores aut, hic animi molestias inventore maiores quibusdam nisi esse dolorum nesciunt! Cum assumenda est recusandae animi, quos non corrupti aspernatur, a quaerat voluptatem perspiciatis adipisci ut voluptatum, dignissimos sunt!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam laboriosam omnis? Assumenda dolorum unde cupiditate id consectetur aut quas praesentium quisquam? Sed ducimus earum at vitae libero magni cumque.
                </li>
                <li>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio quod in ab saepe eveniet cumque eum, ipsum non incidunt ut ex quidem earum sequi est, dolorum fugit iure dolor obcaecati? Delectus expedita doloremque ducimus, aperiam asperiores tenetur exercitationem amet.
                </li>
              </ul>
              <div className="lg:flex mt-5 gap-5">
                <button className="btn btn-error btn-outline">
                  <a href="https://yoga-school-854f5.firebaseapp.com/">Preview</a>
                </button>
                <button className="btn btn-error btn-outline">
                  <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-MuhammadEnamulHaque79">
                    Client side
                  </a>
                </button>
                <button className="btn btn-error btn-outline">
                  <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-MuhammadEnamulHaque79">
                    Server side
                  </a>
                </button>
              </div>
              <div className="modal-action">
                
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </>
        
        <div>
          <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <LazyLoad>
              
              <img src="https://i.ibb.co/qr1b1Cs/papet-1.png" alt="photo" />
            </LazyLoad>
            <div className="card-body">
              <h2 className="card-title">Doll World || E-commerce Website</h2>
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
                    <img src="https://i.ibb.co/k4Wq8gF/learning3.png" alt="photo" />
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
                    <img src="https://i.ibb.co/k4Wq8gF/learning3.png" alt="photo" />
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
                    
                    <img src="https://i.ibb.co/k4Wq8gF/learning3.png" alt="photo" />
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
                    <img src="https://i.ibb.co/k4Wq8gF/learning3.png" alt="photo" />
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
                Doll World ||
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
                  Each products details will display the sellers name and
                  contact email.
                </li>
              </ul>
              <div className="lg:flex mt-5 gap-5">
                <button className="btn btn-error btn-outline">
                  <a href="https://project-11-client-side.firebaseapp.com/">Preview</a>
                </button>
                <button className="btn btn-error btn-outline">
                  <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-MuhammadEnamulHaque79">
                    Client side
                  </a>
                </button>
                <button className="btn btn-error btn-outline">
                  <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-MuhammadEnamulHaque79">
                    Server side
                  </a>
                </button>
              </div>
              <div className="modal-action">
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
        <div>
          <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <LazyLoad>
              <img src="https://i.ibb.co/f9fLZc9/food4.png" alt="photo" />
            </LazyLoad>
            <div className="card-body">
              <h2 className="card-title">Thai Recipe Cortege || Restaurant</h2>
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
                <img src="https://i.ibb.co/f9fLZc9/food4.png" alt="photo" />
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
                <img src="https://i.ibb.co/f9fLZc9/food4.png" alt="photo" />
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
                <img src="https://i.ibb.co/f9fLZc9/food4.png" alt="photo" />
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
                <img src="https://i.ibb.co/f9fLZc9/food4.png" alt="photo" />
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
            Thai Recipe Food ||
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
              Create a dedicated section to showcase the best restaurant
              products based on their quality and design.
            </li>
            <li>
              Ensure each product page displays comprehensive details about the
              product.
            </li>
            <li>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi odit perspiciatis similique officiis nemo veniam autem quibusdam cum perferendis, fugit ipsum repellat numquam sunt cupiditate ut aperiam, aut dolore.
            </li>
          </ul>
          <div className="lg:flex mt-5 gap-10">
            <button className="btn btn-error mx-2 btn-outline">
              <a href="https://thai-food-recipe-hub.firebaseapp.com/">Preview</a>
            </button>
            <button className="btn btn-error btn-outline">
              <a href=" https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-MuhammadEnamulHaque79">
                Client side
              </a>
            </button>
            <button className="btn btn-error btn-outline">
              <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-MuhammadEnamulHaque79">
                Server side
              </a>
            </button>
          </div>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Projects;