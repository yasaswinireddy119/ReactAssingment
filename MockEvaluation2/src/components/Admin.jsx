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
        setFleetData([...fleetData,fleet]);
        setFleet({
            registration_No:"",
            category:"",
            driver_name:"",
            availability:""

        })
    }
    return(
        <div>
        
        <h3>Add Fleet</h3>
        <form onSubmit={handleAddFleet}>
            <input 
            type="text"
            name="registration_No"
            placeholder="Vehicle reg no"
            value={fleet.registration_No}
            onChange={handleChange}/>

            <br />
            <br />
            <select name="category"
            value={fleet.category}
            onChange={handleChange}/>
            <br />
            <br />
            <select name="category"
            value={fleet.category}
            onChange={handleChange}>
                <option value="">Select Category</option>
                  <option value="Auto">Auto</option>
                    <option value="Car">Car</option>
                      <option value="Truck">Truck</option>
                      <option value="Bus">Bus</option>
            </select>
            <br />
            <br />
            <input
            type="text"
            name="driver_name"
            placeholder="Driver Name"
            value={fleet.driver_name}
            onChange={handleChange}/>

            <br /><br />
            <select 
            name="availabilty"
            value={fleet.availability}
            onChange={fleet.handleChange}>
                <option value="">Availabiltity</option>
                  <option value="Availabile">Availabile</option>
                    <option value="Unavailabile">Unavailabile</option>
            </select>
            <button type="submit">Add Fleet</button>
        </form>
        </div>

        

    )
}
export default Admin;
