import { createSlice } from "@reduxjs/toolkit";


const ShowNameSlice  = createSlice({
    name : "ShowName",
    initialState : {showName : ""},
    reducers : {
        setShowName(state,action) {
         state.showName = action.payload
        }
    }
})

export const ShowNameActions = ShowNameSlice.actions

export default ShowNameSlice