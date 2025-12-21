import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate()

    const handleLogin=()=>{
        if(email==="admin@gmail.com" && password==="admin"){
            localStorage.setItem("isLoggedIn",true);
            navigate("/todo")
        }
        else{
            SetError("Invalid email or passwors")
        }

    }
  return (
    <div>
      
        <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter the password" value={password} onChange={={(e)=>setPassword(e.target.value)}}/>
        <button onClick={handleLogin}>Login</button>
        {
            error && <p style={color:"red"}></p>
        }


      
    </div>
  )
}

export default Login
