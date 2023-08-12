import React, { useEffect, useState } from "react";
import { getGenreMovies } from "../APIs/Api.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { GenreMovieTypeContainer } from "./GenreMovies.styles.js";
const genreId = 10749;

export default function RomanceMovies() {
  const [romanceMovies, setRomanceMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("romanceMovies")) {
      setRomanceMovies(JSON.parse(localStorage.getItem("romanceMovies")));
    } else {
      const fetchRomanceMovies = async () => {
        const [data1, data2] = await Promise.all([
          getGenreMovies(1, genreId),
          getGenreMovies(2, genreId),
        ]);

        if (data1.error) {
          console.log(data1.message);
        } else {
          setRomanceMovies([...data1, ...data2]);
          localStorage.setItem(
            "romanceMovies",
            JSON.stringify([...data1, ...data2])
          );
        }
      };

      fetchRomanceMovies();
    }
  }, []);

  return (
    <GenreMovieTypeContainer media={900}>
      <h2 className="category_titles">Romance Movies</h2>
      <div className="movielist_container">
        {!romanceMovies.length ? (
          <div className="load_animation"></div>
        ) : (
          romanceMovies.map((eachMovie) => (
            <MovieCard key={eachMovie.id} eachMovie={eachMovie} />
          ))
        )}
      </div>
    </GenreMovieTypeContainer>
  );
}
