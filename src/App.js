  import React, {Component} from 'react';
  import Login from "./components/Login"
  import Dashboard from "./components/Dashboard"
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
