import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ScrollRestoration, Link } from "react-router-dom";
import ShowDetails from "../Movie-ShowDetails/ShowDetails";
import { getShowDetails } from "../APIs/Api";
import { useDispatch } from "react-redux";
import { EpisodeLinkActions } from "../store/EpisodeLinkSlice";
import { useSelector } from "react-redux";

export default function ShowPlayer() {
  const params = useParams();
  const showId = params.id;
  const dispatch = useDispatch();
  const EpisodeLink = useSelector((state) => state.EpisodeLink.episodeLink);

  const [showData, setShowData] = useState({});
  const [seasonList, setSeasonList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {

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

  useEffect(() => {
    dispatch(
      EpisodeLinkActions.setEpisodeLink(
        `https://vidsrc.me/embed/${showId}/1-1/`
      )
    );
  }, [showId]);
  



  return (
    <>
    <div className="back_button_container">
      <Link to="/" className="back_button">
        &#10094; Back to Home
      </Link>
    </div>
      
      
      <div className="movie_player_container">
      <p className="watching_show_notice">Watching: {showData.original_name}</p>
        {!EpisodeLink ? (
          <div className="load_animation"></div>
        ) : (
          <iframe
            className="movie_player"
            src={EpisodeLink}
            allowFullScreen
          ></iframe>
        )}
      </div>
      <ShowDetails showId={showId} showData={showData} setSelectedSeason={setSelectedSeason} setSelectedEpisode={setSelectedEpisode} setEpisodeList={setEpisodeList} episodeList={episodeList} selectedSeason={selectedSeason} selectedEpisode={selectedEpisode} seasonList={seasonList} genres={genres} productionCompanies={productionCompanies} productionCountries={productionCountries} />
      <ScrollRestoration top={true} />
    </>
  );
}
