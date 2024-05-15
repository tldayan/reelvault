import React from 'react'
import {Link} from "react-router-dom"
import starIcon from "../../assets/star-solid.svg"
import defaultPoster from "../../assets/no_image.jpg"

export default function SearchResultCard({eachResult}) {
  return (
    <Link to={`${eachResult.original_name ? `tvshows/${eachResult.id}` : `movies/${eachResult.id}`}`} key={eachResult.id} className='result'>
        <img className='search_results_movie_poster' src={eachResult.poster_path !== null ? `https://image.tmdb.org/t/p/w154${eachResult.poster_path}` : defaultPoster} alt="entity_poster" />
        <div className='movie_result_info_container'>
          <p className='search_results_movie_title'>{eachResult.original_title || eachResult.original_name}</p>
          <p className='release_date'>{eachResult.release_date || eachResult.first_air_date}</p>
          <div className='movie_metrics_container'>
              <p>{eachResult.original_name ? "Show" : "Movie"}</p>&#8226;
              <p>{eachResult.original_language.charAt(0).toUpperCase() + eachResult.original_language.slice(1)}
              </p>&#8226;
              <img className="star" src={starIcon} alt="" />
              <p>{eachResult.vote_average.toFixed(2)}</p>
          </div>
        </div>
    </Link>
  )
}
