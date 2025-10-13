import { createSlice } from '@reduxjs/toolkit'
import {clearAllUsers} from '../actions'

const userSlice=createSlice({
    name:'User',
    initialState:[],
    reducers:{
        AddUser(state,action) {
            // console.log("action.payload",action.payload)
            state.push(action.payload); 
        }, 
        RemoveUser(state,action) {
            state.splice(action.payload,1);
        },
        // ClearAllUsers(state,action) {
        //     // state.splice(0,state.length)
        //     return [];
        // },
    },
    extraReducers(builder){
        builder.addCase(clearAllUsers,()=>{
            return [];
        })

    }
});

export default userSlice.reducer;
export const {AddUser,RemoveUser,ClearAllUsers} = userSlice.actions;
