

import {createSlice} from "@reduxjs/toolkit"

const EpisodeLinkSlice = createSlice({
    name : "EpisodeLink",
    initialState : {episodeLink : ""},
    reducers : {
        setEpisodeLink(state,action) {
            const link = action.payload

            state.episodeLink  = action.payload
        }
    }
})

export const EpisodeLinkActions = EpisodeLinkSlice.actions

export default EpisodeLinkSlice