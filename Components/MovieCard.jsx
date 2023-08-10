import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import defaultPoster from "../assets/no_image.jpg";

export default function MovieCard({ eachMovie }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <Link to={`/${eachMovie.id}`} className="movie_container" key={eachMovie.id}>
      <div className="movie_poster_container">
        <div className="movie_language">{eachMovie.original_language.toUpperCase()}</div>
        {imageLoaded && <div className="movie_date">{eachMovie.release_date.slice(0, 4)}</div>}
        {imageLoaded && <div className={"movie_vote " + (eachMovie.vote_average > 7 ? "green" : eachMovie.vote_average < 5 ? "red" : "orange")}>
          {eachMovie.vote_average.toFixed(1)}
        </div>}
        {imageLoaded ? (
          <img
            className="movie_poster"
            src={eachMovie.poster_path === null ? defaultPoster : `https://image.tmdb.org/t/p/w154${eachMovie.poster_path}`}
            alt="imagePoster"
          />
        ) : (
          <div className="movie_poster_skeleton" style={{ width: '154px', height: '231px' }} />
        )}
      </div>
      <h3 className='movie_name'>{eachMovie.title.length > 20 ? `${eachMovie.title.slice(0, 20)}...` : eachMovie.title}</h3>
    </Link>
  );
}
