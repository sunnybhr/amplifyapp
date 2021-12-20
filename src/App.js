import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';
/* import { Component } from 'react/cjs/react.production.min'; */



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}



/*

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello React</h1>
          <p>Current React Version: {React.version}</p>
        </header>
      </div>
    )
  }
}

*/

export default App;
