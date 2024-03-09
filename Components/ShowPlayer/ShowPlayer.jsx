import React, { useEffect,useState,useRef } from "react";
import { useParams } from "react-router-dom";
import { ScrollRestoration, Link } from "react-router-dom";
import ShowDetails from "../Movie-ShowDetails/ShowDetails";
import { fetchEpisodeNames, getShowDetails, getShowTrailer } from "../APIs/Api";
import { useDispatch, useSelector } from "react-redux";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import ExistingShowModal from "../ExistingShowModal/ExistingShowModal";
import { EpisodeLinkActions } from "../store/EpisodeLinkSlice";

export default function ShowPlayer() {
  const params = useParams();
  const showId = params.id;
  const dispatch = useDispatch()

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
  const [showTrailerKey, setShowTrailerKey] = useState("")
  const [recentlyWatched, setRecentlyWatched] = useState(false)
  const [existingShow,setExistingShow] = useState({})
  const [seasonEpisodeNames,setSeasonEpisodeNames] = useState([])


  const showLoadedValue = useRef(showLoaded)
  const refreshPageNotice = useRef(null)


  useEffect(() => {

    dispatch(EpisodeLinkActions.setEpisodeLink(`https://vidsrc.to/embed/tv/${showId}/1/1`))

    const fetchShowData = async () => {
      const ShowData = await getShowDetails(showId);
      const ShowTrailerId = await getShowTrailer(showId)
    

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
      setShowTrailerKey(ShowTrailerId)
      
    };

    fetchShowData();
    setSelectedEpisode(1);
    setSelectedSeason(1);
  
    
  }, [showId]);


useEffect(() => {


  const getEpisodeNames = async () => {
    const seasonEpisodeName = await fetchEpisodeNames(showId,selectedSeason)

  setSeasonEpisodeNames(seasonEpisodeName)
  }
  
  getEpisodeNames()


},[selectedSeason,showId])



  useEffect(() => {

    const showDetailsJSON = localStorage.getItem("ShowDetails");

    if (showDetailsJSON) {
      const showDetails = JSON.parse(showDetailsJSON);

      const existingShow = showDetails.find(eachObj => eachObj.showId === showId)
      setExistingShow(existingShow)

      if(existingShow) {
        setRecentlyWatched(true)
      } else {
        setRecentlyWatched(false)
      }
    
    }

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

      refreshPageNotice.current.classList.remove("active")
    },8000)

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      
    }

  },[showId])



  useEffect(() => {
      if(recentlyWatched) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "visible"
      }
  },[recentlyWatched])

  return (
    <>

    {recentlyWatched && <ExistingShowModal setSelectedEpisode={setSelectedEpisode} setSelectedSeason={setSelectedSeason} existingShow={existingShow} recentlyWatched={recentlyWatched} setRecentlyWatched={setRecentlyWatched} />}
    {recentlyWatched && <div className="dark_overlay"></div>}

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
      <ShowDetails showId={showId} showTrailerKey={showTrailerKey} seasonEpisodeNames={seasonEpisodeNames} showReleasedDate={showReleasedDate} showData={showData} setSelectedSeason={setSelectedSeason} setSelectedEpisode={setSelectedEpisode} setEpisodeList={setEpisodeList} episodeList={episodeList} selectedSeason={selectedSeason} selectedEpisode={selectedEpisode} seasonList={seasonList} genres={genres} productionCompanies={productionCompanies} productionCountries={productionCountries} />
      <ScrollRestoration top={true} />
    </>
  );
}
