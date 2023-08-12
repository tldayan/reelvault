

import {styled,css} from "styled-components"


export const StyledFilteredMoviesContainer = styled.div`

  border: 1px solid #3333337a;
  background-color: #101010;
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
  width: 95%;
  margin: 10px auto;


  
.category_titles {
  border: 1px solid #333;
  text-align: center;
  padding: 10px 0px;
  font-size: 1.5rem;
  border-radius: 5px;
    background-color: #101010;
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: 'Philosopher', sans-serif;
  color: rgb(228, 228, 228);
}

.filter_buttons_container {
  border: 1px solid #333;
  text-align: center;
  border-radius: 5px;
  margin-top: -15px;
  background-color: #101010;
  font-family: 'Philosopher', sans-serif;
  color: rgb(228, 228, 228);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
}

.filter_buttons {
  font-size: clamp(0.4rem, 3vw, 1rem);
  height: 25px;
  display: block;
  background-color: #2c2c2c;
  color: white;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  font-family: 'Philosopher', sans-serif;
  text-decoration: none;

}

.filter_buttons:hover {
  background-color: black;
}
.filter_buttons.active {
  background-color: rgb(255, 255, 255);
  color: black;
}

${props => props.media && css`

@media (max-width: ${props.media}px) {

    .movietype_container {
    padding: 15px;
  }

}
`}


`