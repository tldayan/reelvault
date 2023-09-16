import {styled} from "styled-components"



export const StyledReviewContainer = styled.div`


background-color: #0b0b0b;
  width: 95%;
  margin: 30px auto;
  padding: 5px 10px;
  color: #8f8f8f;
  font-family: 'Philosopher', sans-serif;
  border-radius: 10px;
  font-size: clamp(0.5rem, 5vw, 1rem);
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.182);

.review_title {
   /*  text-align: center; */
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 5px;
    background-color: #101010;
  margin-top: 5px;
  margin-bottom: 20px;
  font-weight: normal;
  font-family: 'Quicksand', sans-serif;
  color: rgb(228, 228, 228);
  display: flex;
  align-items: center;
}

.latest_button {
/*   margin-left: auto; */
  border:none;
  outline: none;
  height: 20px;
  background-color : white;
  padding: 5px 12px;
  border-radius: 15px;
  font-weight:bold;
  cursor: pointer;
  display: flex;
  align-items:center;
  justify-content:center;
  font-family: 'Quicksand', sans-serif;
  font-size: clamp(0.6rem, 2vw, 0.8rem);
  background-color: #1f1f1f;
  color: white;
  letter-spacing: 1px;
  transition: all 0.3s;
}

.latest_button:hover {
  color: #1f1f1f;
  background-color: white;
}

.latest_button.active {
  color: #1f1f1f;
  background-color: white;
}


.best_button {
  margin-left: 10px;
  border:none;
  outline: none;
  height: 20px;
  background-color : white;
  padding: 5px 12px;
  border-radius: 15px;
  font-weight:bold;
  cursor: pointer;
  display: flex;
  align-items:center;
  justify-content:center;
  font-family: 'Quicksand', sans-serif;
  font-size: clamp(0.6rem, 2vw, 0.8rem);
  background-color: #1f1f1f;
  color: white;
  letter-spacing: 1px;
  transition: 0.3s all;
}

.best_button:hover {
  color: #1f1f1f;
  background-color: white;
}

.best_button.active {
  color: #1f1f1f;
  background-color: white;
}

.sortby {
  margin-left: auto;
  font-size: clamp(0.6rem, 2vw, 0.8rem);
  margin-right: 10px;
}


.comments_list {
/*     border: 1px solid red; */
    display:flex;
    flex-direction: column;
    gap: 20px;
    max-height:300px;
    overflow-y: scroll;
}

.comments_list::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.701);
  border-radius: 5px 0px 0px 5px;
}

.comments_list::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 0px 5px 5px 0px;
}

.comments_list::-webkit-scrollbar {
  width: 4px;
}

`