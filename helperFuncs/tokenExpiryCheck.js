

const checkTokenExpiry = () => {

  const currentTime = new Date.now()

  const jwtAccess = localStorage.getItem("jwt_access")
  const jwtRefresh = localStorage.getItem("jwt_refresh")
  const isJwtAccessExpired = undefined
  const isJwtRefreshExpired = undefined
  const accessToken = undefined
  const refreshToken = undefined
  
  if(jwtAccess) {
    if(currentTime > JSON.parse(jwtAccess.expires)) {
      isJwtAccessExpired = true
      localStorage.removeItem("jwt_access")
    } else {
      isJwtAccessExpired = false
      accessToken = jwtAccess.token
    }
  }

  if(jwtRefresh) {
    if(currentTime > JSON.parse(jwtRefresh.expires)) {
      isJwtRefreshExpired = true
      localStorage.removeItem("jwt_refresh")
    } else {
      isJwtRefreshExpired = false
      refreshToken = jwtRefresh.token
    }
  }
  
  return {isJwtAccessExpired,isJwtRefreshExpired,accessToken,refreshToken}

}

export default checkTokenExpiry