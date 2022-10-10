import Google from './Google.svg';
import "./App.css"
import Search from './search.png';
import { Component, useLayoutEffect } from 'react';

class main extends Component{
  render(){
    return(
      <center>
    <div>
      <img  src={Google} alt="Logo" style={{width: 300, height: 150,margin:30} }/>
    </div>
    <input class='bar' style={{ height:45,border:0, width:500, fontSize:16,outlineStyle:"solid", outlineColor:"#dcdcdc"}}/>
     <img class="search" src={Search}
      style={{height:20,position:'relative',top:5,right:490}}
    />
    <div class="buttons">
      <button class="button" type="button">Google Search</button>
      <button class="button" type="button">I'm Feeling Lucky</button>
     </div>

    </center>
    
    );
  }
}

export default main;