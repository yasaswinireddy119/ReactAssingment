import {BrowserRouter, Routes , Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import ProtectRoute from "./ProtectRoute";
function App(){
    return(
        <BrowserRouter>
       

        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Routes>
            <Route path="/" element={<Home/>}/>
           
            <Route path="login" element={<Login/>}/>
            {/* Protected Router */}
             <Route path="dashboard" element={
                <ProtectRoute>
                    <Dashboard/>
                </ProtectRoute>
             }/>
        </Routes>
        
        </BrowserRouter>
    )

}
export default App;