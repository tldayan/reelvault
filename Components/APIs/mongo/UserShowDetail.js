

export const getUserShowDetails = async(username) => {

    
    const userShowDetailsResponse = await fetch(`http://localhost:3200/getUserShowDetails?username=${username}`, {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        },
        credentials : "include"
    })
    
    if(userShowDetailsResponse.status === 200) {
    
        const data = await userShowDetailsResponse.json()

        return data.userShowsData

    } else if (userShowDetailsResponse.status === 404) {

        return userShowDetailsResponse.status

    } else {
        console.log('Database error')
    }

}