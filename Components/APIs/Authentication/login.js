


export const handleLogin = async (username,password) => {

    try {

        const response = await fetch("http://localhost:3200/login", {
            method : "POST",
            body : JSON.stringify({user : username, pwd : password}),
            headers : {
              "Content-Type" : "application/json"
            },
            credentials : "include"
          })
  
            return response.status

         } catch (err) {
          return {err : true, message : err.message}
      }



}
/* const handleAuth = async(e) => {
    e.preventDefault()
      
    if(authType === "login") {
  
      setServerResponseLoading(true)
  
      try {
  
        const response = await fetch("http://localhost:3200/login", {
            method : "POST",
            body : JSON.stringify({user : username, pwd : password}),
            headers : {
              "Content-Type" : "application/json"
            },
            credentials : "include"
          })
  
          if(response.ok) {
            
            localStorage.setItem("isUserLogged", true); 
            setIsUserLogged(true)
  
          } else if(response.status === 401) {
            setServerMsg("User should register")
          }
  
         } catch (err) {
          setServerMsg("Failed to reach the Reelvault")
      }
  
    }
  
    setServerResponseLoading(false)

  
  } */