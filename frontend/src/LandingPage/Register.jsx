// import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const auth = localStorage.getItem("user")

    // useEffect(() => {
      
    // }, [])
    

    const submitHandler = async(e) => {
        e.preventDefault();
        
        let result = await fetch("/users",{
          method: "POST",
          body: JSON.stringify({name, email, password}),
          headers: {
                         "Content-type": "application/json",
                   }
        })
        result = await result.json()
        console.log('result:', result)
        
        localStorage.setItem("user", JSON.stringify(result))

        alert("Signup successfully")
        navigate("/login")
        
      
    }

  
  return (
      <>
      <Navbar/>
      <div className="loginForm mt70 flx">
        <form onSubmit={submitHandler}>
        <input
          className="inputBox "
          type="name"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </form>
      </div>
   <hr />
   
      </>
  )
}

export default Register