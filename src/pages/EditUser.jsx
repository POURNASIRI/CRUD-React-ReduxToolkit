import React, { useState } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../feature/user/userslice'


function EditUser() {

    const {user} = useSelector(state=>state.user)
    const {id} = useParams()
    const dispatch = useDispatch()

    const selectedUser = user?.find(item=>item.id === Number(id))
    const {name,email} = selectedUser
    const[value,setValue] = useState({
        name,
        email
    })

    const navigate = useNavigate()

    const handleEditUser = ()=>{
        setValue({name:" ", email:" "})
        dispatch(editUser({
            id:id,
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
        <Button onClick={handleEditUser}>
            Update
        </Button>
    </div>
  )
}

export default EditUser