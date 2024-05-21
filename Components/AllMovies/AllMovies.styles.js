
import {styled,css} from "styled-components"


export const TrailerContainer = styled.div`
/*   border: 2px solid red; */
position: relative;
height: 600px;
width: 100%;



${props => props.media && css`

@media (max-width: ${props.media}px) {

  height : auto;

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
  color: var(--categoryTitleColor);
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
  margin-top: 10px;
}

.category_buttons:hover {
  background-color: var(--categoryTitleHoverBg);
  transition: all 0.5s;
/*   color: black; */
}
.category_buttons.active{
  background-color: var(--categoryTitleHoverBg);
/*   color: black; */
}





`