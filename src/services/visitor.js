import axios from 'axios'

// const baseUrl = 'https://tbonnard.pythonanywhere.com/api/'
const baseUrl = 'http://127.0.0.1:8000/api/'

const getVisitorDetails = async (object) => {
  const csrftoken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const response = await axios.post(`${baseUrl}getvisitor/`, object,  {
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      }})
    // console.log(response)
    // console.log(response.data)
    return response.data
}

const createVisitor = async (object) => {
    axios.defaults.withCredentials = true;
    const userToken = document.cookie.replace(/(?:(?:^|.*;\s*)jwtTk\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const csrftoken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const response = await axios.post(`${baseUrl}visitor/`, object,
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      }})
    return response.data
}


const getAllVisitors = async () => {
    const csrftoken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const userToken = document.cookie.replace(/(?:(?:^|.*;\s*)jwtTk\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const response = await axios.get(`${baseUrl}visitor/`,  {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
      }})
    return response.data
}


const exportedObject = { getVisitorDetails, createVisitor, getAllVisitors }
export default exportedObject
