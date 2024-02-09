import React, { useEffect, useRef, useState } from "react";
import { getMovies } from "../APIs/Api.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { CategoryMovieTypeContainer } from "./CategoryMovies.style.js";

export default function PopularMovies() {
  const ratingHighButton = useRef(null);
  const ratingLowButton = useRef(null);
  const newMovieButton = useRef(null);
  const oldMovieButton = useRef(null);
  const sortList = useRef(null);

  const [popularMoviesData, setPopularMoviesData] = useState([]);
  const categoryMovieTypeContainerRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const storedTimestamp = parseInt(localStorage.getItem("popularMoviesTimestamp"));
  const currentTime = new Date().getTime();
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const timeDifference = currentTime - storedTimestamp;

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(40);
  const category = "popular";

  useEffect(() => {
    if (categoryMovieTypeContainerRef.current) {
      categoryMovieTypeContainerRef.current.scrollIntoView();
    }
  }, [currentPage]);

  useEffect(() => {
    if (localStorage.getItem("popularMovies") && storedTimestamp !== null && timeDifference < oneDayInMilliseconds // if stored data is not older than 24 hours
    ) {
      setPopularMoviesData(JSON.parse(localStorage.getItem("popularMovies")));
      setIsLoading(false);
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
          localStorage.setItem(
            "popularMoviesTimestamp",
            JSON.stringify(currentTime)
          );
        }
        setIsLoading(false);
      };
      fetchPopularMovies();
    }
  }, []);

  function handleSortList() {
    if (sortList.current.classList.contains("active")) {
      sortList.current.classList.remove("active");
    } else {
      sortList.current.classList.add("active");
    }
  }

  function sortMoviesBy(sortOption) {
    ratingHighButton.current.classList.remove("selectedSort");
    ratingLowButton.current.classList.remove("selectedSort");
    newMovieButton.current.classList.remove("selectedSort");
    oldMovieButton.current.classList.remove("selectedSort");

    if (sortOption === "rating_high" || sortOption === "rating_low") {
      let sortedMovies = [...popularMoviesData].sort(
        (a, b) =>
          (sortOption === "rating_high" ? b : a).vote_average -
          (sortOption === "rating_high" ? a : b).vote_average
      );

      (sortOption === "rating_high"
        ? ratingHighButton
        : ratingLowButton
      ).current.classList.add("selectedSort");

      setPopularMoviesData(sortedMovies);
    } else {
      (sortOption === "new"
        ? newMovieButton
        : oldMovieButton
      ).current.classList.add("selectedSort");

      let sortedMovies = [...popularMoviesData].sort(
        (a, b) =>
          (sortOption === "new" ? b : a).release_date?.slice(0, 4) -
          (sortOption === "new" ? a : b).release_date?.slice(0, 4)
      );

      setPopularMoviesData(sortedMovies);
    }

    sortList.current.classList.remove("active");
  }

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
      <h2 className="category_titles">
        Popular Movies
        <div className="sort_container">
          <button onClick={handleSortList} className="sort_button">
            Sort
          </button>
          <div ref={sortList} className="sort_list">
            <button
              ref={ratingHighButton}
              onClick={() => sortMoviesBy("rating_high")}
              className="sort_options"
            >
              Rating &#9650;
            </button>
            <button
              ref={ratingLowButton}
              onClick={() => sortMoviesBy("rating_low")}
              className="sort_options"
            >
              Rating &#9660;
            </button>
            <button
              ref={newMovieButton}
              onClick={() => sortMoviesBy("new")}
              className="sort_options"
            >
              Newer &#9650;
            </button>
            <button
              ref={oldMovieButton}
              onClick={() => sortMoviesBy("old")}
              className="sort_options"
            >
              Older &#9660;
            </button>
          </div>
        </div>
      </h2>
      <div className="movielist_container">
        {isLoading ? (
          <div className="load_animation"></div>
        ) : (
          currentMovies.map((eachMovie) => (
            <MovieCard key={eachMovie.id} eachMovie={eachMovie} />
          ))
        )}
      </div>

      {!isLoading && (
        <ul className="pagination">
          {pageNumbers.map((eachPageNumber) => {
            return (
              <li key={eachPageNumber}>
                <button
                  className={`page_buttons ${
                    currentPage === eachPageNumber ? "selectedPageButton" : ""
                  }`}
                  onClick={() => paginate(eachPageNumber)}
                >
                  {eachPageNumber}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </CategoryMovieTypeContainer>
  );
}
