import axios from 'axios'

const baseUrl = 'https://tbonnard.pythonanywhere.com/api/'


// No need for the portfolio
const createAccount = async (accountObject) => {
  const response = await axios.post(`${baseUrl}register/`, accountObject)
  return response.data
}

// No need for the portfolio
const checkUsername = async (username) => {
  const response = await axios.get(`${baseUrl}validate_username/${username}`)
  if (response.data.message === "username available") {return true} else {return false}
}

// No need for the portfolio -- missing details but no need so I let as is for now
const userDetails = async () => {
  const loggedUserJSON = window.localStorage.getItem('jwtTk')
  const csrftoken = window.localStorage.getItem('csrftoken')
  const response = await axios.get(`${baseUrl}user`)
  return response.data
}

const exportedObject = { createAccount, checkUsername, userDetails }

export default exportedObject


