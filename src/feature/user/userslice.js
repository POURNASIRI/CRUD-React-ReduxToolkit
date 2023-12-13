import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name:"user",
    initialState:{
        user:[]
    },
    reducers:{
        addUser(state,action){
          const userExist = state.user.find(items=>(
              items.email === action.payload.email
              || items.name === action.payload.name
               
          ))

          if(userExist){
            return;
          }else{
            state.user.push(action.payload)
          }
          
        },
        editUser(state,action){

            const {name,email,id} = action.payload
          const selectUser = state.user.find(user=>user.id === Number(id))

          if(selectUser){
            selectUser.name = name,
            selectUser.email = email
          }
        }
        }
        
})

export default userslice.reducer

export const {addUser,editUser} = userslice.actions