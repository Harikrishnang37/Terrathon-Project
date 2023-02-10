import React from 'react'
import './Login.css'
import axios from "axios";
export default function Login() {
  return (
    <div>
       <title>Login</title>
          <link rel="stylesheet" type="text/css" href="Login.css" />
          <div className="loginbox">
            <img src="avtaar.jpg" className="avtaar" />
            <h1>Login Here</h1>
            <form >
              <p>Username</p>
              <input type="text" name placeholder="Enter Username" />
              <p>Password</p>
              <input type="password" name placeholder="Enter Password" />
              <input type="button" name defaultValue="Login" onClick={test}/>
              <a href="#">Don't Have an Account</a>
            </form>
          </div>
    </div>
  )
}

function test(){

  console.log("hello");

axios.post('/products/add', {username:"user1",userid: 1,productname: "prod1", productid: 1, price: 250, rating: 3,ImgURL: "hello.com"});
}