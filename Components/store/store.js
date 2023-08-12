import {configureStore} from "@reduxjs/toolkit"
import EpisodeLinkSlice from "./EpisodeLinkSlice"


const store = configureStore({
    reducer : {
        EpisodeLink : EpisodeLinkSlice.reducer
    }
})

export default store