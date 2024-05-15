import {styled,css} from 'styled-components';


export const StyledSliderContainer= styled.div`

/* border: 1px solid aqua; */
/* height: 40vh; */
width: 100%;


img {
/*   box-shadow: 10px 10px 10px black; */
  object-fit : cover;
  object-position : center;
  width : 100%; 
  height: 100%;
  display : block;
}

.image_container {
 /*  border: 2px solid red; */
  width: 100%;
  height : 60vh;
  display : flex;
}

.black_shadow {
  position: absolute;
  position : absolute;
  top : 0;
  height : 100px;
  left : 0;
  width: 100%;
  background: var(--movieSliderShadow);
}


.trailer_content {
/*   border: 2px solid red; */
  position : absolute;
  bottom : 0%;
  padding : 20px 0 20px 3vw;
  left : 0%;
  color : red;
  width: 100%;
 display : flex;
 flex-direction : column;
 align-items : flex-start;
  gap: 5px;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(52, 52, 52, 0));
}

.popular_ranking {
  font-size: clamp(0.6rem, 1vw, 1.3rem);
  opacity: 0.8;
  padding: 0 0 5px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Quicksand', sans-serif;
}

.trailer_title {
  font-size: clamp(1rem, 4vw, 3rem);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow : hidden;
  text-overflow : ellipsis;
}

.trailer_info {
  font-size: clamp(0.4rem, 1vw, 1.1rem);
  opacity: 0.8;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.161);
  backdrop-filter: blur(10px);
  padding: 5px;
  width : 50%;
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Quicksand', sans-serif;
  font-style : italic;
}


.watch_trailer_btn {
  font-size: clamp(0.7rem, 2vw, 1rem);
  text-decoration: none;
  color: white;
  text-align: center;
/*   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
  background-color: transparent;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.338);
  border-radius: 3px;
  padding : 10px 15px;
 /*  display : inline-block; */
  border: 1px solid white;
  color: rgb(255, 255, 255);
  font-family: 'Quicksand', sans-serif;
  white-space : nowrap;
  display : flex;
  align-items : center;
  justify-content : center;
  gap : 7px;
}





.play_button {
  filter: invert(1);
  width: 15px;
/* width : 20%; */

}

.watch_trailer_btn:hover {
  background-color: white;
  transition: all 0.4s;
  backdrop-filter: none;
  color: black;
  text-shadow : none;
}

.watch_trailer_btn:hover > .play_button {
  filter : invert(0);
  transition: all 0.5s;
}



.trailer_info:hover {
  transform: scale(1.01);
  transition: all 0.8s;
}



${props => props.media && css`


@media (max-width: ${props.media}px) {

  .image_container {
    height : 30vh;
  }

  
  .trailer_info {
    display : none;
  }

  .play_button {
  width: 10px;
/* width : 20%; */

}


.watch_trailer_btn {
  padding : 6px 8px;
}


}




`}


















`