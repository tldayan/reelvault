

export const handleSignupApi = async(username,password) => {
    
    try {

        const response = await fetch("http://localhost:3200/signup", {/* http://localhost:3200/signup */
                method : "POST",
                body : JSON.stringify({user : username, pwd : password}),
                headers : {
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })

    /*         alert(response.status) */
           return response.status
            

    } catch (err) {
        return {err : true, message : err.message}
    }

}