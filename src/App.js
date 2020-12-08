import React, { Component } from 'react';
//import gerrt,{compoent} from './compnoent/gerrt'
import './style.css';
import Gerrt from './component/Gerrt' 
import Welcome from './component/Welcome'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Gerrt />
        <Welcome />
      </div>
    );
  }
}
export default App;
