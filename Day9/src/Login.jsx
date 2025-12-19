function Login(){
    const navigate=useNavigate()
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const[error,setError]=useState("")
    const handleLogin=()=>{
        if(username==="admin" && password==="1234"){
            navigate("/home");
            
        }
        else{
            setError("Wrong user or password")

        }
    }

    return(
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Login</h2>
                <input type="text" placeholder="Enter Username" style={styles.input} value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                 <input type="password" placeholder="Enter Password" style={styles.input} value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                 <button style={styles.button} onClick={handleLogin}>Login</button>
                 {error && <p style={styles.error}>{error}</p>}
               

            </div>

        </div>
    )
}

    const styles={
        container:{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"linear-gradient(to right,#74ebd5,#9face6)",

        },

        card:{
            backgroundColor:"#ffff",
            padding:"30px",
            width:"320px",
            borderRadius:"10px",
            textAlign:"center"


        },
        title:{
            marginBottom:"200px"
        },

        input:{
            width:"100%",
            padding:"10px",
            marginBottom:"15px",
            borderRadius:"5px",
            border:"1px solid #efe99bff",

        },
        button:{
            width:"100%",
            padding:"10px",
            backgroundColor:"rgba(163, 157, 157, 0.8)",
            color:"white",
            border:"none",
            borderRadius:"5px",
            cursor:"pointer",

        },
        error:{
            color:"red",
            marginBottom:"10px",

        },
        hint:{
            marginTop:"15px",
            fontsize:"12px",
            color:"#5555"

        }

    }




export default Login;