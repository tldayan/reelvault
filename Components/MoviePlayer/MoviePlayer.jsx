import {React, useEffect, useState,useRef } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../Movie-ShowDetails/MovieDetails";
import { ScrollRestoration, Link } from "react-router-dom";
import { MoviePlayerContainer } from "./MoviePlayer.styles";
import { getTrailer } from "../APIs/Api";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";


export default function MoviePlayer() {
  const params = useParams();
  const movieId = params.id;

  const movieLoadContainer = useRef(null);
  const IframeElement = useRef(null);
  
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState([]);
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [trailerKey, setTrailerKey] = useState("")



  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    const fetchMovieData = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGM1ZTU5YjRmMGUxMDQ1ODRjMzRlMjRmODZlOWJjMCIsInN1YiI6IjY0NTYzNzFlYzNjODkxMDEwNDE4ZWNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhRGCPIxeuJxggm9kJSFa7zmeFMV3byY4l9KprRAMxo",
          },
        });

        const data = await response.json();

        const movieTrailerKey = await getTrailer(movieId)
        setTrailerKey(`${movieTrailerKey}`)
        setMovieData(data);
        setGenres(data.genres || []);
        setProductionCompanies(data.production_companies || []);
        setProductionCountries(data.production_countries || []);
        
      } catch (error) {
        alert(error.message);
      }

    };

    fetchMovieData();

  }, [movieId]);


  
  function handleIframeLoad() {
    movieLoadContainer.current.style.display = "none"
    IframeElement.current.style.height = "100%"
  }


  return (
    <>
      <div className="back_button_container">
      <Link to="/" className="back_button">
        &#10094; Back to Home
      </Link>
    </div>
      
      <MoviePlayerContainer>
      <p className="watching_movie_notice">Watching: {movieData.original_title ? movieData.original_title : "..."}</p>
  <div ref={movieLoadContainer} className="movie_player_skeleton">
    <LoadingAnimation />
  </div>

  <iframe
    ref={IframeElement}
    className="movie_player"
    src={`https://vidsrc.me/embed/${movieId}`}
    allowFullScreen
    onLoad={handleIframeLoad}
  ></iframe>

      </MoviePlayerContainer>
      <MovieDetails trailerKey={trailerKey} movieData={movieData} movieId={movieId} genres={genres} productionCompanies={productionCompanies} productionCountries={productionCountries} />
      <ScrollRestoration top={true} />
    </>
  );
}
