import styled from "styled-components";

export const StyledServersContainer = styled.div`

  width: 95%;
  margin: 5px auto;
  padding: 10px;
  gap: 5px;
  display: flex;
  flex-direction : column;
  align-items : center;
  color: #8f8f8f;
  font-family: 'Philosopher', sans-serif;
  border-radius: 10px;
  font-size: clamp(0.5rem, 5vw, 1rem);
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.182);

  .server_buttons_container {
    display : flex;
    gap : 10px;
  }

  button {
    border : none;
    outline : none;
    cursor: pointer;
    padding : 8px;
    text-decoration: none;
    color: var(--categoryTitleColor);
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    font-family: 'Quicksand', sans-serif;
    background-color : transparent;
    font-weight : bold;

  }

  button.active {
    background-color : var(--primary);
    color : var(--background);
  }

  button:hover {
    background-color : var(--primary);
    color : var(--background);
  }

`