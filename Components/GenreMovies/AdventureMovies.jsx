import React, { useEffect, useState } from "react";
import { getGenreMovies } from "../APIs/Api.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { GenreMovieTypeContainer } from "./GenreMovies.styles.js";
const genreId = 12;

export default function AdventureMovies() {
  const [adventureMovies, setAdventureMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("adventureMovies")) {
      setAdventureMovies(JSON.parse(localStorage.getItem("adventureMovies")));
    } else {
      const fetchAdventureMovies = async () => {
        const [data1, data2] = await Promise.all([
          getGenreMovies(1, genreId),
          getGenreMovies(2, genreId),
        ]);

        if (data1.error) {
          console.log(data1.message);
        } else {
          setAdventureMovies([...data1, ...data2]);
          localStorage.setItem(
            "adventureMovies",
            JSON.stringify([...data1, ...data2])
          );
        }
      };

      fetchAdventureMovies();
    }
  }, []);

  return (
    <GenreMovieTypeContainer media={900}>
      <h2 className="category_titles">Adventure Movies</h2>
      <div className="movielist_container">
        {!adventureMovies.length ? (
          <div className="load_animation"></div>
        ) : (
          adventureMovies.map((eachMovie) => (
            <MovieCard key={eachMovie.id} eachMovie={eachMovie} />
          ))
        )}
      </div>
    </GenreMovieTypeContainer>
  );
}
