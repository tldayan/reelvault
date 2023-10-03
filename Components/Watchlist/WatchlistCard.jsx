import React from 'react'
import { Link } from 'react-router-dom'
import defaultPoster from "../../assets/no_image.jpg"


export default function WatchlistCard({eachEntity}) {   
  return (
    <Link to={`${eachEntity.showId ? `../tvshows/${eachEntity.showId}` : `../${eachEntity.movieId}`}`} key={eachEntity.id} className='watchlistCard'>
      <img className='watchlist_poster' src={eachEntity.entityPoster !== null ? `https://image.tmdb.org/t/p/original${eachEntity.entityPoster}` : defaultPoster} alt="" />
      <div className='watchlist_metrics'>
        <p className='watchlist_entity_title'>{eachEntity.entityName}</p>
        <p className='entity_date'>{eachEntity.entityDate}</p>
        <p className='entity_type'>{eachEntity.showId ? "Show" : "Movie"}</p>
        <p className='entity_overview'>{eachEntity.entityOverview}</p>
      </div>
      
    </Link>
  )
}
