

export const deleteUserShowDetails = (username,showId) => {

  try {

    const deleteUserShowDetailsReq = fetch("http://localhost:3200/deleteUserShowDetails", {
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({username : username, showId : showId}),
      method : "DELETE",
      credentials : "include"
    })

    return deleteUserShowDetailsReq.status

  } catch (err) {
      console.log(err.message)
  }
}