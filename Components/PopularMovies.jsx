import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import defaultPoster from "../assets/no_image.jpg"

export default function PopularMovies() {
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  const [error , setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);
 
  useEffect(() => {
    const fetchPopularMovies = async () => {

        const allApiPages = [1,2,3,4,5]
        const apiLink = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page='
        
        let data = []
        for(let x = 1; x <= allApiPages.length; ++x) {
            
            try {
              const response = await fetch(apiLink + x,{
              headers: {
                accept: 'application/json',
                Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGM1ZTU5YjRmMGUxMDQ1ODRjMzRlMjRmODZlOWJjMCIsInN1YiI6IjY0NTYzNzFlYzNjODkxMDEwNDE4ZWNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhRGCPIxeuJxggm9kJSFa7zmeFMV3byY4l9KprRAMxo',
              },
            })

            if (!response.ok )throw Error ("Couldn't fetch Popular Movies")
           

            const moviedata = await response.json()
            data.push(...moviedata.results)

            } catch (error) {
              
              setError(true)
              setErrorMsg(error.message)
            }
            
        }

        setPopularMoviesData(data)
    };

    fetchPopularMovies();
  }, []);


  
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = popularMoviesData.slice(indexOfFirstMovie, indexOfLastMovie);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(popularMoviesData.length / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)

    const movieContainer = document.querySelector(".category_buttons_container")

    movieContainer.scrollIntoView({ behavior: "smooth", block: "start" });

  } 

  return (
    <div className="movietype_container">
      <h2 className="category_titles">Popular Movies</h2>
      <div className="movielist_container">
        {error ? <p className='error_message'>{errorMsg}</p> : !currentMovies.length ? (
          <div className="load_animation"></div>
        ) : (
          currentMovies.map((eachMovie) => (
            <Link to={`/${eachMovie.id}`} className="movie_container" key={eachMovie.id}>
              <div className="movie_poster_container">
                <div className="movie_language">{eachMovie.original_language.toUpperCase()}</div>
                <div className="movie_date">{eachMovie.release_date.slice(0,4)}</div>
                <div className={"movie_vote " + (eachMovie.vote_average > 7 ? "green" : eachMovie.vote_average < 5 ? "red" : "orange")}>{eachMovie.vote_average}</div>
                <img className="movie_poster" src={eachMovie.poster_path === null ? defaultPoster : `https://image.tmdb.org/t/p/w154${eachMovie.poster_path}`} alt="" />
              </div>
              <h3 className='movie_name'>{eachMovie.title.length > 20 ? `${eachMovie.title.slice(0, 20)}...` : eachMovie.title}</h3>
            </Link>
          ))
        )}
      </div>

      <ul className="pagination">
        {pageNumbers.map((eachPageNumber) => (
          <li key={eachPageNumber}>
            <button className={`page_buttons ${currentPage === eachPageNumber ? 'selectedPageButton' : ''}`} onClick={() => paginate(eachPageNumber)}>
              {eachPageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
