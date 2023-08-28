import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../Movie-ShowDetails/MovieDetails";
import { ScrollRestoration, Link } from "react-router-dom";
import { MoviePlayerContainer } from "./MoviePlayer.styles";
import { useSelector } from "react-redux";


export default function MoviePlayer() {
  const params = useParams();
  const movieId = params.id;
  const storedMovieName = (useSelector((state) => state.MovieName.movieName) || JSON.parse(localStorage.getItem("movieName")))
  
  
  const [movieName, setMovieName] = useState(storedMovieName)
  

  useEffect(() => {
    setMovieName(storedMovieName)
    localStorage.setItem("movieName", JSON.stringify(storedMovieName))
  },[storedMovieName])

  return (
    <>
      <div className="back_button_container">
      <Link to="/" className="back_button">
        &#10094; Back to Home
      </Link>
    </div>
      
      <MoviePlayerContainer>
      <p className="watching_movie_notice">Watching: {movieName}</p>
        {!movieId ? (
          <div className="load_animation"></div>
        ) : (
          <iframe
            className="movie_player"
            src={`https://vidsrc.me/embed/${movieId}`}
            allowFullScreen
          ></iframe>
        )}
      </MoviePlayerContainer>
      <MovieDetails movieId={movieId} />
      <ScrollRestoration top={true} />
    </>
  );
}
