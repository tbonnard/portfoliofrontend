import axios from 'axios'

const baseUrl = 'https://tbonnard.pythonanywhere.com/api/'


// No need for the portfolio
// const createAccount = async (accountObject) => {
//   const response = await axios.post(`${baseUrl}register/`, accountObject)
//   return response.data
// }

// const checkUsername = async (username) => {
//   const response = await axios.get(`${baseUrl}validate_username/${username}`)
//   if (response.data.message === "username available") {return true} else {return false}
// }

const userDetails = async () => {
  const loggedUserJSON = window.localStorage.getItem('jwtTk')
  const csrftoken = window.localStorage.getItem('csrftoken')
  const response = await axios.get(`${baseUrl}user`,
  {
    headers: {
      Authorization: `Bearer ${loggedUserJSON}`, // Send the token with the request
      'X-CSRFToken': csrftoken
    }
  }, {withCredentials:true})
  return response.data
}


const exportedObject = { userDetails }

export default exportedObject


