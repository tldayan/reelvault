import React, { useEffect, useState, useRef } from "react";
import { getMovies } from "../APIs/Api.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { CategoryMovieTypeContainer } from "./CategoryMovies.style.js";

export default function TopRatedMovies() {
  const [RatedMoviesData, setRatedMoviesData] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(40);
  const category = "top_rated";
  const categoryMovieTypeContainerRef = useRef()

  useEffect(() => {
    if (categoryMovieTypeContainerRef.current) {
      categoryMovieTypeContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);
  



  useEffect(() => {
    if (localStorage.getItem("ratedMovies")) {
      setRatedMoviesData(JSON.parse(localStorage.getItem("ratedMovies")));
      setIsLoading(false)
    } else {
      const fetchRatedMovies = async () => {
        const [data1, data2, data3,data4,data5] = await Promise.all([
          getMovies(1, category),
          getMovies(2, category),
          getMovies(3, category),
          getMovies(4, category),
          getMovies(5, category)
        ]);

        if (data1.message) {
          console.log(data1.message);
        } else {
          setRatedMoviesData([...data1, ...data2, ...data3,...data4,...data5]);
        }
        localStorage.setItem(
          "ratedMovies",
          JSON.stringify([...data1, ...data2, ...data3,...data4,...data5])
        );
        setIsLoading(false)
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
    <CategoryMovieTypeContainer media={900} ref={categoryMovieTypeContainerRef}>
      <h2 className="category_titles">Top rated Movies</h2>
      <div className="movielist_container">
      {isLoading ? (
          <div className="load_animation"></div>
        ) : (
          currentMovies.map((eachMovie) => (
            <MovieCard key={eachMovie.id} eachMovie={eachMovie} />
          ))
        )}
      </div>

      {!isLoading && <ul className="pagination">
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
      </ul>}
    </CategoryMovieTypeContainer>
  );
}
