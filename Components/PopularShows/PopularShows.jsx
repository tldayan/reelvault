import React, { useEffect, useState } from "react";
import { getShows } from "../APIs/Api.jsx";
import ShowCard from "../ShowCard/ShowCard.jsx";
import { PopularShowsTypeContainer } from "./PopularShows.styles.js";

export default function PopularShows() {
  const [popularShowsData, setPopularShowsData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage] = useState(20);

  useEffect(() => {
    if (localStorage.getItem("popularShows")) {
      setPopularShowsData(JSON.parse(localStorage.getItem("popularShows")));
    } else {
      const fetchPopularShows = async () => {
        const [data1, data2, data3, data4] = await Promise.all([
          getShows(1),
          getShows(2),
          getShows(3),
          getShows(4),
        ]);

        if (data1.message) {
          console.log(data1.message);
        } else {
          setPopularShowsData([...data1, ...data2, ...data3, ...data4]);

          localStorage.setItem(
            "popularShows",
            JSON.stringify([...data1, ...data2, ...data3, ...data4])
          );
        }
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

    const movieContainer = document.querySelector(
      ".category_buttons_container"
    );

    movieContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PopularShowsTypeContainer media={900}>
      <h2 className="category_titles">Popular TV Shows</h2>

      <div className="movielist_container">
        {!currentShows.length ? (
          <div className="load_animation"></div>
        ) : (
          currentShows.map((eachShow) => (
            <ShowCard key={eachShow.id} eachShow={eachShow} />
          ))
        )}
      </div>

      <ul className="pagination">
        {pageNumbers.map((eachPageNumber) => (
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
