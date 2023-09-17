import {styled,css} from "styled-components"



export const CategoryMovieTypeContainer = styled.div`
    
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
  text-align: center;
  padding: 10px 0px;
  font-size: 1.5rem;
  border-radius: 5px;
    background-color: #101010;
  margin-top: 5px;
  margin-bottom: 20px;
  font-weight: normal;
  font-family: 'Quicksand', sans-serif;
  color: rgb(228, 228, 228);
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
