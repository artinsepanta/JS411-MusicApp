  import React, {Component} from 'react';
  import Login from "./Login"
  import Dashboard from "./Dashboard"
  import './App.css';

  class App extends Component {
    render(){
    return (
      <div className="App">
        {/*<div className ="title">My Music App</div>*/}
        <Dashboard/>
        <Login/>
        
        
      </div>
    );
  }
}
export default App;
