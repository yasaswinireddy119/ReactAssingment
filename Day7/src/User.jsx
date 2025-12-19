import {Link, useParams} from "react-router-dom"
function User(){
    const {id}=useParams()
    return(
    <>
        <nav>
            <li>
                <Link to="user">User 1</Link>
                 <Link to="user">User 2</Link>
                  <Link to="user">User 3</Link>
            </li>
        </nav>
        <h2>Welcome to User dashboard</h2>
        
        
    </>

    )
}
export default User;