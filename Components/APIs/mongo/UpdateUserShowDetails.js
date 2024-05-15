

export const UpdateUserShowDetails = async(userDetails,username) => {

    try {

        const userShowDetails = await fetch("http://localhost:3200/postUpdateUserShowDetails", {
                method : "POST",
                body : JSON.stringify({ showDetails : userDetails, username : username}),
                headers : {
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })

            
            return userShowDetails.status

    } catch (err) {

        console.log(err.message)

    }

    


}