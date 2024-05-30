import React, { useEffect, useRef, useState } from "react";
import { getShows } from "../APIs/Api.jsx";
import ShowCard from "../ShowCard/ShowCard.jsx";
import { PopularShowsTypeContainer } from "./PopularShows.styles.js";

export default function PopularShows() {

  const ratingHighButton = useRef(null)
  const ratingLowButton = useRef(null)
  const newMovieButton = useRef(null)
  const oldMovieButton = useRef(null)
  const sortList = useRef(null)

  const [popularShowsData, setPopularShowsData] = useState([]);
  const popularShowsTypeContainer = useRef()
  const [isLoading,setIsLoading] = useState(true)



  useEffect(() => {
    if (sessionStorage.getItem("popularShows")) {
      setPopularShowsData(JSON.parse(sessionStorage.getItem("popularShows")));
      setIsLoading(false)
    } else {
      const fetchPopularShows = async () => {
        const [data1, data2, data3, data4,data5,data6,data7,data8,data9] = await Promise.all([
          getShows(1),
          getShows(2),
          getShows(3),
          getShows(4),
          getShows(5),
          getShows(6),
          getShows(7),
          getShows(8),
          getShows(9)
        ]);

        if (data1.message) {
          console.log(data1.message);
        } else {
          setPopularShowsData([...data1, ...data2, ...data3, ...data4,...data5,...data6,...data7,...data8,...data9]);

          sessionStorage.setItem(
            "popularShows",
            JSON.stringify([...data1, ...data2, ...data3, ...data4,...data5,...data6,...data7,...data8,...data9])
          );
        }

        setIsLoading(false)
      };
      fetchPopularShows();

    }
  }, []);


  
  function handleSortList() {

    if(sortList.current.classList.contains("active")) {
      sortList.current.classList.remove("active")
    } else {
      sortList.current.classList.add("active")
    }
  }

  function sortMoviesBy(sortOption) {
    ratingHighButton.current.classList.remove("selectedSort");
    ratingLowButton.current.classList.remove("selectedSort");
    newMovieButton.current.classList.remove("selectedSort");
    oldMovieButton.current.classList.remove("selectedSort");
  
    if (sortOption === "rating_high" || sortOption === "rating_low") {
      let sortedMovies = [...popularShowsData].sort(
        (a, b) =>
          (sortOption === "rating_high" ? b : a).vote_average -
          (sortOption === "rating_high" ? a : b).vote_average
      );
  
      (sortOption === "rating_high" ? ratingHighButton : ratingLowButton).current.classList.add("selectedSort");
  
      setPopularShowsData(sortedMovies);

    } else {
      (sortOption === "new" ? newMovieButton : oldMovieButton).current.classList.add("selectedSort");
  
      let sortedMovies = [...popularShowsData].sort(
        (a, b) =>
          (sortOption === "new" ? b : a).first_air_date?.slice(0, 4) -
          (sortOption === "new" ? a : b).first_air_date?.slice(0, 4)
      );
  
      setPopularShowsData(sortedMovies);
    } 

    sortList.current.classList.remove("active")
  }
  


  return (
    <PopularShowsTypeContainer media={900} ref={popularShowsTypeContainer}>
      <h2 className="category_titles">Popular TV Shows
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
          popularShowsData.map(eachShow => {
            if(eachShow.original_language === "en" && eachShow.poster_path !== null) {
              return <ShowCard key={eachShow.id} eachShow={eachShow} />
            }
          })
        )}
      </div>

      </PopularShowsTypeContainer>
  );
}
