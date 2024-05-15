

export const handleLogoutApi = async() => {
  
    try {
      
        const response = await fetch("http://localhost:3200/logout", {
          method : "POST",
          credentials : "include"
        })
       /*  console.log(response.status) */
       /*  console.log(response.status) */
        return response.status

      } catch (err) {
        return {err : true, message : err.message}
      }
}





/* const handleLogout = async() => {

    if(isUserLogged) {

      try {
        const response = await fetch("http://localhost:3200/logout", {
          method : "POST",
          credentials : "include"
        })

        if(response.ok) {
          alert("Logged out")
          localStorage.setItem("isUserLogged", false); 
          setIsUserLogged(false)
        }

      } catch (err) {
        alert(err.message)
      }
    }
  } */