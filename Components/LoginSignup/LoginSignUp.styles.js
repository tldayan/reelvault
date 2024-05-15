import {styled,css} from "styled-components"


export const StyledLoginSignUpContainer = styled.div`

/* LOGIN & SIGNUP  */
/* border: 1px solid red; */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 10px 0px rgba(107, 107, 107, 0.179);
    background-color: #f0f0f0;
    color: black;
    width: min(90%, 400px);
    padding: 5px 10px 20px 10px;
    border-radius: 5px;
/*     min-height: 320px; */
 /*    opacity: 0; */
   /*  pointer-events: none; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-family: "Quicksand", sans-serif;
    z-index: 99999999999;
    transition: all ease 0.3s;
  
  .close_modal_button {
    background-color: transparent;
    border: none;
    font-size: 1.1rem;
    outline: none;
    opacity: 0.6;
    margin-left: auto;
    cursor: pointer;
    text-align: right !important;
  }

  .auth_type {
    color: rgb(0, 0, 0);
  }
  
  .login_signup_container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 15px;
  }
  
  .server_msg {
    color: red;
    margin: 0 auto;
    text-shadow: 1px 1px 1px #05050510;
  }


  .forgot_password {
    float: right;
    cursor: pointer;
    transition: all ease 0.3s;
  }
  
  .forgot_password:hover {
    color: var(--accent);
  }
  
  .username_container {
    display: flex;
    flex-direction: column;
  }
  .username_container label {
    width: 90%;
    margin: 0 auto;
    font-size: 0.7rem;
  }
  .username_container input,.password_container input {
    height: 40px;
    border: none;
    text-indent: 5px;
    outline: none;
    background-color: #e4e4e4;
    width: 90%;
    margin: 0 auto;
    margin-top: 5px;
  }
  .username_container input:hover, .password_container input:hover {
    background-color: #e0e0e0;
  }
  
  .password_container {
    display: flex;
    flex-direction: column;
  }
  .password_container label {
    width: 90%;
    margin: 0 auto;
    font-size: 0.7rem;
  }

  
  .loginSignup_btn {
    background-color: rgb(31, 31, 31);
    color: white;
    width: 30%;
    margin: 0 auto;
    border: none;
    outline: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    transition: all ease 0.4s;
  }
  
  .loginSignup_btn:hover {
    background-color: rgba(0, 0, 0, 0.73);
  }
  
  .no_account, .existing_account {
    text-decoration: none;
    font-size: 0.8rem;
    margin: 0 auto;
    transition: all ease 0.3s;
    margin-top: 15px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.514);
  }
  
  .no_account:hover, .existing_account:hover {
    text-decoration: underline;
    color: black;
  }

/*   .dark_overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999999;
    background-color: rgba(0, 0, 0, 0.564);
    visibility: hidden;
  } */
  



`