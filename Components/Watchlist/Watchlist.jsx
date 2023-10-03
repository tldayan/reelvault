import React, { useEffect, useState } from 'react'
import { StyledWatchlistContainer } from './Watchlist.style'
import { useSelector } from 'react-redux'
import WatchlistCard from './WatchlistCard'
import { Link } from 'react-router-dom'
import sadFace from "../../assets/sad_face.png"

export default function Watchlist() {
  const [watchlistEntities,setWatchlistEntities] = useState([])
  const showEntities = useSelector((state) => state.showsWatchlist)
  const movieEntities = useSelector((state) => state.moviesWatchlist)
  
  useEffect(() => {
  setWatchlistEntities([...showEntities,...movieEntities])
  },[])
  
  return (
    <StyledWatchlistContainer>
        <h3>Watchlist</h3>
        <div className='watchlist'>
        {watchlistEntities.length ? watchlistEntities.map(eachEntity => {
          const key = eachEntity.showId || eachEntity.movieId;
          return <WatchlistCard key={key} eachEntity={eachEntity} />;
        }) : <div className="empty_watchlist">
              <img className='watchlist_empty_icon' src={sadFace} alt="" />
              <p className='watchlist_notice'>Your watchlist is currently empty.</p>
              <Link to="/" className='return_home_btn'>Browse</Link>
            </div>}
        </div>
    </StyledWatchlistContainer>
    
  )
}
