import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScrollRestoration, Link } from 'react-router-dom';
import ShowDetails from './ShowDetails';

export default function ShowPlayer() {
  const params = useParams();
  const showId = params.id;
  const [showEpisodeLink, setShowEpisodeLink] = useState(`https://vidsrc.me/embed/tv?tmdb=${showId}&season=1&episode=1`)
  
  useEffect(() =>  {
    setShowEpisodeLink(`https://vidsrc.me/embed/tv?tmdb=${showId}&season=1&episode=1`)
  },[showId])


  return (
    <>
      <Link to="/" className='back_button'>&#10094; Back to Home</Link>
      <div className="movie_player_container">
        {!showId ? <div className="load_animation"></div> : <iframe
          className="movie_player"
          src={showEpisodeLink}
          allowFullScreen
        ></iframe>}
      </div>
      <ShowDetails showId={showId} setShowEpisodeLink={setShowEpisodeLink}/>
      <ScrollRestoration top={true} />
    </>
  );
}
