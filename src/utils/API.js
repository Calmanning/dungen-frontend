const axios = require ("axios")
//local url communication
const URL_PREFIX = "http://localhost:3030"
//When ready, the deployed site will use the following:
// const URL_PREFIX = "https://quiet-caverns-20153.herokuapp.com"


const API = {

    signup: newUser => {
        console.log(newUser)
        return axios.post(`${URL_PREFIX}/api/newUser`, newUser)
    },
    login: userData => {
        console.log(userData)
        return axios.post(`${URL_PREFIX}/login`, userData)
    },
    getAuthToken: token =>{
        return axios.get(`${URL_PREFIX}/auth`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        })
    },
    getTiles: tiles => {
        console.log(tiles)
        return axios.get(`${URL_PREFIX}/api/tiles`)
    },
    // add USER ID into the query
    getMaps: userId => {
      console.log(URL_PREFIX);
      return axios.get(`${URL_PREFIX}/api/getmaps`)
  }
}

export default API
