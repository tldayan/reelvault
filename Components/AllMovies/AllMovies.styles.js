
import {styled} from "styled-components"


export const TrailerContainer = styled.div`

position: relative;



video {
  width: 100%;
  display: block;

}

.trailer_content {
  position: absolute;
  bottom: 10%;
  left: 4%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
}

.trailer_title {
  font-size: clamp(1rem, 6vw, 6rem);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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

`

export const CategoryButtonsContainer = styled.div`
  border: 1px solid #3333337a;
  background-color: #101010;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  width: 95%;
  margin: 30px auto 0px auto;
  align-items: center;
  gap: 10px;
  justify-content: space-evenly;

  
.category_buttons {
  border: 1px solid rgba(51, 51, 51, 0.779);
  background-color: #101010;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  text-decoration: none;
  padding: 5px 15px;
  text-align: center;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: clamp(0.3rem, 2.5vw, 1rem);
  font-family: 'Philosopher', sans-serif;
}
.category_buttons:hover {
  background-color: white;
  color: black;
}
.category_buttons.active{
  background-color: white;
  color: black;
}


`