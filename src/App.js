import React, { Component } from "react";
//import gerrt,{compoent} from './compnoent/gerrt'
import "./style.css";
import Gerrt from "./component/Gerrt";
import Welcome from "./component/Welcome";
import ClassCounter from "./component/ClassCounter";
import HookCounter from "./component/HookCounter";
import HookCounterprv from "./component/HookCounterprv";
import HookCounterclass from "./component/HookCounterclass";
import HookArray from "./component/HookArray"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gerrt />
        <Welcome />
        <ClassCounter />
        <HookCounter />
        <HookCounterprv />

        <HookCounterclass />
        <HookArray />
      </div>
    );
  }
}
export default App;
