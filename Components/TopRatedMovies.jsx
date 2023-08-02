import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"


export default function TopRatedMovies() {
  const [RatedMoviesData, setRatedMoviesData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage] = useState(20)

  

  useEffect(() => {
     const fetchRatedMovies = async() => {
      const API_URL_PAGE_1 = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
      const API_URL_PAGE_2 = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2`;
      const API_URL_PAGE_3 = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3`;
    
      try {
        const responsePage1 = await fetch(API_URL_PAGE_1, {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGM1ZTU5YjRmMGUxMDQ1ODRjMzRlMjRmODZlOWJjMCIsInN1YiI6IjY0NTYzNzFlYzNjODkxMDEwNDE4ZWNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhRGCPIxeuJxggm9kJSFa7zmeFMV3byY4l9KprRAMxo',
          },
        });

        const responsePage2 = await fetch(API_URL_PAGE_2, {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGM1ZTU5YjRmMGUxMDQ1ODRjMzRlMjRmODZlOWJjMCIsInN1YiI6IjY0NTYzNzFlYzNjODkxMDEwNDE4ZWNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhRGCPIxeuJxggm9kJSFa7zmeFMV3byY4l9KprRAMxo',
          },
        });
    
        const responsePage3 = await fetch(API_URL_PAGE_3, {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGM1ZTU5YjRmMGUxMDQ1ODRjMzRlMjRmODZlOWJjMCIsInN1YiI6IjY0NTYzNzFlYzNjODkxMDEwNDE4ZWNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhRGCPIxeuJxggm9kJSFa7zmeFMV3byY4l9KprRAMxo',
          },
        });
    
        const dataPage1 = await responsePage1.json();
        const dataPage2 = await responsePage2.json();
        const dataPage3 = await responsePage3.json();
    
        const data = [...dataPage1.results,...dataPage2.results ,...dataPage3.results];
  
        setRatedMoviesData(data)
  
      } catch (error) {
        alert(error.message);
      }
    };
  
fetchRatedMovies()

  },[])

  const indexEnd = currentPage * moviesPerPage
  const indexStart = indexEnd - moviesPerPage 
  const currentMovies = RatedMoviesData.slice(indexStart, indexEnd)

  const pages = []

   const pageNumbers = Math.ceil(RatedMoviesData.length / moviesPerPage)

   for(let x = 1; x <= pageNumbers; ++x) {
      pages.push(x)
   }
  
   const paginate = (selectedPage) => {
    setCurrentPage(selectedPage)

    const movieContainer = document.querySelector(".category_buttons_container")

    movieContainer.scrollIntoView({ behavior: "smooth", block: "start" });
   }


  return (
    <div className='movietype_container'>
        <h2 className='category_titles'>Top rated Movies</h2>
        <div className='movielist_container'>
          {!currentMovies.length  ? <div className="load_animation"></div> : currentMovies.map(eachMovie => {
            return <Link to={`/${eachMovie.id}`} className="movie_container" key={eachMovie.id}>
            <div className="movie_poster_container">
              <div className="movie_language">{eachMovie.original_language.toUpperCase()}</div>
              <div className="movie_date">{eachMovie.release_date.slice(0,4)}</div>
              <div className={"movie_vote " + (eachMovie.vote_average > 7 ? "green" : eachMovie.vote_average < 5 ? "red" : "orange")}>{eachMovie.vote_average}</div>
              <img className="movie_poster" src={eachMovie.poster_path === null ? defaultPoster : `https://image.tmdb.org/t/p/w154${eachMovie.poster_path}`} alt="" />
            </div>
            <h3 className='movie_name'>{eachMovie.title.length > 20 ? `${eachMovie.title.slice(0, 20)}...` : eachMovie.title}</h3>
          </Link>
          })}
        </div>

          <ul className='pagination'>
            {pages.map(eachPage => {
              return <li key={eachPage}><button className={`page_buttons  ${currentPage === eachPage ? "selectedPageButton" : null }  `} onClick={() => paginate(eachPage)}>{eachPage}</button></li>
            })}
          </ul>

    </div>
  )
}



