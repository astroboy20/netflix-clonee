import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     user:null
// }
export const userSlice = createSlice({
    //the name of the user state is 'user
    name: 'user',
    //initialise the state, for default the user is set to null
    initialState:{
        user:null,
    },
    //the reducer holds the login and logout state

    reducers:{
        //the login and logout are action and we are going to dispath it
        login:(state,action) =>{
            state.user = action.payload
        },
        logout:(state)=>{
            state.user = null
        }
    }
})
//this gives us access to the reducers in the userSlice
export const {login,logout} = userSlice.actions

//to have access in the userSlicer we have selector

export const selectUser = (state) => state.user.user

export default userSlice.reducer