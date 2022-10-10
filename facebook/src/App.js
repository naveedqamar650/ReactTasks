import { Component } from 'react';
import './App.css'
class main extends Component{
  render(){
    return(
      <div class="content">
        <div class="flex-div">
        <div class="name-content">
          <h1 class="logo">facebook</h1>
          <p>Facebook helps you connect and share with the peaple in your life.</p>
        </div>
        <form>
        <input type="text" placeholder="Email address or phone number" />
        <input type="password" placeholder="Password"/>
        <button class="login">Log In</button>
        <a href="#">Forgot Password ?</a>
        <hr/>
        <button class="create-account">Create New Account</button>
        </form>
      </div>
        </div>
    
       );
  }
}

export default main;