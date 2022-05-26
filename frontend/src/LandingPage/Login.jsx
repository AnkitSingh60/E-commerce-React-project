import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = localStorage.getItem('user')
  

  const navigate = useNavigate();
  const submitHandler = async(e) => {
    e.preventDefault()


    let result = await fetch("/users/login",{
      method: "POST",
      body: JSON.stringify({ email, password}),
      headers: {
        "Content-type": "application/json",
      }
    });
    result = await result.json()
    console.log('result:', result)
    if( result.message ==="Invalid Email or Password" ){
      alert("Email or Password is invalid! Press CLEAR to Login again")
     
      
    }else{
      alert("Logged in successfully")
      navigate("/products")
      
    }
    localStorage.setItem("user", JSON.stringify(result))
  }
  
  
  return (
    <>
      <Navbar />
      <div className="loginForm mt70 flx">
        <form onSubmit={submitHandler}>
        <input
          className="inputBox "
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputBox"
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="btn12" variant="primary" type="submit">
          Submit
        </Button>
        </form>
      </div>
   <hr />
   <div className="flx mt70">
        <h5>New User ?...</h5>
        <Link to="/register">
          <Button variant="primary" type="button">
            Register
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Login;
