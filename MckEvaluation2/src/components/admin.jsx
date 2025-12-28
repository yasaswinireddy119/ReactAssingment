import { useState } from "react";

function Admin(){
    const[fleet,setFleet]=useState({
        registration_No:"",
        category:"",
        driver_name:"",
        availability:""
    })
    const[fleetData,setFleetData]=useState([])
    const handleChange = (e)=>{
        setFleet({
            ...fleet,
            [e.target.name]:e.target.value
    })
    }
    const handleAddFleet=(e)=>{
        e.preventDefault();
        setFleetData
    }
    return(
        <h1>Admin Page</h1>

    )
}
export default Admin;
