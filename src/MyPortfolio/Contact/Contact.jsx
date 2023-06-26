import React from "react";
import { motion } from "framer-motion";
import { Fade, Zoom } from "react-awesome-reveal";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import showwcase from "../../assets/152037815-1ba1ba6e-7f3a-455e-a51e-7fb2619ea519.png";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import ScrollToTop from "react-scroll-up";
import up from "../../assets/up-arrow.gif";

const Contact = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <div className="my-20" id="contacts">
      <h2 className="text-center text-3xl font-semibold">Contact Me</h2>
      <div className="lg:flex mt-10 gap-10">
        <>
          <Zoom>
            <div>
              <h3>Mail Me</h3>
              <div className="flex gap-4 items-center shadow-2xl justify-center">
                <div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-20"
                    >
                      <motion.path
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transition={{
                          default: { duration: 2, ease: "circIn" },
                          fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                        }}
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p>abubokor1066@gmail.com</p>
                </div>
              </div>
            </div>
          </Zoom>
          <div className="shadow-2xl card my-4">
            <Zoom>
              <h3>Number</h3>
              <div className="flex gap-4 items-center justify-center content-center">
                <div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-20 me-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="pe-10">+8801885236058</p>
                </div>
              </div>
            </Zoom>
          </div>
          <div>
            <Zoom>
              <h3>Location</h3>
              <div className="flex gap-4 items-center shadow-2xl justify-center content-center">
                <div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p>Cumilla, Bangladesh 3540</p>
                </div>
              </div>
            </Zoom>
          </div>
          <Zoom>
            <div className="flex mb-10 gap-10 justify-center items-center mt-5">
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
          </Zoom>
        </>
        <div className="lg:w-2/3">
          <h3 className="text-2xl text-center">Get In touch</h3>
          <form
            action="https://formsubmit.co/c4302b3b04335619f01986d9b3ddc6af"
            className="w-full"
            method="POST"
          >
            <div className="lg:flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder="Type Your First Name"
                  className="input input-bordered input-secondary w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="LastName"
                  placeholder="Type Your LastName"
                  className="input input-bordered input-secondary w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                className="input input-bordered input-secondary w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-secondary"
                placeholder="Message"
                name="Message"
                required
              ></textarea>
            </div>
            <div className="form-control w-full">
              <input
                type="submit"
                value="Send"
                className="input input-bordered btn mt-8 btn-error w-full"
              />
            </div>
          </form>
        </div>
      </div>
      <ScrollToTop showUnder={160}>
        <span className="text-xl">
          <img src={up} alt="" className="lg:w-16 w-10 rounded-full" />
        </span>
      </ScrollToTop>
    </div>
  );
};

export default Contact;