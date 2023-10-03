import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EpisodeLinkActions } from "../store/EpisodeLinkSlice";
import { ShowDetailsContainer } from "./Movie-ShowDetails.styles";
import Reviews from "../Reviews/Reviews";
import Recommended from "../Recommended/Recommended";
import { useRef } from "react";
import { showsWatchlistActions } from "../store/showsWatchlistSlice";

export default function ShowDetails({ showId,showData,setEpisodeList,setSelectedEpisode,setSelectedSeason,showReleasedDate,selectedEpisode,episodeList,selectedSeason,genres,productionCompanies,productionCountries,seasonList }) {

  const dispatch = useDispatch()

  useEffect(() => {
    const newEpisodeList = [];
    for (
      let i = 0;
      i < seasonList[selectedSeason - 1]?.episode_count || 0;
      i++
    ) {
      newEpisodeList.push(i);
    }
    setEpisodeList(newEpisodeList);
  }, [seasonList, selectedSeason]);

  const [seasonsContainer, setSeasonsContainer] = useState(null);

  useEffect(() => {
    const seasonsContainerElement = document.querySelector(
      ".season_list_container"
    );
    setSeasonsContainer(seasonsContainerElement);
  }, []);

  const handleSeasonSelect = (index) => {
    setSelectedSeason(index + 1);
    seasonsContainer.classList.toggle("hide");
  };



  const handleEpisodeSelect = (seasonNumber, episodeNumber) => {
    dispatch(
      EpisodeLinkActions.setEpisodeLink(
        `https://vidsrc.me/embed/${showId}/${seasonNumber}-${episodeNumber}`
      )
    );
    setSelectedEpisode(episodeNumber);
  };

  useEffect(() => {
    dispatch(
      EpisodeLinkActions.setEpisodeLink(
        `https://vidsrc.me/embed/${showId}/${selectedSeason}-1`
      )
    );
  },[selectedSeason])

  

  function openSeasonsContainer() {
    seasonsContainer.classList.toggle("hide");
  }

  useEffect(() => {
    setSelectedEpisode(1)
  },[selectedSeason])


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedEpisode,selectedSeason]);

  const watchlist = useSelector((state) => state.showsWatchlist)

  function handleWatchlist() {
    
    if(watchlist.some(eachEntity => eachEntity.showId == showId)) {
      
      dispatch(showsWatchlistActions.removeFromWatchlist(showId))
    } else {
      dispatch(showsWatchlistActions.addToWatchlist(showData))
    }
  }


  return (
    <>
      <ShowDetailsContainer media={900}>
        <img
          className="movie_details_poster"
          src={`https://image.tmdb.org/t/p/original${showData.poster_path}`}
          alt=""
        />
        {Object.keys(showData).length !== 0 ? <div className="show_info_container">
          <h1 className="movie_title">{showData?.name} <button className={`watchlist_btn ${watchlist.some(eachEntity => eachEntity.showId == showId) ? "active" : ""}`} onClick={handleWatchlist}>{watchlist.some(eachEntity => eachEntity.showId == showId) ? "In Watchlist" : "+ Watchlist"}</button></h1>
          <p className="movie_overview">{showData?.overview}</p>
          <div className="movie_stats_container">
            <div className="first_stats_container">
            {genres.length > 0 && (
                <p className="entity_genre">
                  Genre: <span className="entity_info">{genres.map((eachgenre) => eachgenre.name).join(", ")}</span>
                </p>
              )}
              {productionCompanies.length > 0 && (
                <p className="entity_production">
                  Production:{" "}
                  <span className="entity_info">{productionCompanies[0].name}</span>
                </p>
              )}
              
            </div>
            <div className="second_stats_container">
            <p className="entity_language">
                Language:{" "}
                <span className="entity_info">{showData.original_language &&
                  showData.original_language.toUpperCase()}</span>
              </p>
              {showReleasedDate && (
                <p className="entity_released">Released: <span className="entity_info">{showReleasedDate}</span></p>
              )}
              {productionCountries.length > 0 && (
                <p className="entity_country">Country: <span className="entity_info">{productionCountries[0].name}</span></p>
              )}
            
            </div>
          </div>
        </div> : <div className="load_animation"></div>}
        <div className="shows_list_container">
          <div className="main_season_list_container">
            <button onClick={openSeasonsContainer} className="seasons_button">
              Season {selectedSeason}&nbsp;&#9660;
            </button>
            <ul className="season_list_container hide">
              {seasonList.map((eachSeason, index) => {
                return (
                  <li key={eachSeason.id}>
                    <button
                      onClick={() => handleSeasonSelect(index)}
                      className={`season_button ${selectedSeason === index + 1 && `active`}`}
                    >
                      Season {index + 1}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="main_episode_list_container">
            <ul className="episode_list_container">
              {episodeList.map((index) => {
                return (
                  <li key={index}>
                    <button
                      onClick={() =>
                        handleEpisodeSelect(selectedSeason, index + 1)
                      }
                      className={`episode_buttons ${
                        selectedEpisode === index + 1 ? "active" : null
                      }`}
                    >
                      Episode {index + 1}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ShowDetailsContainer>
      <Reviews showId={showId}/>
      <Recommended showId={showId}/>
    </>
  );
}
