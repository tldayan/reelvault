import React, { useState, useEffect } from 'react';
import defaultPoster from "../../assets/no_image.jpg";
import { StyledShowLink } from './ShowCard.styles';

export default function ShowCard({ eachShow }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []); 

  function handlePosterLoaded() {
    setPosterLoaded(true)
  }


  return (
    <StyledShowLink to={`tvshows/${eachShow.id}`} key={eachShow.id}>
      <div className="movie_poster_container">
        <div className="movie_language">{eachShow.original_language.toUpperCase()}</div>
        {posterLoaded && <div className="movie_date">{eachShow.first_air_date.slice(0, 4)}</div>}
        {posterLoaded && <div className={"movie_vote " + (eachShow.vote_average > 7 ? "green" : eachShow.vote_average < 5 ? "red" : "orange")}>
          {eachShow.vote_average.toFixed(1)}
        </div>}
        {imageLoaded ? (
          <img
            className="movie_poster"
            src={eachShow.poster_path === null ? defaultPoster : `https://image.tmdb.org/t/p/original${eachShow.poster_path}`}
            alt="imagePoster"
            onLoad={handlePosterLoaded}
          />
        ) : (
          <div className="movie_poster_skeleton" style={{ width: '154px', height: '231px' }} />
        )}
      </div>
      {posterLoaded && <h3 className='movie_name'>{eachShow.name.length > 20 ? `${eachShow.name.slice(0, 20)}...` : eachShow.name}</h3>}
    </StyledShowLink>
  );
}
