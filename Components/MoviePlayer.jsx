import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { ScrollRestoration, Link } from 'react-router-dom';

export default function MoviePlayer() {
  const params = useParams();
  const movieId = params.id;


  return (
    <>
      <Link to="/" className='back_button'>&#10094; Back to Home</Link>
      <div className="movie_player_container">
        {!movieId ? <div className="load_animation"></div> : <iframe
          className="movie_player"
          src={`https://vidsrc.me/embed/movie?tmdb=${movieId}`}
          allowFullScreen
        ></iframe>}
        
      </div>
      <MovieDetails movieId={movieId}/>
      <ScrollRestoration top={true} />
    </>
  );
}
