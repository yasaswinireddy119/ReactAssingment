import {useNavigate} from "react-router-dom"
function Login(){
    const Navigate=useNavigate();
    const loginUser=()=>{
        localStorage.setItem("login","true")
    }

return(

        <>
        
        <h2>Welcome to Login Page</h2>
        <button onClick={loginUser}></button>
        </>
)

}
export default Login;