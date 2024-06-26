import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaG } from "react-icons/fa6";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1608512532288-8f985c15345d?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg-items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I`m Filip Sekuloski
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I`m a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Junior Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.facebook.com/filip.sekuloski.5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.instagram.com/filip_sekuloski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/filip-sekuloski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://github.com/FilipSekuloski1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
