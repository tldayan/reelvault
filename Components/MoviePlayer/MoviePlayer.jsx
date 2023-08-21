import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../Movie-ShowDetails/MovieDetails";
import { ScrollRestoration, Link } from "react-router-dom";
import { MoviePlayerContainer } from "./MoviePlayer.styles";

export default function MoviePlayer() {
  const params = useParams();
  const movieId = params.id;

  return (
    <>
      <Link to="/" className="back_button">
        &#10094; Back to Home
      </Link>
      <MoviePlayerContainer>
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
