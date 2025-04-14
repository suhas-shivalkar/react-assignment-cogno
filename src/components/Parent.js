import React, { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import Child from "./Child"
const Parent = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        )

        setUsers(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    
      <div className="user-list-container">
        <h2>User List</h2>
        {isLoading ? (
          <p>Loading users...</p>
        ) : (
          users.map((user) => <Child key={user.id} value={user} />)
        )}
      </div>
  )
}

export default Parent
