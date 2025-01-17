import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { IconContext } from "@e1himself/react-icons";
import { FaFolder } from "@e1himself/react-icons/fa";
import { MdAccessibility } from "@e1himself/react-icons/md";
import { TiArrowDown } from "@e1himself/react-icons/ti";
import { GrGrommet } from "@e1himself/react-icons/gr";
import { LiaNode } from "@e1himself/react-icons/lia";
import { TbPentagonNumber0 } from "@e1himself/react-icons/tb";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <IconContext.Provider
            value={{
              color: "blue",
              className: "global-class-name",
              attr: { focusable: "false" },
            }}
          >
            <MdAccessibility />
            <FaFolder
              color="red"
              title="folder icon"
              className="additional-class-name"
            />
          </IconContext.Provider>
          <MdAccessibility />
          <FaFolder />
          <TiArrowDown title="arrow down icon" />
          <GrGrommet />
          <LiaNode />
          <TbPentagonNumber0 />
        </p>
      </div>
    );
  }
}

export default App;
