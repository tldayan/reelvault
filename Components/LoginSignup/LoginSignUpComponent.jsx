"use client"
import React, {useRef, useState } from 'react'
import { StyledLoginSignUpContainer } from "./LoginSignUp.styles"
import { handleLogin } from '../APIs/Authentication/login'
import { handleSignupApi } from '../APIs/Authentication/signup'

export default function LoginSignupComponent({authType,setAuthType,setIsUserLogged}) {

    const loginSignupContainer = useRef(null)
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [serverResponseLoading,setServerResponseLoading] = useState(false)
    const [serverMsg,setServerMsg] = useState(null)


const handleAuth = async(e) => {
  e.preventDefault()

  setServerResponseLoading(true)
    
  if(authType === "login") {

    let loginResponse = await handleLogin(username,password)

    if(loginResponse === 200) {
      localStorage.setItem("isUserLogged", true);
      localStorage.setItem("userInfo", JSON.stringify({username : username})) 
      setIsUserLogged(true)
      setServerMsg(null)
      setAuthType(undefined)
      window.location.reload()

    } else if (loginResponse === 404) {
      setServerMsg("Your are not a registered user")
    } else if (loginResponse === 401) {
      setServerMsg("Wrong username or password")
    } else {
      setServerMsg("Could not reach Reelvault")
    }

  } else { // if user is signing up

    let signupResponse = await handleSignupApi(username,password)


    if(signupResponse === 400) {
      setServerMsg("Username and password are required")
    } else if (signupResponse === 409) {
      setServerMsg("You're already a registerd user")
    } else {
      setServerMsg("User registration complete")

      let loginResponse = await handleLogin(username,password)

    if(loginResponse === 200) {
      localStorage.setItem("isUserLogged", true);
      localStorage.setItem("userInfo", JSON.stringify({username : username})) 
      setIsUserLogged(true)
      setServerMsg(null)
      setAuthType(undefined)
      window.location.reload()
    } else {
      setServerMsg("Could not log in the user")
    }

    }

  }

  setServerResponseLoading(false)
}


/* 
    useEffect(() => {

 const bodyElement = document.querySelector("body") 

        if(!isUserAuth) {
            loginSignupContainer.current.style.opacity = 0
            loginSignupContainer.current.style.pointerEvents = "none"
            overlay.current.style.visibility = "hidden"
            bodyElement.style.overflow = "visible"

        } else {
            loginSignupContainer.current.style.opacity = 1
            loginSignupContainer.current.style.pointerEvents = "auto"
            overlay.current.style.visibility = "visible"
            bodyElement.style.overflow = "hidden"
        }

    },[isUserAuth])

    const handleAuthClose = () => {
      dispatch(AuthStateSliceActions.setAuth())
    }

 */
  return (
    <>
   
    <StyledLoginSignUpContainer ref={loginSignupContainer}>
      <>
              <button onClick={() => setAuthType(undefined)} href="/" className={"close_modal_button"}>&#x2716;</button>
                      <h3 className={"auth_type"}>{serverResponseLoading && authType === "login" ? "Logging..." : serverResponseLoading && authType === "signup" ? "Signing Up" : !serverResponseLoading && authType === "login" ? "Log In" : "Sign Up"}</h3>
              {serverResponseLoading ? <div className='load_animation_black'></div> : <form className={"login_signup_container"} onSubmit={handleAuth}>
                <div className={"username_container"}>
                  <label htmlFor="user_name">Username</label>
                  <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username"  placeholder='Enter username' id="user_name" required />
                </div>
                <div className={"password_container"}>
                  <label htmlFor="user_password">Password {/* {islogin && <span className={"forgot_password"}>Forgot password?</span>} */}</label>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder='Enter password' id="user_password" required />
                </div>
                <p className='server_msg'>{serverMsg}</p>
                <button className={"loginSignup_btn"}>{authType === "login" ? "Login" : "Sign up"}</button>
                {authType === "login" ? <a onClick={() => setAuthType("signup")} className={"no_account"} >Don&apos;t have an account? Sign up.</a> : <a onClick={() => setAuthType("login")} className={"existing_account"} >Already have an account? Log in.</a>}
              </form>}
    </>
                
    </StyledLoginSignUpContainer>
    </>
  )
}
