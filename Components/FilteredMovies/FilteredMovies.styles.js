

import {styled,css} from "styled-components"


export const StyledFilteredMoviesContainer = styled.div`

 /*  border: 1px solid #3333337a; */
/*   background-color: #101010; */
  border-radius: 5px;
/*   padding: 10px; */
  overflow: hidden;
  width: 95%;
  margin: 10px auto;


  
.category_titles {
  /* border: 1px solid #333; */
  text-align: center;
  padding: 10px 0px;
  font-size: 1.5rem;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: 'Philosopher', sans-serif;
  color: rgb(228, 228, 228);
}

.filter_buttons_container {
/*   border: 1px solid #333; */
  text-align: center;
  border-radius: 5px;
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
  color: #c9c9c9;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  font-family: 'Philosopher', sans-serif;
  text-decoration: none;

}

.filter_buttons:hover {
  background-color: rgba(208, 208, 208, 0.103);
  transition: all 0.5s
}
.filter_buttons.active {
  background-color: rgba(208, 208, 208, 0.103);
}

${props => props.media && css`

@media (max-width: ${props.media}px) {

    .movietype_container {
    padding: 15px;
  }

}
`}


`