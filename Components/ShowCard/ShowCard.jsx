import React from 'react';
import defaultPoster from "../../assets/no_image.jpg";
import { StyledShowLink } from './ShowCard.styles';
import { useDispatch } from 'react-redux';
import { ShowNameActions } from '../store/ShowNameSlice';
import EntityCardComponent from '../HOC/EntityCardComponent';

const ShowCard = ({ eachShow, imageLoaded, posterLoaded, handlePosterLoaded}) => {

  const dispatch = useDispatch();

  function handleShowName(showName) {
    dispatch(ShowNameActions.setShowName(showName));
  }


  return (
    <StyledShowLink to={`tvshows/${eachShow.id}/1/1`} onClick={() => handleShowName(eachShow.name)} key={eachShow.id}>
      <div className="movie_poster_container">
      {posterLoaded && (
        <>
          <div className="movie_language">{eachShow.original_language.toUpperCase()}</div>
          <div className="movie_date">{eachShow.first_air_date?.slice(0, 4)}</div>
          <div className={"movie_vote " + (eachShow.vote_average > 7 ? "green" : eachShow.vote_average < 5 ? "red" : "orange")}>
            {eachShow.vote_average.toFixed(1)}
          </div>
        </>
      )}
        {imageLoaded ? (
          <img
            className="movie_poster"
            src={eachShow.poster_path === null ? defaultPoster : `https://image.tmdb.org/t/p/w500${eachShow.poster_path}`}
            alt="imagePoster"
            loading='lazy'
            onLoad={handlePosterLoaded}
          />
        ) : (
          <div className="movie_poster_skeleton" style={{ width: '154px', height: '231px' }} />
        )}
      </div>
      {posterLoaded && <h3 className='movie_name'>{eachShow.name.length > 20 ? `${eachShow.name.slice(0, 20)}...` : eachShow.name}</h3>}
    </StyledShowLink>
  );
};

export default React.memo(EntityCardComponent(ShowCard))
