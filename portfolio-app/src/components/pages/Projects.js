import React from "react";
import CheatsheetPhoto from "../../assets/css-cheatsheet.png";
import WeatherDashboard from "../../assets/weather-dashboard.gif";
import GooolHome from "../../assets/goool-homepage.png";
import Advntr from "../../assets/ADVNTR.gif";
import noteTaker from "../../assets/note-taker.gif";
import codeQuiz from "../../assets/coding-quiz.gif";

export default function Projects() {
  const projects = [
    {
      name: "CSS Cheatsheet",
      imgsrc: CheatsheetPhoto,
      link: "https://aurumbright.github.io/mini-project-2/",
      repo: "https://github.com/aurumbright/mini-project-2",
    },
    {
      name: "Weather Dashboard",
      imgsrc: WeatherDashboard,
      link: "https://aurumbright.github.io/weather-dashboard/",
      repo: "",
    },
    {
      name: "Goool!",
      imgsrc: GooolHome,
      link: "https://secure-shore-30155.herokuapp.com/login",
      repo: "https://github.com/kentshaffer/Project-2",
    },
    {
      name: "ADVNTR",
      imgsrc: Advntr,
      link: "https://mulloa90.github.io/project-1/",
      repo: "https://github.com/Mulloa90/project-1",
    },
    {
      name: "Note Taker",
      imgsrc: noteTaker,
      link: "https://salty-cliffs-07779.herokuapp.com/",
      repo: "https://github.com/aurumbright/note-taker",
    },
    {
      name: "Coding Quiz",
      imgsrc: codeQuiz,
      link: "https://aurumbright.github.io/code-quiz/",
      repo: "https://github.com/aurumbright/code-quiz",
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div id="gallery">
        {projects.map((project) => (
          <div key={project.name}>
            <div
              className="card"
              style={{ backgroundImage: `url(${project.imgsrc})` }}
            >
              <a href={project.link}>{project.name}</a>
              <a href={project.repo}>Find this project on Github</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
