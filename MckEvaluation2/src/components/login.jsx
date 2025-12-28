import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[isAuth,setIsAuth]=useState(false)
    const[message,setMessage]=useState("")
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        if(email==="admin@gmail.com" && password==="admin1234"){
                setIsAuth(true);

        }
        else{
            setIsAuth(false);
            setMessage("Wrong email or password")
        }
        useEffect(()=>{
            if(isAuth){
                alert(""Login success"")
                navigator("/admin")
            }
        },[isAuth,navigate])
    
    }
    return(
        <div style={{width:"300ox",margin:"100px"}}>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>
                    setEmail(e.target.value)}/>
                    <br>
                    </br>
                    <input 
                    type="password"
                    placeholder="Password"
                    value={{password}}
                    onChange={(e)=>
                        setPassword(e.target.value)}/>

                       
                        <button type="submit">LOGIN</button>
            

                    
                
            </form>

                {message && <p>{message}</p>}
        </div>

    )
}
export default Login;