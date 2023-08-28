
import {styled} from "styled-components"



export const ContactUsContainer = styled.div`

  padding: 20px 20px 0px 20px;
    box-shadow: 0px 0px 1px 0px white;
    width: min(85%, 900px);
     margin: 75px auto;
     animation: form_appear 0.5s ease-in-out forwards;
     font-family: 'Philosopher', sans-serif;

.contact_us_title {
  color: white;
  font-size: 1.5rem;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.232);
}


.contact_form {
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 0px;

}


.submit_button {
  background-color: #f8f8f8;
  border: 2px solid black;
  color: black;
  width: 30%;
  border: none;
  margin: 0px auto;
  cursor: pointer;
  height: 35px;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.2rem;
  animation: submit_button_off 0.2s ease-in-out forwards;
}

.submit_button:hover {
  animation: submit_button 0.2s ease-in-out forwards;
  background-color: black;
  border: 2px solid white;
  color: white;

}

@keyframes submit_button {
  0% {
      transform: scale(1);
  }

  100% {
      transform: scale(1.04);
  }
}

@keyframes submit_button_off {
  0% {
      transform: scale(1.04);
  }

  100% {
      transform: scale(1);
  }
}




.name_field, .email_field, .message_field {
  width: 100%;
}


.name_label {
  color: white;
}

.input_container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0px auto;
  font-size: 0.8rem;
  gap: 5px;
}

#contactSubmitSuccess {
  font-size: 0.8rem;

  color: white;
  text-align: center;
}

.input_fields {
  height: 40px;
  width: 100%;
  border: none;
  background-color: rgb(16, 16, 16);
  color: white;
  text-indent: 3px;
  font-family: 'Philosopher', sans-serif;
  
}

.message_field {
  resize: none;
}


`