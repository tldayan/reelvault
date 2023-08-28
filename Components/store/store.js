import {configureStore} from "@reduxjs/toolkit"
import EpisodeLinkSlice from "./EpisodeLinkSlice"
import ShowNameSlice from "./ShowNameSlice"
import MovieNameSlice from "./MovieNameSlice"


const store = configureStore({
    reducer : {
        EpisodeLink : EpisodeLinkSlice.reducer,
        ShowName : ShowNameSlice.reducer,
        MovieName : MovieNameSlice.reducer
    }
})

export default store