import React, {useState} from 'react';
import './Login.css'
import axios from "../axios.js";
import { Navigate, useNavigate } from "react-router-dom";
//import useNavigate from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate()
    const [username,setUser]=useState("")
    const [password,setPassword]=useState("")


    async function handleSubmit(event)
    {   
        console.log("submit clicked")
        event.preventDefault()

        console.log("username:"  +username);
        console.log("password:"  +password);
        if(username && password)
        {   
             const user_data={name:username,password:password}
             const pdata= await axios.get("http://localhost:8000/users/verify");
             const data = pdata.data;

             console.log(data)
             

             if(data===null){
                 alert("alert- no such user")
             }

             var flag = false;
             for (var i in data){
              //console.log("this user: "+ i)
              if(data[i].username == user_data.name && data[i].password == user_data.password){
                //navigate
                console.log("log in successful");
                //<Navigate to = "/Home" replace = {true}/>
                navigate("/");
                flag = true;
              }
             }

             if(flag == false) alert("unsuccessful attempt");
         }
            
        }
    

    function handleUser(event)
    {
        setUser(event.target.value)
       // console.log(event.target.value)
    }

    function handlePassword(event)
    {
        setPassword(event.target.value)
        // console.log(event.target.value)
    }

  return (
    <div>
       <title>Login</title>
          <link rel="stylesheet" type="text/css" href="Login.css" />
          <div className="loginbox">
            <img src="avtaar.jpg" className="avtaar" />
            <h1>Login Here</h1>
            <form onSubmit={ handleSubmit}>
              <p>Username</p>
              <input type="text" name placeholder="Enter Username" value = {username} onChange = {handleUser}/>
              <p>Password</p>
              <input type="password" name placeholder="Enter Password" value = {password} onChange = {handlePassword} />
              <input type="submit" name defaultValue="Login"/>
              <a href="#">Don't Have an Account</a>
            </form>
          </div>
    </div>
  )
}

async function test(){

  console.log("hello");

 axios.post('http://localhost:8000/users/add', {username:"user7" , password: "pwd"});

// const data = await axios.get("http://localhost:8000/users/verify");
// console.log(data);
// console.log("haiii");

}