import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { ScrollRestoration } from 'react-router-dom';

export default function MoviePlayer() {
  const params = useParams();
  const movieId = params.id;

  return (
    <>
      <div className="movie_player_container">
        {!movieId ? <div className="load_animation"></div> : <iframe
          className="movie_player"
          src={`https://www.2embed.cc/embed/${movieId}`}
          allowFullScreen
        ></iframe>}
        
      </div>
      <MovieDetails
      movieId={movieId}
      />
      <ScrollRestoration top={true} />
    </>
  );
}
