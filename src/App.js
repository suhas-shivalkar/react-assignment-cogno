import logo from "./logo.svg"
import "./App.css"
import Parent, { UserContext } from "./components/Parent"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserDetails from "./pages/UserDetails"
import UserProvier from "./components/UserProvier"

function App() {
  return (
    <UserProvier>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />}></Route>
          <Route path="/user-details/:id" element={<UserDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvier>
  )
}

export default App
