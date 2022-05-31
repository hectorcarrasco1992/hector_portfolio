import React, { Component } from "react";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="parallax-world-of-ugg">
          <section>
            <div className="title">
              <h3>I Am</h3>
              <h1>Hector Carrasco</h1>
            </div>
          </section>

          <section>
            <div className="parallax-one">
              <h2>'A Solutions Based Fullstack Developer' </h2>
            </div>
          </section>

          <section>
            <div className="block">
              <p>
                <span className="first-character sc">I</span>can do this! This
                mentality is the first step I take when engineering solutions. I
                dedicate myself to my craft and any team I am on.
              </p>
              <p className="line-break margin-top-10"></p>
              <p className="margin-top-10">Skills: </p>
              <ul className="skills-list">
                <li>
                  <img
                    className="icon-skills"
                    src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                    alt="javascript"
                  ></img>
                </li>
                <li>
                  <img
                    className="icon-skills"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png?20170401104355"
                    alt="NodeJs"
                  ></img>
                </li>
                <li>
                  <img
                    src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
                    className="icon-skills"
                    alt="react"
                  ></img>
                </li>
                <li>
                  <img
                    src="https://banner2.cleanpng.com/20181122/fzo/kisspng-redux-react-javascript-library-application-softwar-egghead-intro-to-redux-5bf74afc404894.3460027115429332442633.jpg"
                    alt="redux"
                    className="icon-skills"
                  ></img>
                </li>
                <li>
                  <img
                    src="https://wiki.postgresql.org/images/3/30/PostgreSQL_logo.3colors.120x120.png"
                    alt="postgresql"
                    className="icon-skills"
                  ></img>
                </li>
                <li>
                  <img
                    src="https://seeklogo.com/images/G/git-logo-F4A93DAA20-seeklogo.com.png"
                    className="icon-skills"
                    alt="git"
                  ></img>
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original-wordmark.svg"
                    className="icon-skills"
                    alt="mongodb"
                  ></img>
                </li>
                <li></li>
              </ul>
            </div>
          </section>

          <section>
            <div className="parallax-two">
              <h2>
                'Any fool can know. The point is to understand.' –Albert
                Einstein
              </h2>
            </div>
          </section>

          <section>
            <div className="block">
              <p>
                <span className="first-character ny">I</span> understand that it is not enough to just know how to complete a task.It is important understand the project in order to improve on it and handle any bugs that may come.
              </p>
              <p className="line-break margin-top-10"></p>
              <p className="margin-top-10">
                {" "}
                ‘Tell me and I forget. Teach me and I remember. Involve me and I
                learn.’ –Benjamin Franklin
              </p>
            </div>
          </section>

          <section>
            <div className="parallax-three">
              <h2>TeamWork</h2>
            </div>
          </section>

          <section>
            <div className="block">
              <p>
                <span className="first-character atw">F</span>ind your team in
                the classroom. Get surrounded by amazing teachers and classmates
                who will further propel your journey in coding.
              </p>
              <p className="line-break margin-top-10"></p>
              <p className="margin-top-10">
                'Teamwork is the ability to work together toward a common
                vision. The ability to direct individual accomplishments toward
                organizational objectives. This quote by Carnegie is what best exemplifies how i deal with teamwork. I find it is best to be able to lean on your team as well as have your team lean on you. I have worked on and lead teams in the past to accomplish organizational goals and have a good time while doing it!
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
