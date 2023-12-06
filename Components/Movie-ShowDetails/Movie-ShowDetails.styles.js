
import {css, styled} from "styled-components"

export const MovieDetailsContainer = styled.div`
/* background-color: #101010; */
background-color: #0b0b0b;
/*   border: 1px solid red; */
  width: 95%;
  margin: 20px auto;
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: #8f8f8f;
  font-family: 'Philosopher', sans-serif;
  border-radius: 10px;
  font-size: clamp(0.5rem, 5vw, 1rem);
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.182);


  .trailer {
    border: 1px solid rgba(86, 86, 86, 0.582);
    border-radius: 10px;
    align-self: stretch;
    width: 50%;
   /*  box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.068); */
  }

.movie_details_poster {
  /* border: 1px solid red; */
  width: 150px;
  height: auto;
  align-self: flex-start;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.251);
}

.movie_title {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  color: white;
}

.movie_overview {
 margin-bottom: 10px;

}

.movie_info_container {
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  
}
.show_info_container {
/*   border: 1px solid rgb(255, 255, 255); */
  width: 70%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
}




.movie_stats_container {
/*   border: 1px solid white; */
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 20px ;
}
.first_stats_container,.second_stats_container {
  display: flex;
  flex-direction: column;
  gap: 5px ;
/*   border: 1px solid white; */
}

.first_stats_container {
  align-self: stretch;
}

.second_stats_container {
  align-self: stretch;
}


${props => props.media && css`

@media (max-width: ${props.media}px) {

  width: 95%;
  padding: 10px;
  flex-direction: column;

.movie_details_poster {
  align-self: flex-start;
}

.movie_stats_container {
  width: 100%;
}

.first_stats_container,.second_stats_container {
  width: 50%;
}

.trailer {
    border-radius: 10px;
    justify-self: stretch;
    height: 200px;
    width: 100%;
  }

}
`}

`

export const ShowDetailsContainer = styled.div`

/* border: 1px solid #333; */
background-color: #0b0b0b;
  width: 95%;
  margin: 20px auto;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  color: #8f8f8f;
  font-family: 'Philosopher', sans-serif;
  border-radius: 10px;
  font-size: clamp(0.5rem, 5vw, 1rem);
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.182);

.movie_details_poster {
/*   border: 1px solid red; */
  width: 150px;
  height: auto;
  align-self: flex-start;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.251);
}

.movie_title {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  color: white;
}

.movie_overview {
 margin-bottom: 10px;

}

.movie_info_container {
/*   border: 1px solid rgb(255, 255, 255); */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  
}
.show_info_container {
/*   border: 1px solid rgb(255, 255, 255); */
  width: 70%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
}




.movie_stats_container {
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 20px ;
}
.first_stats_container,.second_stats_container {
  display: flex;
  flex-direction: column;
  gap: 5px ;
  /* border: 1px solid white; */
}

.first_stats_container {
  align-self: stretch;
   order:1;
}

.second_stats_container {
  align-self: stretch;  

}

.show_info_container {
/*   border: 1px solid rgb(255, 255, 255); */
  width: 70%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
}

.main_season_list_container {
/*   border: 1px solid white; */
margin-top: 0px;
  height: 20%;
position: relative;
}

.shows_list_container {
/*   border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 30%;
  height: 230px;
  align-self: stretch;
}


.season_list_container {
  border: 1px solid #333;
  background-color: #101010;
  position: absolute;
  top: 55px;
  left: 50%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transform: translateX(-50%);
  box-shadow: 0px 0px 25px 0px rgb(0, 0, 0);
  max-height: 160px;
  overflow-y: scroll;
  border-radius: 5px;
  width: 90%;
  list-style-type: none;
  transition: all ease 0.7s;
}

.season_list_container.hide {
  max-height: 0px;
  pointer-events: none;
  visibility: hidden;
  padding: 0px;
}



.season_list_container::-webkit-scrollbar-thumb {
  background-color: rgb(58, 58, 58);
  border-radius: 0px 5px 5px 0px;
}

.season_list_container::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.701);
  border-radius: 0px 5px 5px 0px;
}

.season_list_container::-webkit-scrollbar {
  width: 4px;
}

.seasons_button {
  border: 1px solid #333;
  background-color: #6f6f6f44;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
.seasons_button:hover {
  background-color: white;
  color: #101010;
}

.season_button {
  border: none;
  background-color: #101010;
    border-radius: 5px;
  white-space: nowrap;
  font-weight: bold;
  width: 100%;
  height: 30px;
  color: white;
  cursor: pointer;
  transition: all ease 0.4s;
}
.season_button:hover {
  background-color: #ffffff;
  color: #101010;
}
.season_button.active {
  background-color: #00ff00;
  color: #101010;
}

.main_episode_list_container {
  border: 1px solid #333;
/*   border: 1px solid white; */
border-radius: 5px;
  height: 80%;
  padding: 5px;
  overflow-y: scroll;
}



.main_episode_list_container::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255);
  border-radius: 10px 0px 0px 10px;
}


.main_episode_list_container::-webkit-scrollbar {
  width: 6px;
}





/* EPISODE CONTAINER */
.episode_list_container {
  margin-top: 10px;
/*   border: 1px solid aqua; */
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px  ;
  list-style-type: none;
}

.episode_buttons {
  border: 1px solid #333;
  background-color: #101010;
  white-space: nowrap;
  width: 100%;
  height: 40px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  outline: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: clamp(0.4rem, 3vw,0.7rem);
}

.episode_buttons:hover {
  background-color: white;
  color: #101010;
}

.episode_buttons.active {
  background-color: #00ff00;
  color: #101010;
}



${props => props.media && css`

@media (max-width: ${props.media}px) {

  width: 95%;
  padding: 10px;
  flex-direction: column;

.movie_details_poster {
  align-self: flex-start;
}

.movie_stats_container {
  width: 100%;
}

.first_stats_container,.second_stats_container {
  width: 50%;
}

.show_info_container {

      width: 100%;

    }

  .shows_list_container {
      width: 100%;
    }


}

.main_season_list_container {

margin-top: 5px;

}




`}

`