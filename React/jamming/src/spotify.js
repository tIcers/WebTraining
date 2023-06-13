let accessToken = ''
let expiresIn = 0

const Spotify ={
  getAccessToken () {
    if (accessToken) {
      return accessToken
    }


    const urlAccessToken = window.location.href.match(/access_token=([^&*])/)
    const urlExpireIn = window.location.href.match(/expires_in=([^&*])/)

    if(urlAccessToken && urlExpireIn) {
      accessToken = urlAccessToken[1]
    }
  }


}
