import React, { useEffect, useRef, useState } from "react";
import { getMovies } from "../APIs/Api.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { CategoryMovieTypeContainer } from "./CategoryMovies.style.js";

export default function PopularMovies() {
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  const categoryMovieTypeContainerRef = useRef()
  const [isLoading,setIsLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(40);
  const category = "popular";

  useEffect(() => {
    if (categoryMovieTypeContainerRef.current) {
      categoryMovieTypeContainerRef.current.scrollIntoView();
    }
  }, [currentPage]);
  
  

  useEffect(() => {
    if (localStorage.getItem("popularMovies")) {
      setPopularMoviesData(JSON.parse(localStorage.getItem("popularMovies")));
      setIsLoading(false)
    } else {
      const fetchPopularMovies = async () => {
        const [data1, data2, data3, data4, data5] = await Promise.all([
          getMovies(1, category),
          getMovies(2, category),
          getMovies(3, category),
          getMovies(4, category),
          getMovies(5, category),
        ]);

        if (data1.message) {
          console.log(data1.message);
        } else {
          setPopularMoviesData([
            ...data1,
            ...data2,
            ...data3,
            ...data4,
            ...data5,
          ]);
          localStorage.setItem(
            "popularMovies",
            JSON.stringify([...data1, ...data2, ...data3, ...data4, ...data5])
          );
        }
        setIsLoading(false)
      };
      fetchPopularMovies();
    }
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = popularMoviesData.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(popularMoviesData.length / moviesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <CategoryMovieTypeContainer media={900} ref={categoryMovieTypeContainerRef}>
      <h2 className="category_titles">Popular Movies</h2>
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
        {pageNumbers.map((eachPageNumber) => {
          return <li key={eachPageNumber}>
            <button
              className={`page_buttons ${
                currentPage === eachPageNumber ? "selectedPageButton" : ""
              }`}
              onClick={() => paginate(eachPageNumber)}
            >
              {eachPageNumber}
            </button>
          </li>
})}
      </ul>}
      </CategoryMovieTypeContainer>
  );
}
