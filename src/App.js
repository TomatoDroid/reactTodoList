import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { CopyRight } from "./components/copyRight/copyRight";
export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Header></Header>
        <Main></Main>
        <CopyRight></CopyRight>
      </div>
    );
  }
}
