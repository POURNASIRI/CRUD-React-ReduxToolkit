import {configureStore} from '@reduxjs/toolkit'
import userslice from './user/userslice'

const Store = configureStore({
    reducer:{
        user:userslice
    }
})

export default Store