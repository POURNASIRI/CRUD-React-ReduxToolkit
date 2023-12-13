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
        },
        deleteUser(state,action){
            const selectUser = state.user.find(user=>user.id === Number(action.payload))
           if(selectUser){
            state.user = state.user.filter(user=>user.id !== Number(action.payload))
           }
        }
        }
        
})

export default userslice.reducer

export const {addUser,editUser,deleteUser} = userslice.actions