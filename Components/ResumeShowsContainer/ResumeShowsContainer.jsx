import React, { useEffect, useState } from 'react';
import { StyledResumeShowsContainer } from './ResumeShowsContainer.styles';
import { register } from 'swiper/element/bundle';
import { Link } from 'react-router-dom';
import playButton from "../../assets/play-solid.svg";
import { getUserShowDetails } from '../APIs/mongo/UserShowDetail';
register();

export default function ResumeShowsContainer() {
  const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [username] = useState(storedUserInfo ? storedUserInfo.username : null);
  const [userShows, setUserShows] = useState([]);

  
  useEffect(() => {
    const fetchUserShowDetails = async () => {
      const userShowDetails = await getUserShowDetails(username);
      setUserShows(userShowDetails);
    };

    if (username) {
      fetchUserShowDetails();
    }
  }, []);
  

  return (
    <>
      {userShows.length > 0 && (
        <StyledResumeShowsContainer>
          <h2 className='category_titles'>Welcome back {username}, resume where you left off ?</h2>
          <swiper-container slides-per-view="auto" mousewheel="false">
            {userShows.map(eachShow => (
              <swiper-slide key={eachShow?.showId}>
                <Link className='show_link' to={`/tvshows/${eachShow.showId}`}>
                  {eachShow.poster_url ? (
                    <img className='show_poster' src={eachShow?.poster_url === null ? defaultPoster : `https://image.tmdb.org/t/p/w500${eachShow?.poster_url}`} alt="showPoster" />
                  ) : (
                    <div className="movie_poster_skeleton" style={{ width: '154px', height: '231px' }} />
                  )}
                  {eachShow.poster_url && <span className='show_season'>s{eachShow.showSeason}</span>}
                  {eachShow.poster_url && <span className='show_episode'>e{eachShow.showEpisode}</span>}
                  <div className='resumeShow_cover'>
                    <div className='watch_show_btn'>
                      <img className='play_button' src={playButton} alt="resume_icon" />
                    </div>
                    <p className='show_name'>{eachShow.showName}</p>
                  </div>
                </Link>
              </swiper-slide>
            ))}
          </swiper-container>
        </StyledResumeShowsContainer>
      )}
    </>
  );
}
