import React, { useState } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'


function EditUser() {
    const[value,setValue] = useState({
        name:"",
        email:""
    })
    const navigate = useNavigate()

    const handleEditUser = ()=>{
        setValue({name:" ", email:" "})
        console.log(value)
        navigate("/")
    }
  return (
    <div>
        <TextField
        lable="Name"
        inputProps={{type:"text",placeholder:"userName"}}
        value={value.name}
        onChange={(e)=>setValue({...value,name:e.target.value})}
        />
        <TextField
        lable="Email"
        inputProps={{type:"email",placeholder:"email Address"}}
        value={value.email}
        onChange={(e)=>setValue({...value,email:e.target.value})}
        />
        <Button onClick={handleEditUser}>
            Update
        </Button>
    </div>
  )
}

export default EditUser