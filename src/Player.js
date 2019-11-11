import React, {Component} from 'react';
import './Player.css';

class Player extends Component {
  
  render(){
  return (
    <div className="Player">
     <div className="controls">
        <a herf="javascript:void();" ><i className="fad fa-play"></i></a>
         <a herf="javascript:void();" ><i class="fas fa-backward"></i></a>
        <a herf="javascript:void();" ><i class="fas fa-forward"></i></a>
     </div>
     <div className="progress">
     <div className="bar">
       <div></div>
     </div>
     </div>
    </div>
  );
}
}
export default Player;