import React, { useEffect, useRef, useState } from "react";
import { getShows } from "../APIs/Api.jsx";
import ShowCard from "../ShowCard/ShowCard.jsx";
import { PopularShowsTypeContainer } from "./PopularShows.styles.js";

export default function PopularShows() {
  const [popularShowsData, setPopularShowsData] = useState([]);
  const popularShowsTypeContainer = useRef()
  const [isLoading,setIsLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(localStorage.getItem("latestPage") ? JSON.parse(localStorage.getItem("latestPage")) : 1);

  const [showsPerPage] = useState(74);

  useEffect(() => {
    if (popularShowsTypeContainer.current) {
      popularShowsTypeContainer.current.scrollIntoView();
    }
  }, [currentPage]);

  useEffect(() => {
    if (localStorage.getItem("popularShows")) {
      setPopularShowsData(JSON.parse(localStorage.getItem("popularShows")));
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

          localStorage.setItem(
            "popularShows",
            JSON.stringify([...data1, ...data2, ...data3, ...data4,...data5,...data6,...data7,...data8,...data9])
          );
        }

        setIsLoading(false)
      };
      fetchPopularShows();

    }
  }, []);

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = popularShowsData.slice(
    indexOfFirstShow,
    indexOfLastShow
  );

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(popularShowsData.length / showsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

      localStorage.setItem("latestPage", pageNumber.toString())

  };


  return (
    <PopularShowsTypeContainer media={900} ref={popularShowsTypeContainer}>
      <h2 className="category_titles">Popular TV Shows</h2>

      <div className="movielist_container">
        {isLoading ? (
          <div className="load_animation"></div>
        ) : (
          currentShows.map(eachShow => {
            if(eachShow.original_language === "en" && eachShow.poster_path !== null) {
              return <ShowCard key={eachShow.id} eachShow={eachShow} />
            }
          })
        )}
      </div>

      <ul className="pagination">
        {!isLoading && pageNumbers.map((eachPageNumber) => (
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
        ))}
      </ul>
      </PopularShowsTypeContainer>
  );
}
