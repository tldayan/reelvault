import React, { useEffect,useState,useRef } from "react";
import { useParams } from "react-router-dom";
import { ScrollRestoration, Link } from "react-router-dom";
import ShowDetails from "../Movie-ShowDetails/ShowDetails";
import { getShowDetails } from "../APIs/Api";
import { useDispatch } from "react-redux";
import { EpisodeLinkActions } from "../store/EpisodeLinkSlice";
import { useSelector } from "react-redux";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

export default function ShowPlayer() {
  const params = useParams();
  const showId = params.id;
  const dispatch = useDispatch();
  const EpisodeLink = useSelector((state) => state.EpisodeLink.episodeLink);

  const showLoadContainer = useRef(null);
  const IframeShowElement = useRef(null);
  const [showData, setShowData] = useState({});
  const [seasonList, setSeasonList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [showReleasedDate, setShowReleasedDate] = useState("")
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const [episodeList, setEpisodeList] = useState([]);
  const [showLoaded, setShowLoaded] = useState(false)
  const showLoadedValue = useRef(showLoaded)
  const refreshPageNotice = useRef(null)


  useEffect(() => {

    const fetchShowData = async () => {
      const ShowData = await getShowDetails(showId);

      if (showData.message) {
        console.log(showData.message);
      }

      setShowData(ShowData);
      let filteredSeasons = ShowData.seasons.filter(eachSeason => eachSeason.name !== "Specials" && eachSeason.air_date !== null)
      setSeasonList([...filteredSeasons]);
      setGenres(ShowData.genres || []);
      setShowReleasedDate(ShowData.first_air_date || "")
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

  

  function handleIframeLoad() {

    setShowLoaded(true)

    showLoadContainer.current.style.display = "none"
    IframeShowElement.current.style.height = "100%"
  }

  useEffect(() => {
    showLoadedValue.current = showLoaded
  },[showLoaded])

  useEffect(() => {

    refreshPageNotice.current.classList.remove("active")

    const timeout1 = setTimeout(() => {
      if(showLoadedValue.current === false) {
        refreshPageNotice.current.classList.add("active")
      }
    },5500)

    const timeout2 = setTimeout(() => {

      if(showLoadedValue.current === true) {
        refreshPageNotice.current.classList.remove("active")
      }
    },8000)

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }

  },[showId])


  return (
    <>
    <p ref={refreshPageNotice} className="refresh_notice">Show not loading? <span onClick={() => window.location.reload()} className="refresh_link">Refresh page</span></p>
    <div className="back_button_container">
      <Link to="/" className="back_button">
        &#10094; Back to Home
      </Link>
    </div>
      
      
      <div className="movie_player_container">
      <p className="watching_show_notice">Watching: {showData.original_name ? showData.original_name : "..."}</p>
          
      <div ref={showLoadContainer} className="movie_player_skeleton">
      <LoadingAnimation />
      </div>  
          <iframe
          ref={IframeShowElement}
            className="show_player"
            src={EpisodeLink}
            allowFullScreen
            onLoad={handleIframeLoad}
          ></iframe>
      </div>
      <ShowDetails showId={showId} showReleasedDate={showReleasedDate} showData={showData} setSelectedSeason={setSelectedSeason} setSelectedEpisode={setSelectedEpisode} setEpisodeList={setEpisodeList} episodeList={episodeList} selectedSeason={selectedSeason} selectedEpisode={selectedEpisode} seasonList={seasonList} genres={genres} productionCompanies={productionCompanies} productionCountries={productionCountries} />
      <ScrollRestoration top={true} />
    </>
  );
}
