import React from 'react'
import { Link } from 'react-router-dom';
import defaultPoster from "../assets/no_image.jpg"

export default function MovieCard({eachMovie}) {
  return (
    <Link to={`/${eachMovie.id}`} className="movie_container" key={eachMovie.id}>
              <div className="movie_poster_container">
                <div className="movie_language">{eachMovie.original_language.toUpperCase()}</div>
                <div className="movie_date">{eachMovie.release_date.slice(0,4)}</div>
                <div className={"movie_vote " + (eachMovie.vote_average > 7 ? "green" : eachMovie.vote_average < 5 ? "red" : "orange")}>{eachMovie.vote_average}</div>
                <img className="movie_poster" src={eachMovie.poster_path === null ? defaultPoster : `https://image.tmdb.org/t/p/w154${eachMovie.poster_path}`} alt="" />
              </div>
              <h3 className='movie_name'>{eachMovie.title.length > 20 ? `${eachMovie.title.slice(0, 20)}...` : eachMovie.title}</h3>
    </Link>
  )
}
