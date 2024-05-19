import React from 'react'
import { StyledServersContainer } from './ServerContainer.styles'
import { useDispatch, useSelector } from 'react-redux'
import { EpisodeLinkActions } from '../store/EpisodeLinkSlice'

export default function ServersContainer({selectedEpisode,selectedSeason,showId}) {

  const dispatch = useDispatch()
  const iframeLink = useSelector((state) => state.EpisodeLink.episodeLink);
  const server = iframeLink.includes("to") ? "vidsrc.to" : iframeLink.includes("xyz") ? "vidsrc.xyz" : "2embed"

  const setShowEpisode = (iframeLink) => {
    dispatch(EpisodeLinkActions.setEpisodeLink(iframeLink))
  }


  return (
    <StyledServersContainer>
        <div className="server_buttons_container">
          <button className={server === "vidsrc.xyz" ? "active" : ""} onClick={() => setShowEpisode(`https://vidsrc.xyz/embed/tv/${showId}/${selectedSeason}/${selectedEpisode}`)}>Server 1</button>
          <button className={server === "vidsrc.to" ? "active" : ""} onClick={() => setShowEpisode(`https://vidsrc.to/embed/tv/${showId}/${selectedSeason}/${selectedEpisode}`)}>Server 2</button>
          <button className={server === "2embed" ? "active" : ""} onClick={() => setShowEpisode(`https://www.2embed.cc/embedtv/${showId}&s=${selectedSeason}&e=${selectedEpisode}`)}>Server 3</button>
        </div>
      </StyledServersContainer>
  )
}
