import styled from "styled-components";



export const ExistingShowModalContainer = styled.div`

position : fixed;
top : 50%;
left : 50%;
transform : translate(-50%,-50%);
width : min(90%, 400px);
height : 190px;
border-radius : 10px;
background-color: #101010;
display: flex;
flex-direction : column;
align-items : center;
justify-content : center;
box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.208);
gap : 10px;
color : white;
font-size: clamp(0.5rem, 3vw, 1rem);
font-family: 'Quicksand', sans-serif;
transition : all 0.5s;
z-index: 1000;


.confirmation_btn_container {
    display: flex;
    flex-direction : row;
    gap : 30px;
    margin-top : 10px;
}


button {
    outline : none;
    border : none;
    background-color: #000000;
    color: white;
    border: 1px solid white;
    width : 60px;
    height : 30px;
    border-radius : 2px;
    cursor: pointer;
    transition : all 0.5s;
}
button:hover {
    background-color: white;
  color: #000000;
}

`