import { Route,Routes } from "react-router-dom";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoute/> <Todo/> <ProtectedRoute>}/>
        <Route path="todo" element={<Todo/>}/>

     
      </Routes>
      </BrowserRouter>

    </div>
  )

}
export default App;