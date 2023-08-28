import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ScrollRestoration, Link } from "react-router-dom";
import ShowDetails from "../Movie-ShowDetails/ShowDetails";
import { useDispatch } from "react-redux";
import { EpisodeLinkActions } from "../store/EpisodeLinkSlice";
import { useSelector } from "react-redux";

export default function ShowPlayer() {
  const params = useParams();
  const showId = params.id;
  const dispatch = useDispatch();
  const EpisodeLink = useSelector((state) => state.EpisodeLink.episodeLink);
  const storedShowName = (useSelector((state) => state.ShowName.showName) || JSON.parse(localStorage.getItem("showName")))
  
  const [showName, setShowName] = useState(storedShowName)
  

  useEffect(() => {
    setShowName(storedShowName)
    localStorage.setItem("showName", JSON.stringify(storedShowName))
  },[storedShowName])


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
      <p className="watching_show_notice">Watching: {showName}</p>
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
      <ShowDetails showId={showId} />
      <ScrollRestoration top={true} />
    </>
  );
}
