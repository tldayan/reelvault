import React, { useEffect, useState } from "react";
import Recommended from "../Recommended/Recommended";
import { MovieDetailsContainer } from "./Movie-ShowDetails.styles";

export default function MovieDetails({ movieId }) {
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState([]);
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);

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

  return (
    <>
      <MovieDetailsContainer media={900}>
        <img
          className="movie_details_poster"
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          alt=""
        />
        {Object.keys(movieData).length !== 0 ? <div className="movie_info_container">
          <h1 className="movie_title">{movieData.original_title}</h1>
          <p className="movie_overview">{movieData.overview}</p>
          <div className="movie_stats_container">
            <div className="first_stats_container">
              <p>Released: {movieData.release_date}</p>
              {genres.length > 0 && (
                <p>
                  Genre: {genres.map((eachgenre) => eachgenre.name).join(", ")}
                </p>
              )}
              <p>
                Language:{" "}
                {movieData.original_language &&
                  movieData.original_language.toUpperCase()}
              </p>
            </div>
            <div className="second_stats_container">
              <p>Duration: {movieData.runtime} min</p>
              {productionCountries.length > 0 && (
                <p>Country: {productionCountries[0].name}</p>
              )}
              {productionCompanies.length > 0 && (
                <p>
                  Production:{" "}
                  {productionCompanies
                    .map((eachCompany) => eachCompany.name)
                    .join(", ")}
                </p>
              )}
            </div>
          </div>
        </div> : <div className="load_animation"></div>}
      </MovieDetailsContainer>

      <Recommended movieId={movieId} />
    </>
  );
}
