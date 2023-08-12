import styled from "styled-components"


export const AboutContainer = styled.div`
border: 1px solid #333;
  background-color: #101010;
/*   border: 1px solid white; */
border-radius: 5px;
padding: 15px;
  width: 95%;
  color: white;
  font-family: 'Philosopher', sans-serif;
  margin: 0 auto;

  .about_title,.faq_title {
  font-size: 2rem;
  margin-bottom: 10px;  
  font-size: clamp(1rem, 10vw, 1.5rem);
}

.about_info {
  font-size: clamp(0.2rem, 3vw, 1.2rem);
}

.api_logos {
/*   border: 1px solid #ff0000; */
  display: flex;
  margin-top: 15px;
  align-items: center;

  gap: 10px ;

}

.tmdb_logo,.embed_logo {
  border: 1px solid #333;
  background-color: #101010;
  padding: 10px;
  border-radius: 5px;
  filter: grayscale(100%);
  width: 50px;
  height: 50px;
}

.tmdb_logo:hover,.embed_logo:hover {
  filter: grayscale(0);
  transition: all 0.5s;
}

.copyright {
  font-size: clamp(0.6rem, 2vw, 1rem)
}

`

export const FaqMainContainer = styled.div`
  border: 1px solid #333;
  background-color: #101010;
  color: white;
  border-radius: 5px;
  padding: 15px;
  width: 95%;
  color: white;
  font-family: 'Philosopher', sans-serif;
  margin: 10px auto;


.faq_container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 10px auto;
}

.faqs {
  border: 1px solid #333;
  border-radius: 5px;
  cursor: pointer;

}

#faq_questions {
  padding: 15px 10px;
}

#faq_answers {
  margin: 0px auto;
  padding: 0px 0px 10px 10px;
  display: none;
}
`