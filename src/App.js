  import React, {Component} from 'react';
  import Login from "./components/Login"
  import Navigation from "./components/Navigation"
  import OnlineSwitch from "./components/OnlineSwitch"
  import SliderCard from "./components/SliderCard"
  import SoundQuality from "./components/SoundQuality"
  import VolumeSlider from "./components/VolumeSlider"
  import './App.css';

  class App extends Component {
    render(){
    return (
      <div className="App">
        <Navigation/>
        <OnlineSwitch/>
        <Login/>
        <SliderCard/>
        <SoundQuality/>
        <VolumeSlider/>
      </div>
    );
  }
}
export default App;
