import { createSlice } from "@reduxjs/toolkit";


const showsWatchlistSlice = createSlice({
    name : "showsWatchlist",
    initialState : [],
    reducers : {
        addToWatchlist(state,action) {
            return [...state, {
                showId : action.payload.id,
                entityName : action.payload.name,
                entityPoster : action.payload.poster_path,
                entityDate : action.payload.first_air_date,
                entityLanguage : action.payload.original_language,
                entityOverview : action.payload.overview
            }]
        },

        removeFromWatchlist(state,action) {
            return state.filter(eachEntity => eachEntity.showId != action.payload)
        }
    }  
})

export const showsWatchlistActions = showsWatchlistSlice.actions

export default showsWatchlistSlice