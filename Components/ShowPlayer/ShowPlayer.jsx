import React, { useEffect } from "react";
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

  useEffect(() => {
    dispatch(
      EpisodeLinkActions.setEpisodeLink(
        `https://vidsrc.me/embed/tv?tmdb=${showId}&season=1&episode=1`
      )
    );
  }, [showId]);

  return (
    <>
      <Link to="/" className="back_button">
        &#10094; Back to Home
      </Link>
      <div className="movie_player_container">
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
