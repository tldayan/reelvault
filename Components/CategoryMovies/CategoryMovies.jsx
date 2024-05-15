import React, { useEffect, useState, useRef } from "react";
import { getMovies } from "../APIs/Api.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { CategoryMovieTypeContainer } from "./CategoryMovies.style.js";
import { sortMoviesAge, sortMoviesRating } from "../../helperFuncs/sortMovies.js";
import { useParams } from "react-router-dom";

export default function CategoryMovies() {

  const ratingHighButton = useRef(null)
  const ratingLowButton = useRef(null)
  const newMovieButton = useRef(null)
  const oldMovieButton = useRef(null)
  const sortList = useRef(null)
  const {category} = useParams() 

  const [CategoryMovies, setCategoryMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(40);
  const categoryMovieTypeContainerRef = useRef()

  useEffect(() => {
    if (categoryMovieTypeContainerRef.current) {
      categoryMovieTypeContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);


  useEffect(() => {
    if (localStorage.getItem(category)) {
      setCategoryMovies(JSON.parse(localStorage.getItem(category)));
      setIsLoading(false)
    } else {
      let allMovies = undefined
      const fetchCategorisedMovies = async () => {
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

          const allCategoryMoviesSet = new Set([...data1, ...data2, ...data3,...data4,...data5])
          allMovies = [...allCategoryMoviesSet]

          setCategoryMovies(allMovies);
        }
        localStorage.setItem(category,JSON.stringify(allMovies));
        
        setIsLoading(false)
      };

      fetchCategorisedMovies();
    }

    setCurrentPage(1)
    removeSelectedSortOptions()
  }, [category]);


  function handleSortList() {

    if(sortList.current.classList.contains("active")) {
      sortList.current.classList.remove("active")
    } else {
      sortList.current.classList.add("active")
    }
  }


  const removeSelectedSortOptions = () => {
    ratingHighButton.current.classList.remove("selectedSort");
    ratingLowButton.current.classList.remove("selectedSort");
    newMovieButton.current.classList.remove("selectedSort");
    oldMovieButton.current.classList.remove("selectedSort");
  }

  function sortMoviesBy(sortOption) {
    
    removeSelectedSortOptions()

    if (sortOption === "rating_high" || sortOption === "rating_low") {
  
      (sortOption === "rating_high" ? ratingHighButton : ratingLowButton).current.classList.add("selectedSort");
  
      setCategoryMovies(sortMoviesRating(CategoryMovies,sortOption));

    } else {
      (sortOption === "new" ? newMovieButton : oldMovieButton).current.classList.add("selectedSort");
  
      setCategoryMovies(sortMoviesAge(CategoryMovies, sortOption));
    } 

    sortList.current.classList.remove("active")
  }
  

  const indexEnd = currentPage * moviesPerPage;
  const indexStart = indexEnd - moviesPerPage;
  const currentMovies = CategoryMovies.slice(indexStart, indexEnd);

  const pages = [];

  const pageNumbers = Math.ceil(CategoryMovies.length / moviesPerPage);

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
      <h2 className="category_titles">{category.charAt(0).toUpperCase() + category.slice(1)} Movies
      <div className="sort_container">
          <button onClick={handleSortList} className="sort_button">Sort</button>
          <div ref={sortList} className="sort_list">
            <button ref={ratingHighButton} onClick={() => sortMoviesBy("rating_high")} className="sort_options">Rating &#9650;</button>
            <button ref={ratingLowButton} onClick={() => sortMoviesBy("rating_low")} className="sort_options">Rating  &#9660;</button>
            <button ref={newMovieButton} onClick={() => sortMoviesBy("new")} className="sort_options">Newer &#9650;</button>
            <button ref={oldMovieButton} onClick={() => sortMoviesBy("old")} className="sort_options">Older &#9660;</button>
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
