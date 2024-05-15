import {css, styled} from "styled-components"

export const StyledEntityDetailsContainer = styled.div`


background-color: #0b0b0b;
/*   border: 1px solid red; */
  width: 95%;
  margin: 20px auto;
  padding: 25px;
  display: flex;
  align-items:center;
  flex-direction : row;
  gap: 15px;
  color: #8f8f8f;
  font-family: 'Philosopher', sans-serif;
  border-radius: 10px;
  font-size: clamp(0.5rem, 5vw, 1rem);
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.182);


  .movie_poster_skeleton {
  background-color: rgb(50, 50, 50);
  border-radius: 10px;
  width: 160px;
  height: 231px;
  display: block;
  position: relative; 
  overflow: hidden;
}




.movie_info_container {
  flex: 1;
}

.movie_title.skeleton {
  width: 50%;
  height: 24px;
  background-color: rgb(50, 50, 50);
  margin-bottom: 10px;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.movie_overview.skeleton {
  width: 100%;
  height: 80px;
  background-color: rgb(50, 50, 50);
  margin-bottom: 10px;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.movie_overview::before,.movie_title::before,.share_btn::before,.watchlist_btn::before,.trailer::before {
  content: "";
  position: absolute;
  top: 0;
  border-radius: 10px;
  left: -100%; 
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(90, 90, 90, 0.434), transparent);
  animation: skeletonAnimation 1.5s infinite; 
}

.movie_stats_container {
  display: flex;
  gap: 20px;
}

.first_stats_container,
.second_stats_container {
  flex: 1;
}

.entity_language.skeleton,
.entity_released.skeleton,
.entity_genre.skeleton,
.entity_duration.skeleton,
.entity_country.skeleton,
.entity_production.skeleton {
  width: 100%;
  height: 16px;
  background-color: rgb(50, 50, 50);
  margin-bottom: 10px;
  border-radius: 3px;
  
}

.buttons_container {
  display: flex;
  gap: 10px;
}

.share_btn.skeleton,
.watchlist_btn.skeleton {
  width: 80px;
  height: 27px;
  background-color: rgb(50, 50, 50);
  border: none;
  position: relative;
  overflow: hidden;
}

.trailer {
  background-color: rgb(50, 50, 50);
    border-radius: 10px;
    align-self: stretch;
    width: 30%;
  height: 230px;
  position: relative;
  overflow: hidden;
}


${props => props.media && css`

@media (max-width: ${props.media}px) {

  width: 95%;
  padding: 10px;
  flex-direction: column;

  .trailer {
    border-radius: 10px;
    justify-self: stretch;
    height: 200px;
    width: 100%;
  }
  

  .movie_info_container, {
    width: 100%;
  }
  

  .movie_poster_skeleton {
    align-self: flex-start
  }

`}



`