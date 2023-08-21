import {styled,css} from "styled-components"



export const PopularShowsTypeContainer = styled.div`
    
/*   border: 1px solid #3333337a;
  background-color: #101010; */
  border-radius: 5px;
  padding: 0px 20px;
  overflow: hidden;
  width: 95%;
  margin: 10px auto;


.movielist_container {
/*   border: 1px solid rgb(0, 255, 166); */
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px 10px;
  width: 100%;
  margin: 0 auto;
}
    
.category_titles {
/*   border: 1px solid #333; */
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

.pagination {
  border: 1px solid #3333337a;
  border-radius: 5px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px ;
  margin: 50px auto 0px auto;
  padding: 10px;
  
}

.page_buttons {
  border: 1px solid #3333337a;
  background-color: #101010;
  border-radius: 5px;
  padding: 10px;
  color: white;
  cursor: pointer;
  font-family: 'Philosopher', sans-serif;
}

.page_buttons:hover {
  background-color: rgb(255, 255, 255);
  color: black;
  transition: all 0.5s;
}

.selectedPageButton {
  background-color: rgb(255, 255, 255);
  color: black;
  transition: all 0.5s;
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
