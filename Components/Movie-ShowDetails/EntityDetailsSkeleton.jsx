import React from 'react'
import { StyledEntityDetailsContainer } from './EnitityDetailsSkeleton.module'

export default function EntityDetailsSkeleton() {
  return (
    <StyledEntityDetailsContainer media={900}>
    <div className="movie_poster_skeleton" /* style={{ width: '170px', height: '231px' }} */ />
    <div className="movie_info_container">
      <h1 className="movie_title skeleton"></h1>
      <p className="movie_overview skeleton"></p>
      
      <div className="movie_stats_container">
        <div className="first_stats_container">
          <p className="entity_language skeleton"></p>
          <p className="entity_released skeleton"></p>
          <p className="entity_genre skeleton"></p>
        </div>
        <div className="second_stats_container">
          <p className="entity_duration skeleton"></p>
          <p className="entity_country skeleton"></p>
          <p className="entity_production skeleton"></p>
        </div>
      </div>
      <div className="buttons_container">
        <button className="share_btn skeleton" />
        <button className="watchlist_btn skeleton" />
      </div>
    </div>
    <div className='trailer skeleton'></div>
  </StyledEntityDetailsContainer>
  )
}
