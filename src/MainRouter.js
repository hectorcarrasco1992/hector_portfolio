import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Projects from "./components/Projects/Project.js";

export default class MainRouter extends Component {
  render() {
    return (
      <>
        {/* <Nav /> */}

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/projects" exact element={<Projects/>} />
        </Routes>
      </>
    );
  }
}
