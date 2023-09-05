

import {createSlice} from "@reduxjs/toolkit"

const EpisodeLinkSlice = createSlice({
    name : "EpisodeLink",
    initialState : {episodeLink : ""},
    reducers : {
        setEpisodeLink(state,action) {
            state.episodeLink  = action.payload
        }
    }
})

export const EpisodeLinkActions = EpisodeLinkSlice.actions

export default EpisodeLinkSlice