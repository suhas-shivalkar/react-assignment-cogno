import React, { createContext, useState } from "react"

export const UserContext=createContext()

function UserProvier({children}) {

    const [user,setUser]=useState(null)

  return <UserContext.Provider value={{user,setUser}}>
    {children}
  </UserContext.Provider>
}

export default UserProvier
