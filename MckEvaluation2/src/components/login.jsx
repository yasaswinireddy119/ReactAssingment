import { useEffect, useState } from "react";

function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[isAuth,setIsAuth]=useState(false)
    const[message,setMessage]=useState("")
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
)    return(
































    )
}
export default Login;