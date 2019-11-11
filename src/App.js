  import React, {Component} from 'react';
  import Player from "./Player"
  import Login from "./Login"
  import './App.css';

  class App extends Component {
    render(){
    return (
      <div className="App">
        <div className ="title">My Music App</div>
        <Login/>
        <Player/>
      </div>
    );
  }
}
export default App;
