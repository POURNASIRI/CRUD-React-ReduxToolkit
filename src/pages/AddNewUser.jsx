import React, { useState } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../feature/user/userslice'


function AddNewUser() {

    const dispatch = useDispatch()
    const[value,setValue] = useState({
        name:"",
        email:""
    })
    const navigate = useNavigate()

    const handleAddUser = ()=>{
        setValue({name:" ", email:" "})
        dispatch(addUser({
            id:Math.floor(Math.random() * 1000),
            name:value.name,
            email:value.email
        }))
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
        <Button onClick={handleAddUser}>
            Submit
        </Button>
    </div>
  )
}

export default AddNewUser