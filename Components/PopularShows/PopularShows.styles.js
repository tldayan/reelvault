import {styled,css} from "styled-components"



export const PopularShowsTypeContainer = styled.div`
    
/*   border: 1px solid #3333337a;
  background-color: #101010; */
  border-radius: 5px;
  padding: 0px 20px;
  overflow: hidden;
  width: 95%;
  margin: 10px auto 40px auto;


.movielist_container {
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px 10px;
  width: 100%;
  margin: 0 auto;
}
    
.category_titles {
/*   border: 1px solid #333; */
  font-size: clamp(0.6rem, 5vw, 1.5rem);
display: flex;
align-items :center;
  text-align: center;
  padding: 10px 10px;
/*   font-size: 1.5rem; */
  border-radius: 5px;
   /*  background-color: #101010; */
  margin-top: 5px;
  margin-bottom: 20px;
  font-weight: normal;
  font-family: 'Quicksand', sans-serif;
  color: var(--categoryMainTitleColor);
}


.sort_container {
  display: flex;
  margin-left:auto;
  position: relative;
}

.sort_button {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: var(--primary);
  padding: 2px 10px;
  border-radius: 3px;
  color: var(--background);
  font-weight: bold;
font-family: 'Quicksand', sans-serif;
  font-size: clamp(0.6rem, 1vw, 0.8rem);
  letter-spacing: 1px;
}

.sort_options {
  background-color: #101010;
  color: white;
  border: none;
  border-radius: 3px;
  outline: none;
  padding: 4px;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  font-size: clamp(0.6rem, 1vw, 0.8rem);
}
.sort_options.active {
  background-color: black;
}

.sort_options:hover {
  background-color: white;
  color: black;
}

.selectedSort {
  background-color: white;
  color: black;
}



.sort_list {
  background-color: #101010;
  border-radius: 5px;
  display: flex;
  width: 100px;
  gap: 3px;
  top: 130%;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  position: absolute;
  z-index: 999;
  max-height: 0px;
  overflow: hidden;
  transition: all 0.5s;
}

.sort_list.active {
  max-height: 150px;
  padding: 5px 5px;
  border: 1px solid #858585;
}




${props => props.media && css`

@media (max-width: ${props.media}px) {

    .movietype_container {
    padding: 15px;
  }

  .movielist_container {
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
}

}
`}

`
