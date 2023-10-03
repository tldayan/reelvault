import {configureStore} from "@reduxjs/toolkit"
import EpisodeLinkSlice from "./EpisodeLinkSlice"
import ShowNameSlice from "./ShowNameSlice"
import MovieNameSlice from "./MovieNameSlice"
import showsWatchlistSlice from "./showsWatchlistSlice"
import moviesWatchlistSlice from "./moviesWatchlistSlice"


const store = configureStore({
    reducer : {
        EpisodeLink : EpisodeLinkSlice.reducer,
        ShowName : ShowNameSlice.reducer,
        MovieName : MovieNameSlice.reducer,
        showsWatchlist : showsWatchlistSlice.reducer,
        moviesWatchlist : moviesWatchlistSlice.reducer
    }
})

export default store