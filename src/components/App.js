import React, {Component} from 'react';
import logo from '../resources/images/logo.svg';
import '../styles/App.css';
import '../styles/tilegrid.css';
import TileGrid from "./TilesGrid/TileGrid";

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
          <div className="App-intro">
           <TileGrid />
          </div>
        </div>
    );
  }
}

export default App;
