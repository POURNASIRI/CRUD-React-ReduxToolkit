import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddNewUser from "./pages/AddNewUser"


function App() {
  

  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center my-4 font-bold text-2xl">CRUD App With Redux Toolkit</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addUser" element={<AddNewUser/>}/>
      </Routes>
    </div>
  )
}

export default App
