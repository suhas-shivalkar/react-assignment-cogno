import React, { useContext } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../components/UserProvier"

function UserDetails() {
  const { id } = useParams()
  const {user}=useContext(UserContext)
  const navigate=useNavigate()
  console.log(user.address);
  
  return <div>
    <h1>UserDetails of {user.name}</h1>
    <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <h3>Adress : </h3>
      
         <div>
            <p>Street : {user.address.street}</p>
            <p>City : {user.address.city}</p>
            <p>Zipcode : {user.address.zipcode}</p>
        </div>
        
      <h3>Company  : </h3>
       <div>
            <p>Company Name : {user.company.name}</p>
            
        </div>

    <button onClick={()=>navigate('/')} >Back</button>

  </div>
}

export default UserDetails
