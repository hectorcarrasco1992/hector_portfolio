import React from "react";
import "./projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div>
          <h1 id="projects-header">
            Here are Some of the projects I have worked on
          </h1>
        </div>
        <div className="project-card">
          <img
            src={require("../shared/superStore.png")}
            alt="superStore"
            id="project-pic"
          ></img>
          <div id="text-card">
            <h1>The Super Store</h1>
            <p>
              An E-commerce site to sell superhero memorabilia. Made with
              ReactJs,NodeJs,React-Redux and SQL.
            </p>
            <a href="https://the-super-store.herokuapp.com/" target="_blank">
              <button className="visit-button">Visit</button>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={require("../shared/Janken.png")}
            alt="superStore"
            id="project-pic"
          ></img>
          <div id="text-card">
            <h1>Janken Colosseum </h1>
            <p>
              An open world rock-paper-scissor battler where you traverse the
              world and collect your rocks,papers and scissors to do battle with
              the staff of Full Stack Academy. Built with Phaser,Javascript and
              React-Redux.
            </p>
            <a href="https://janken-coliseum1.herokuapp.com/" target="_blank">
              <button className="visit-button">Visit</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
