import React from 'react'
import { ExistingShowModalContainer } from './ExistingShowModal.styles'
import { useDispatch } from 'react-redux'
import { EpisodeLinkActions } from '../store/EpisodeLinkSlice'


export default function ExistingShowModal({setSelectedEpisode,setSelectedSeason,existingShow,setRecentlyWatched}) {

    const dispatch = useDispatch()

    const handleResumeEpisode = () => {
        
        dispatch(
            EpisodeLinkActions.setEpisodeLink(`https://2embed.org/series.php?id=${existingShow.showId}/${existingShow.showSeason}/${existingShow.showEpisode}`)
        )
        setRecentlyWatched(false)
        setSelectedEpisode(existingShow.showEpisode)    
        setSelectedSeason(existingShow.showSeason)
    
    }

    const handleNoResumeEpisode = () => {
        
        dispatch(
            EpisodeLinkActions.setEpisodeLink(
              `https://2embed.org/series.php?id=${existingShow.showId}/1-1`
            )
          );

          setRecentlyWatched(false)
    }
    

  return (
    <ExistingShowModalContainer>
        <h2>Resume Show ?</h2>
        <p>Would you like to continue where you left of ?</p>
        <p style={{fontWeight : 'bold'}}>Season {existingShow.showSeason} ~ Episode {existingShow.showEpisode}</p>
        <div className="confirmation_btn_container">
            <button onClick={() => handleResumeEpisode()}>Yes</button>
            <button onClick={() => handleNoResumeEpisode()}>No</button>
        </div>
    </ExistingShowModalContainer>
  )
}
