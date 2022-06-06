import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";
import MainRouter from "./MainRouter";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav></Nav>
        <MainRouter />
        <Footer></Footer>
      </Router>
    );
  }
}
