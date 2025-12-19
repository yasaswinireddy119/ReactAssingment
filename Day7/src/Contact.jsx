import {Link} from "react-router-dom"
function Contact(){
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to ="/" element={<Home/>}/>
                    <Link to ="about" element={<About/>}/>
                    <Link to="contact" element={<Contact/>}/>
                </li>
            </ul>
        </nav>
        
        </>
    )

}
export default Contact;