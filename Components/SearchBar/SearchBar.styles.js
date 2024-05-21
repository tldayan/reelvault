import styled from "styled-components";

export const StyledSearchBar = styled.div`

  background-color: var(--searchContianerBgColor);
  border-radius: 53px;
  padding: 5px;
  margin: 20px auto 0px auto;
  width: min(80%, 900px);
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow : 0px 0px 1px 1px #ffffff23;

  /* SEARCH RESULTS STYLINGS */
.search_list {
  width: 100%;
  position: absolute;
  top: 120%;
  left: 0;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  border-radius: 10px 0px 0px 10px;
  overflow-y: scroll;
  transition: all 0.5s;
  z-index: 998;
  max-height:0vh;
  box-shadow:none;
  overflow-wrap: break-word;
}


.search_list.active {
  max-height: 80vh;
  padding: 0;
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.458);
}


.search_list::-webkit-scrollbar{
  width: 5px;
}

.search_list::-webkit-scrollbar-thumb {
  background: white;
}

.search_list::-webkit-scrollbar-track {
  background: black;
}



`