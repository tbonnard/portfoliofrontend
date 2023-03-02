import axios from 'axios'

const baseUrl = 'https://tbonnard.pythonanywhere.com/api/visitor/'

const getVisitorDetails = async (id) => {
  const userToken = document.cookie.replace(/(?:(?:^|.*;\s*)jwtTk\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const csrftoken = window.localStorage.getItem('csrftoken')
    const response = await axios.get(`${baseUrl}${id}`,
    {
      headers: {
        Authorization: `Bearer ${userToken}`, // Send the token with the request
        'X-CSRFToken': csrftoken.csrftoken,
        'Content-Type': 'application/json',
      }
    })
    return response.data
}

const createVisitor = async (object) => {
    axios.defaults.withCredentials = true;
    const userToken = document.cookie.replace(/(?:(?:^|.*;\s*)jwtTk\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const csrftoken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const response = await axios.post(`${baseUrl}`, object,
    {
      headers: {
        Authorization: `Bearer ${userToken}`, // Send the token with the request
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      }})
    return response.data
}

const exportedObject = { getVisitorDetails, createVisitor }
export default exportedObject
