import React, { useEffect, useState } from "react";
import { getMovies } from "../APIs/Api.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { CategoryMovieTypeContainer } from "./CategoryMovies.style.js";

export default function TopRatedMovies() {
  const [RatedMoviesData, setRatedMoviesData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);
  const category = "top_rated";

  useEffect(() => {
    if (localStorage.getItem("ratedMovies")) {
      setRatedMoviesData(JSON.parse(localStorage.getItem("ratedMovies")));
    } else {
      const fetchRatedMovies = async () => {
        const [data1, data2, data3] = await Promise.all([
          getMovies(1, category),
          getMovies(2, category),
          getMovies(3, category),
        ]);

        if (data1.message) {
          console.log(data1.message);
        } else {
          setRatedMoviesData([...data1, ...data2, ...data3]);
        }
        localStorage.setItem(
          "ratedMovies",
          JSON.stringify([...data1, ...data2, ...data3])
        );
      };

      fetchRatedMovies();
    }
  }, []);

  const indexEnd = currentPage * moviesPerPage;
  const indexStart = indexEnd - moviesPerPage;
  const currentMovies = RatedMoviesData.slice(indexStart, indexEnd);

  const pages = [];

  const pageNumbers = Math.ceil(RatedMoviesData.length / moviesPerPage);

  for (let x = 1; x <= pageNumbers; ++x) {
    pages.push(x);
  }

  const paginate = (selectedPage) => {
    setCurrentPage(selectedPage);

    const movieContainer = document.querySelector(
      ".category_buttons_container"
    );

    movieContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <CategoryMovieTypeContainer media={900}>
      <h2 className="category_titles">Top rated Movies</h2>
      <div className="movielist_container">
        {!currentMovies.length ? (
          <div className="load_animation"></div>
        ) : (
          currentMovies.map((eachMovie) => (
            <MovieCard key={eachMovie.id} eachMovie={eachMovie} />
          ))
        )}
      </div>

      <ul className="pagination">
        {pages.map((eachPage) => {
          return (
            <li key={eachPage}>
              <button
                className={`page_buttons  ${
                  currentPage === eachPage ? "selectedPageButton" : null
                }  `}
                onClick={() => paginate(eachPage)}
              >
                {eachPage}
              </button>
            </li>
          );
        })}
      </ul>
    </CategoryMovieTypeContainer>
  );
}
