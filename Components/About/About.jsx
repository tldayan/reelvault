import React, { useEffect, useState } from 'react'
import tmdbLogo from "../../assets/tmdb_logo.svg"
import embedLogo from "../../assets/2embed.png"
import {AboutContainer} from "./About.styles"
import { FaqMainContainer } from './About.styles'

export default function About() {
    const [isOpen, setIsOpen] = useState(true);
  
    function showAnswer(classname) {
        
      const answerElement = document.querySelector(
        `.${classname.replace('question', 'answer')}`
      );
  
      if (!isOpen) {
        answerElement.style.display = 'none';
        setIsOpen(true);
      } else {
        answerElement.style.display = 'block';
        setIsOpen(false);
      }
    }


    useEffect(() => {
      window.scrollTo(0,0)
    },[])

  return (
    <>
        <AboutContainer>
            <h1 className='about_title'>About</h1>
            <p className='about_info'>Welcome to ReelVault, the movie streaming website that brings cinematic magic to your screen. By integrating the TMDB and 2Embed APIs, we provide an extensive database of movies, ensuring up-to-date information on titles, summaries, ratings, and genres. With the seamless integration of 2Embed, you can enjoy embedded movie trailers and videos, enhancing your browsing experience. Explore our vast library, make informed choices, and embark on an unforgettable cinematic journey at ReelVault.</p>
            <div className='api_logos'>
                <img className='tmdb_logo' src={tmdbLogo} alt="" />
                <img className='embed_logo' src={embedLogo} alt="" />
            </div>
        </AboutContainer>
        <FaqMainContainer>
            <h1 className='faq_title'>FAQ</h1>
            <div className='faq_container'>
                <div className='faqs faq_question_1_container'>
                   <h4 onClick={(e) => showAnswer(e.target.className)}  className='faq_question_1' id='faq_questions'>What is ReelVault?</h4>
                    <p className='faq_answer_1' id='faq_answers'>ReelVault is a movie streaming website that offers a wide range of movies for users to watch online. We provide a collection of titles from various genres and ensure up-to-date information on movies, including summaries, ratings, and genres.</p>
                </div>
                <div className='faqs faq_question_2_container'>
                   <h4 onClick={(e) => showAnswer(e.target.className)}  className='faq_question_2' id='faq_questions'>How does ReelVault work?</h4>
                    <p className='faq_answer_2' id='faq_answers'>ReelVault integrates the TMDB and 2Embed APIs to gather movie data and provide a seamless streaming experience. Our extensive database allows users to search and browse movies easily. By integrating 2Embed, we also provide embedded movie trailers and videos for enhanced browsing.</p>
                </div>
                <div className='faqs faq_question_3_container'>
                   <h4 onClick={(e) => showAnswer(e.target.className)}  className='faq_question_3' id='faq_questions'>Do I need to create an account to use ReelVault?</h4>
                    <p className='faq_answer_3' id='faq_answers'>No, you do not need to create an account to use ReelVault. Our website allows users to browse and watch movies without the requirement of creating an account.</p>
                </div>
                <div className='faqs faq_question_4_container'>
                   <h4 onClick={(e) => showAnswer(e.target.className)}  className='faq_question_4' id='faq_questions'>Is ReelVault available in multiple languages?</h4>
                    <p className='faq_answer_4' id='faq_answers'>Currently, ReelVault primarily supports the English language. However, we are working on expanding our language options to provide a more inclusive streaming experience in the future.</p>
                </div>
            </div>
        </FaqMainContainer>
    </>
  )
}
