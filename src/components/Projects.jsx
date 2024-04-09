import React from "react";
import ProjectItem from "./ProjectItem";
import netflixImg from "../assets/netflix.png";
import twitchImg from "../assets/twitch.png";
import otvorenonebo from "../assets/otvorenonebo.png";
import datafinance from "../assets/growdata.png";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veritatis
        perspiciatis placeat saepe voluptatum, quisquam aspernatur impedit illo
        quo corporis numquam dignissimos, amet facilis, sunt necessitatibus
        delectus. Reprehenderit, ullam alias?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={otvorenonebo}
          title="Летно Кино"
          link={"https://github.com/FilipSekuloski1/LetnoKino"}
        />
        <ProjectItem
          img={datafinance}
          title="Дата финансии"
          link={"https://github.com/FilipSekuloski1/DataFinansii"}
        />
        <ProjectItem img={netflixImg} title="Netflix App" />
        <ProjectItem img={twitchImg} title="Twitch App" />
      </div>
    </div>
  );
};

export default Projects;
