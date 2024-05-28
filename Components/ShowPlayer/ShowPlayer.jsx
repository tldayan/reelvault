import React, { useEffect,useState,useRef } from "react";
import { useParams } from "react-router-dom";
import { ScrollRestoration, Link } from "react-router-dom";
import ShowDetails from "../Movie-ShowDetails/ShowDetails";
import { fetchEpisodeNames, getShowDetails, getShowTrailer } from "../APIs/Api";
import { useDispatch, useSelector } from "react-redux";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { EpisodeLinkActions } from "../store/EpisodeLinkSlice";
import ServersContainer from "../ServersContainer/ServersContainer";

export default function ShowPlayer() {
  let {id, seasonNumber, episodeNumber} = useParams()
  seasonNumber = Number(seasonNumber);
  episodeNumber = Number(episodeNumber);
  const dispatch = useDispatch()

  const EpisodeLink = useSelector((state) => state.EpisodeLink.episodeLink);

  const showLoadContainer = useRef(null);
  const IframeShowElement = useRef(null);
  const [showData, setShowData] = useState({});
  const [showDataLoading,setShowDataLoading] = useState(false)
  const [seasonList, setSeasonList] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);
  const [showLoaded, setShowLoaded] = useState(false)
  const [showTrailerKey, setShowTrailerKey] = useState("")
  const [recentlyWatched, setRecentlyWatched] = useState(false)
  const [seasonEpisodeNames,setSeasonEpisodeNames] = useState([])

  const showLoadedValue = useRef(showLoaded)


  useEffect(() => {
      dispatch(EpisodeLinkActions.setEpisodeLink(`https://vidsrc.xyz/embed/tv/${id}/${seasonNumber}/${episodeNumber}`))
    
    const fetchShowData = async () => {
      setShowDataLoading(true)
      const ShowData = await getShowDetails(id);
      const ShowTrailerId = await getShowTrailer(id)
    

      if (showData.message) {
        console.log(showData.message);
      }

      setShowData(ShowData);
      setShowDataLoading(false)
      let filteredSeasons = ShowData.seasons.filter(eachSeason => eachSeason.name !== "Specials" && eachSeason.air_date !== null)
      setSeasonList([...filteredSeasons]);
      setShowTrailerKey(ShowTrailerId)
      
    };

    
    fetchShowData();
  
  }, [id]);



useEffect(() => {

  const getEpisodeNames = async () => {
    const seasonEpisodeName = await fetchEpisodeNames(id,seasonNumber)

  setSeasonEpisodeNames(seasonEpisodeName)
  }
  
  getEpisodeNames()


},[seasonNumber,id])


  function handleIframeLoad() {

    setShowLoaded(true)

    showLoadContainer.current.style.display = "none"
    IframeShowElement.current.style.height = "100%"
  }

  useEffect(() => {
    showLoadedValue.current = showLoaded
  },[showLoaded])


  return (
    <>

    <div className="back_button_container">
      <Link to="/" className="back_button">
        &#10094; Home
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

      {<ServersContainer selectedEpisode={episodeNumber} selectedSeason={seasonNumber} showId={id}/>}

      {<ShowDetails showId={id} showDataLoading={showDataLoading} showTrailerKey={showTrailerKey} seasonEpisodeNames={seasonEpisodeNames} showData={showData} setEpisodeList={setEpisodeList} episodeList={episodeList} selectedSeason={seasonNumber} selectedEpisode={episodeNumber} seasonList={seasonList} /> }
      <ScrollRestoration top={true} />
    </>
  );
}
