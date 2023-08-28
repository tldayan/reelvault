import { createSlice } from "@reduxjs/toolkit";


const MovieNameSlice = createSlice({
    name : "MovieName",
    initialState : {movieName : ""},
    reducers : {
        setMovieName(state,action) {
            state.movieName = action.payload
        }
    }
})

export const MovieNameActions = MovieNameSlice.actions 

export default MovieNameSlice