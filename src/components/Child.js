import React, { useContext, useEffect, useState } from "react"
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./UserProvier";
const Child = ({value:user}) => {

const [image,setImage]=useState(null)
const {setUser}=useContext(UserContext)
const navigate=useNavigate()

  const handleImageChange=(e)=>{

    const img=e.target.files[0]
    const url=URL.createObjectURL(img)
    setImage(url)

  }


  return (
    <div className="user">
      <h2>{user.name}</h2>
      <button onClick={()=>{setUser(user); navigate(`/user-details/${user.id}`)}}>Details</button>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {image && <img src={image} alt="uploaded" className="user-image" />}
    </div>
  );
  
}

export default Child;
