
import {styled,css} from "styled-components"


export const TrailerContainer = styled.div`
 /*  border: 1px solid red; */
position: relative;
display: flex;
align-items: center;
justify-content: center;


@media (prefers-color-scheme: dark) {

  .cinema_bg {
  box-shadow: none;
}

.video_shadow {
  box-shadow: none;
}


}





.trailer_container {
/*   border: 1px solid aqua; */
  width: 46%;
  height: 31%;
  position: absolute;
  top: 10%;
  z-index: 9999999999999999;
  border-radius: 10px;
}


.cinema_bg {
/*   border: 1px solid aqua; */
  width: 90%;
  filter: hue-rotate(10deg) saturate(3) brightness(0.3) contrast(1) blur(2px);
  background-color: gold;
  margin: 0 auto;
  box-shadow: -1px -1px 10px 25px black;
}

video {
  opacity: 0.8;
  border-radius: 10px;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  display: block;
  z-index: 9999999;
}

.video_shadow {
  position: absolute;
  width: 100%;
  height: 121.4%;
  top: 0;
  z-index: 99999999;
  box-shadow: inset 0px 0px 10px 10px rgba(0, 0, 0, 1);
  
}
  
.trailer_content {
  position: absolute;
  bottom: 7%;
  left: 2%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: white;
}

.trailer_title {
  font-size: clamp(1.2rem, 4vw, 6rem);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  z-index: 9999999999;
}

.trailer_info {
  font-size: clamp(0.4rem, 1vw, 1.3rem);
  opacity: 0.8;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.161);
  backdrop-filter: blur(10px);
  padding: 5px;
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Quicksand', sans-serif;
}


.watch_trailer_btn {
  font-size: clamp(0.4rem, 2vw, 1.5rem);
  text-decoration: none;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: transparent;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.338);
  border-radius: 5px;
  padding: 5px;
  width: 20%;
  color: rgb(255, 255, 255);
  font-family: 'Quicksand', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px ;
}




.play_button {
  filter: invert(1);
  width: 13%;
}

.watch_trailer_btn:hover {
  background-color: black;
  transition: all 0.8s;
  backdrop-filter: none;
  color: white;
  transform: scale(1.1);
  
}
.trailer_info:hover {
  transform: scale(1.01);
  transition: all 0.8s;
}



${props => props.media && css`

@media (max-width: ${props.media}px) {


  .watch_trailer_btn {
    gap: 4px
  }

  .play_button {
      filter: invert(1);
      width: 20%;
    }

}
`}


`

export const CategoryButtonsContainer = styled.div`

/*   border: 1px solid #3333337a;
  background-color: #101010; */
  border-radius: 5px;
  padding: 10px;
  display: flex;
  width: 95%;
  margin: 30px auto 0px auto;
  align-items: center;
  gap: 10px;
  justify-content: space-evenly;

  
.category_buttons {
/*   border: 1px solid rgba(51, 51, 51, 0.779);
  background-color: #101010; */
  text-decoration: none;
  color: rgba(211, 211, 211, 1);
  text-decoration: none;
  padding: 5px 15px;
  text-align: center;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: clamp(0.3rem, 2.5vw, 1rem);
  font-family: 'Quicksand', sans-serif;
}

.category_buttons:hover {
  background-color: rgba(208, 208, 208, 0.103);
  transition: all 0.5s
/*   color: black; */
}
.category_buttons.active{
  background-color: rgba(208, 208, 208, 0.103);
/*   color: black; */
}






`