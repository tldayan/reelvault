import React from 'react'
import { StyledServersContainer } from './ServerContainer.styles'
import { useDispatch, useSelector } from 'react-redux'
import { EpisodeLinkActions } from '../store/EpisodeLinkSlice'

export default function ServersContainer({selectedEpisode,selectedSeason,showId,movieId,movieIframe,setMovieIframe}) {

  let iframeLink = undefined
  const dispatch = useDispatch()
  let server = undefined

  const checkServer = (iframe) => {
    return iframe.includes("to") ? "vidsrc.to" : iframe.includes("xyz") ? "vidsrc.xyz" : "2embed"
  }

  if(showId) {
    iframeLink = useSelector((state) => state.EpisodeLink.episodeLink);
    server = checkServer(iframeLink)
  } else {
    server = checkServer(movieIframe)
  }
  

  const setSource = (iframeLink) => {
    if(showId) {
      dispatch(EpisodeLinkActions.setEpisodeLink(iframeLink))
    } else {
      setMovieIframe(iframeLink)
    }
    
  }

 


  return (
    <StyledServersContainer>
        <div className="server_buttons_container">
          <button className={server === "vidsrc.xyz" ? "active" : ""} onClick={() => setSource(showId ? `https://vidsrc.xyz/embed/tv/${showId}/${selectedSeason}/${selectedEpisode}` : `https://vidsrc.xyz/embed/movie?tmdb=${movieId}`)}>Server 1</button>
          <button className={server === "vidsrc.to" ? "active" : ""} onClick={() => setSource(showId ? `https://vidsrc.to/embed/tv/${showId}/${selectedSeason}/${selectedEpisode}` : `https://vidsrc.to/embed/movie/${movieId}`)}>Server 2</button>
          <button className={server === "2embed" ? "active" : ""} onClick={() => setSource(showId ? `https://www.2embed.cc/embedtv/${showId}&s=${selectedSeason}&e=${selectedEpisode}` : `https://www.2embed.cc/embed/${movieId}` )}>Server 3</button>
        </div>
      </StyledServersContainer>
  )
}
