import React, { useEffect, useState } from "react";
import { getGenreMovies } from "../APIs/Api.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { GenreMovieTypeContainer } from "./GenreMovies.styles.js";

const genreId = 28;

export default function ActionMovies() {
  const [actionMovies, setActionMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("actionMovies")) {
      setActionMovies(JSON.parse(localStorage.getItem("actionMovies")));
    } else {
      const fetchActionMovies = async () => {
        const [data1, data2] = await Promise.all([
          getGenreMovies(1, genreId),
          getGenreMovies(2, genreId),
        ]);

        if (data1.error) {
          console.log(data1.message);
        } else {
          setActionMovies([...data1, ...data2]);
          localStorage.setItem(
            "actionMovies",
            JSON.stringify([...data1, ...data2])
          );
        }
      };

      fetchActionMovies();
    }
  }, []);

  return (
    <GenreMovieTypeContainer media={900}>
      <h2 className="category_titles">Action Movies</h2>
      <div className="movielist_container">
        {!actionMovies.length ? (
          <div className="load_animation"></div>
        ) : (
          actionMovies.map((eachMovie) => (
            <MovieCard key={eachMovie.id} eachMovie={eachMovie} />
          ))
        )}
      </div>
    </GenreMovieTypeContainer>
  );
}
