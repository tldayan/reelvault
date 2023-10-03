import { createSlice } from "@reduxjs/toolkit";


const moviesWatchlistSlice = createSlice({
    name : "moviesWatchlist",
    initialState : [],
    reducers : {

        addToWatchlist(state,action) {
            return [...state, {
                movieId : action.payload.id,
                entityName : action.payload.original_title,
                entityPoster : action.payload.poster_path,
                entityDate : action.payload.release_date,
                entityLanguage : action.payload.original_language,
                entityOverview : action.payload.overview
            }]
        },

        removeFromWatchlist(state,action) {
            return state.filter(eachEntity => eachEntity.movieId != action.payload)
        }
    }
})

export const moviesWatchlistAction = moviesWatchlistSlice.actions

export default moviesWatchlistSlice