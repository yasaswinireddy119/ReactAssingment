import React, { useEffect } from 'react'

const Todo = () => {

    const[todo,setTodo]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch("")
        .then((res)=> res.json())
        .then((data)=> setTodo(data.slice(0,10)))
    }.[])
    const handleLogout=()=>{
        localStorage.removeItem("isLoggedIn");
        navigate("/Login")

    }
  return (
    <div>
    <div>
      <h2>Todos</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
    

    <div>
        


    </div>
  )
}

export default Todo
