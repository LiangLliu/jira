import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProjectListScreen } from "./screans/project-list";
import { LoginScreen } from "./screans/login";

function App() {
  return (
    <div className="App">
      {/*<ProjectListScreen />*/}
      <LoginScreen />
    </div>
  );
}

export default App;
