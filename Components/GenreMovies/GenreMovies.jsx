import React, { useEffect, useState } from "react";
import { getGenreMovies } from "../APIs/Api.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { GenreMovieTypeContainer } from "./GenreMovies.styles.js";
import { useParams } from "react-router-dom";

const genreObj = {
  "action" : 28,
  "adventure" : 12,
  "comedy" :  35,
  "horror" : 27,
  "romance" : 10749
}

export default function GenreMovies() {
  const [genreMovies, setGenreMovies] = useState([]);
  const {genre} = useParams()

  useEffect(() => {
    if (sessionStorage.getItem(genre)) {
      setGenreMovies(JSON.parse(sessionStorage.getItem(genre)));
    } else {
      const fetchGenreMovies = async () => {
        const [data1, data2] = await Promise.all([
          getGenreMovies(1, genreObj[genre]),
          getGenreMovies(2, genreObj[genre])
        ]);

        if (data1.error) {
          console.log(data1.message);
        } else {
          setGenreMovies([...data1, ...data2]);
          sessionStorage.setItem(
            genre,
            JSON.stringify([...data1, ...data2])
          );
        }
      };

      fetchGenreMovies();
    }
  }, [genre]);

  return (
    <GenreMovieTypeContainer media={900}>
      <h2 className="category_titles">{genre.charAt(0).toUpperCase() + (genreMovies && genre.slice(1))} Movies</h2>
      <div className="movielist_container">
        {!genreMovies.length ? (
          <div className="load_animation"></div>
        ) : (
          genreMovies.map((eachMovie) => (
            <MovieCard key={eachMovie.id} eachMovie={eachMovie} />
          ))
        )}
      </div>
    </GenreMovieTypeContainer>
  );
}
