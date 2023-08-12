import React, { useEffect, useState } from "react";
import { getShowDetails } from "../APIs/Api";
import { useDispatch } from "react-redux";
import { EpisodeLinkActions } from "../store/EpisodeLinkSlice";
import { ShowDetailsContainer } from "./Movie-ShowDetails.styles";

export default function ShowDetails({ showId }) {
  const [showData, setShowData] = useState({});
  const [seasonList, setSeasonList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/${showId}?language=en-US`;

    const fetchShowData = async () => {
      const ShowData = await getShowDetails(showId);

      if (showData.message) {
        console.log(showData.message);
      }

      setShowData(ShowData);
      setSeasonList(ShowData.seasons.slice(1));
      setGenres(ShowData.genres || []);
      setProductionCompanies(ShowData.production_companies || []);
      setProductionCountries(ShowData.production_countries || []);
    };

    fetchShowData();
    setSelectedEpisode(1);
    setSelectedSeason(1);
  }, [showId]);

  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const [episodeList, setEpisodeList] = useState([]);

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

  const dispatch = useDispatch();

  const handleEpisodeSelect = (seasonNumber, episodeNumber) => {
    dispatch(
      EpisodeLinkActions.setEpisodeLink(
        `https://vidsrc.me/embed/tv?tmdb=${showId}&season=${seasonNumber}&episode=${episodeNumber}`
      )
    );
    setSelectedEpisode(episodeNumber);
  };

  function openSeasonsContainer() {
    seasonsContainer.classList.toggle("hide");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedEpisode]);

  return (
    <>
      <ShowDetailsContainer media={900}>
        <img
          className="movie_details_poster"
          src={`https://image.tmdb.org/t/p/w154${showData.poster_path}`}
          alt=""
        />
        <div className="show_info_container">
          <h1 className="movie_title">{showData?.original_name}</h1>
          <p className="movie_overview">{showData?.overview}</p>
          <div className="movie_stats_container">
            <div className="first_stats_container">
              {genres.length > 0 && (
                <p>
                  Genre: {genres.map((eachgenre) => eachgenre.name).join(", ")}
                </p>
              )}
              <p>
                Language:{" "}
                {showData.original_language &&
                  showData.original_language.toUpperCase()}
              </p>
            </div>
            <div className="second_stats_container">
              {productionCountries.length > 0 && (
                <p>Country: {productionCountries[0].name}</p>
              )}
              {productionCompanies.length > 0 && (
                <p>
                  Production:{" "}
                  {productionCompanies
                    .map((eachCompany) => eachCompany.name)
                    .join(", ")}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="shows_list_container">
          <div className="main_season_list_container">
            <button onClick={openSeasonsContainer} className="seasons_button">
              Season {selectedSeason} &#9660;
            </button>
            <ul className="season_list_container hide">
              {seasonList.map((eachSeason, index) => {
                return (
                  <li key={eachSeason.id}>
                    <button
                      onClick={() => handleSeasonSelect(index)}
                      className="season_button"
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
              {episodeList.map((eachEpisode, index) => {
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
    </>
  );
}
