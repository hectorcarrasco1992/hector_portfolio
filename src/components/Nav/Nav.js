import React, { Component } from "react";
import { Link } from "react-router-dom";


import "./nav.css";

export default class Nav extends Component {
  componentDidMount() {
    const nav = document.getElementById("nav");
    console.log(this.props);

    window.onscroll = function () {
      if (window.pageYOffset > 10) {
        nav.style.background = "rgb(204, 255, 255) ";
        // nav.style.boxShadow = '10px 4px 1px black'
      } else {
        // nav.style.background = 'transparent'
        nav.style.background = "rgb(255, 255, 204) ";
        // nav.style.boxShadow = 'none';
      }
    };
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="navbar" id="nav">
            <ul>
              <Link to="/" id="nav-links"> Home </Link>
              <Link to ='/projects' id="nav-links">Projects</Link>

              
            </ul>
          </div>
        </div>
      </>
    );
  }
}

